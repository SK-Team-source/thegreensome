import { site } from '@/data/site';
import { contactIntro } from '@/data/home';
import ContactForm from './ContactForm';

// The original site repeats this address, email and message form at the foot of every page.
export default function ContactSection({ headingLevel = 'h2', idPrefix = 'contact', showIntro = true }) {
  const Heading = headingLevel;
  return (
    <section className="section contact" aria-labelledby={`${idPrefix}-heading`}>
      <div className="container contact__grid">
        <div className="contact__info">
          {showIntro ? (
            <>
              <Heading className="contact__title" id={`${idPrefix}-heading`}>
                {contactIntro.heading}
              </Heading>
              <p className="contact__lead">{contactIntro.text}</p>
            </>
          ) : (
            <Heading className="visually-hidden" id={`${idPrefix}-heading`}>
              Get in touch
            </Heading>
          )}

          <dl className="contact__details">
            <div>
              <dt>
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                Address
              </dt>
              <dd>
                <address>
                  {site.address.lines.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                  <a href={site.phone.href}>Tel: {site.phone.display}</a>
                </address>
              </dd>
            </div>
            <div>
              <dt>
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="1" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  <path d="m4 6.5 8 6.5 8-6.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                Email
              </dt>
              <dd>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="contact__form">
          <ContactForm idPrefix={idPrefix} />
        </div>
      </div>
    </section>
  );
}
