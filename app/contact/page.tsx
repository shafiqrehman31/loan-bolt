import type { Metadata } from 'next';

import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Loan Bolt',
  description: 'Get in touch with Loan Bolt',
};

export default function ContactPage() {
  return (
    <div className="mil-p-160-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="mil-text-center mil-mb-90">
              <h1 className="mil-mb-30">Contact Us</h1>
              <p className="mil-text-m mil-soft">
                Get in touch with our team
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 mil-mb-60">
            <h3 className="mil-mb-30">Get in Touch</h3>
            <div className="mil-mb-30">
              <h5 className="mil-mb-15">Address</h5>
              <p className="mil-text-m mil-soft">
                999 Rue du Cherche-Midi, 7755500666 Paris, France
              </p>
            </div>
            <div className="mil-mb-30">
              <h5 className="mil-mb-15">Phone</h5>
              <p className="mil-text-m mil-soft">+001 (808) 555-0111</p>
            </div>
            <div className="mil-mb-30">
              <h5 className="mil-mb-15">Email</h5>
              <p className="mil-text-m mil-soft">support@loanbolt.com</p>
            </div>
            <div className="mil-mb-30">
              <h5 className="mil-mb-15">Business Hours</h5>
              <p className="mil-text-m mil-soft">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div className="col-xl-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}