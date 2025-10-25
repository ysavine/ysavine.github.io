import { forwardRef } from 'react';
import type { SectionProps } from '@types/sections';

const ContactSection = forwardRef<HTMLDivElement, SectionProps>(({ id, title, description }, ref) => (
  <section id={id} ref={ref} className="section section--standard">
    <div className="section__inner">
      <header className="section__header">
        <h2>{title}</h2>
        <p>{description}</p>
      </header>
      <div className="section__body">
        <form className="contact-form">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" placeholder="you@example.com" />
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows={4} placeholder="Let’s build something memorable." />
          <button type="submit" className="btn btn--primary">
            TODO: Wire to your email provider or automation
          </button>
        </form>
        <aside className="contact-aside">
          <h3>Other ways to connect</h3>
          <ul>
            <li>TODO: Add LinkedIn, GitHub, or social links.</li>
            <li>TODO: Embed Calendly or add availability times.</li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
));

ContactSection.displayName = 'ContactSection';

export default ContactSection;
