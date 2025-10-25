import { Suspense, useEffect, useState } from 'react';
import AppLayout from '@layouts/AppLayout';
import { sections } from '@data/sections';
import type { SectionId } from '@types/sections';
import { useSmoothScroll } from '@hooks/useSmoothScroll';

const App = (): JSX.Element => {
  const { register, scrollTo, sectionRefs } = useSmoothScroll<SectionId>();
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleEntries[0]) {
          const id = visibleEntries[0].target.getAttribute('data-section-id') as SectionId | null;
          if (id) {
            setActiveSection((current) => (current === id ? current : id));
          }
        }
      },
      {
        threshold: 0.4
      }
    );

    Object.entries(sectionRefs.current).forEach(([id, element]) => {
      if (element) {
        element.setAttribute('data-section-id', id);
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  const handleNavigate = (id: SectionId) => {
    scrollTo(id);
  };

  return (
    <AppLayout sections={sections} activeSection={activeSection} onNavigate={handleNavigate}>
      <Suspense fallback={<div className="loading-placeholder">Loading canvas…</div>}>
        {sections.map(({ id, title, description, component: SectionComponent }) => (
          <SectionComponent key={id} id={id} title={title} description={description} ref={register(id)} />
        ))}
      </Suspense>
    </AppLayout>
  );
};

export default App;
