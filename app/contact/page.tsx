import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact Loan Bolt - Get in Touch with Our Support Team',
  description: 'Reach out to Loan Bolt for customer support, loan inquiries, or partnership opportunities. We\'re here to help with all your financial needs.',
  keywords: 'contact loan bolt, customer support, loan inquiry, financial help, support team',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.contactHero}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className={`${styles.heroContent} mil-text-center`}>
                <h1 className="mil-mb-30 mil-up">
                  Get in <span className="mil-accent">Touch</span>
                </h1>
                <p className={`${styles.textLg} mil-soft mil-mb-40 mil-up`}>
                  Have questions about loans, applications, or need support? 
                  Our team is ready to help you with all your financial needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className={styles.mainSection}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 mil-mb-30">
              <div className={styles.contactInfo}>
                <div className={styles.infoHeader}>
                  <h2>Contact Information</h2>
                  <p className="mil-text-m">
                    Reach out to us through any of these channels. We typically respond within 24 hours.
                  </p>
                </div>

                <div className={styles.contactItems}>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className={styles.contactDetails}>
                      <h4>Address</h4>
                      <p>
                        3 Gelderd Road<br />
                        Leeds, England<br />
                        LS12 6LN<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className={styles.contactDetails}>
                      <h4>Email</h4>
                      <p>
                        <a 
                          href="mailto:contact@loan-bolt.com"
                          className={styles.emailLink}
                        >
                          contact@loan-bolt.com
                        </a>
                        <br />
                        For general inquiries and support
                      </p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <i className="fas fa-headset"></i>
                    </div>
                    <div className={styles.contactDetails}>
                      <h4>Customer Support</h4>
                      <p>
                        <strong className={styles.contactDetails} >General Inquiries:</strong>{' '}
                        <a href="mailto:contact@loan-bolt.com" className={styles.emailLink}>
                          contact@loan-bolt.com
                        </a>
                        <br />

                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.socialLinks}>
                  <h5>Follow Us</h5>
                  <div className={styles.socialIcons}>
                    <a href="#" className={styles.socialIcon} aria-label="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className={styles.socialIcon} aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className={styles.socialIcon} aria-label="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 mil-mb-30">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quick FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqHeader}>
            <h2>Common Questions</h2>
            <p className="mil-text-m">
              Quick answers to frequently asked questions about contacting us
            </p>
          </div>

          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <div className={styles.faqIcon}>
                <i className="fas fa-clock"></i>
              </div>
              <h4>Response Time</h4>
              <p>
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please include "URGENT" in your email subject.
              </p>
            </div>

            <div className={styles.faqItem}>
              <div className={styles.faqIcon}>
                <i className="fas fa-file-alt"></i>
              </div>
              <h4>Loan Applications</h4>
              <p>
                For loan application status or questions about the application process, 
                email us at contact@loan-bolt.com with your application reference number.
              </p>
            </div>

            <div className={styles.faqItem}>
              <div className={styles.faqIcon}>
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Security Notice</h4>
              <p>
                Never share sensitive financial information via email. 
                We will only ask for necessary details through our secure portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Get Started?</h2>
            <p>
              Apply for a loan in minutes and get a decision fast. 
              No hidden fees, transparent terms, and funds when you need them.
            </p>
            <div className={styles.buttonGroup}>
              <a href="/contact" className="mil-btn mil-md mil-add-arrow">
                Apply for a Loan
              </a>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}