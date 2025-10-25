import { useCallback, useMemo, useRef } from 'react';

type ScrollBehavior = 'auto' | 'smooth';

export interface SmoothScrollOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
}

const defaultOptions: SmoothScrollOptions = {
  behavior: 'smooth',
  block: 'start'
};

/**
 * useSmoothScroll tracks DOM nodes by id and exposes imperative scrolling helpers.
 * Generics ensure that calling scrollToSection restricts callers to known section ids.
 */
export const useSmoothScroll = <T extends string>() => {
  const sectionRefs = useRef<Record<T, HTMLElement | null>>({} as Record<T, HTMLElement | null>);

  const register = useCallback(
    (id: T) => (element: HTMLElement | null) => {
      sectionRefs.current[id] = element;
    },
    []
  );

  const scrollTo = useCallback(
    (id: T, options: SmoothScrollOptions = defaultOptions) => {
      const element = sectionRefs.current[id];
      if (element) {
        element.scrollIntoView({
          behavior: options.behavior ?? defaultOptions.behavior,
          block: options.block ?? defaultOptions.block
        });
      }
    },
    []
  );

  const api = useMemo(
    () => ({
      register,
      scrollTo,
      sectionRefs
    }),
    [register, scrollTo]
  );

  return api;
};
