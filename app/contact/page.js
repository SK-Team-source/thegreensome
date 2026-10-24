import { PageIntro } from '@/components/EditorialComponents';

export const metadata = {
  title: 'Contact',
  description: 'Contact The Greensome with editorial corrections and company enquiries.',
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Get in touch"
        title="Contact"
        description="Have a question, a source we should read or a correction to suggest? We would like to hear from you."
        image={{
          src: '/images/guide/contact.jpg',
          alt: 'A notebook and pen on a desk',
        }}
      />
      <section className="section">
        <div className="section__inner contact-layout">
          <div>
            <p className="eyebrow">Email</p>
            <a className="contact-email" href="mailto:info@thegreensome.com">
              info@thegreensome.com <span aria-hidden="true">↗</span>
            </a>
            <p className="contact-note">
              For corrections, include the page link and the source you would like us to
              consider. We do not currently use a contact form.
            </p>
          </div>
          <address className="company-card">
            <p className="eyebrow">Registered office</p>
            <p>The Greensome Ltd</p>
            <p>41 Brushfield Way</p>
            <p>Knaphill, Woking</p>
            <p>Surrey, GU21 2TQ</p>
            <p>Registered in England and Wales · Company no. 11743419</p>
          </address>
        </div>
      </section>
    </>
  );
}
