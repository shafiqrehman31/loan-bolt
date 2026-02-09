import type { Metadata } from 'next';
import FAQContent from './FAQContent';
import FAQSearch from './FAQSearch';
import styles from './faq.module.css';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Loan Bolt',
  description: 'Get answers to common questions about loans, applications, funding, and more with Loan Bolt.',
  keywords: 'loan FAQs, loan questions, borrowing FAQ, personal loan questions, loan application FAQ',
};

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.faqHero}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="mil-text-center">
                <h1 className="mil-mb-30 mil-up">
                  Frequently Asked <span className="mil-accent">Questions</span>
                </h1>
                <p className={`${styles.textLg} mil-soft mil-mb-40 mil-up`}>
                  Everything you need to know about getting a loan with Loan Bolt. 
                  Can't find what you're looking for? Contact our support team.
                </p>
                
                {/* Search Bar */}
                <FAQSearch />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <FAQContent />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="mil-text-center">
                <h2 className={`${styles.lightText} mil-mb-40`}>Why Choose Loan Bolt?</h2>
                <div className="row">
                  <div className="col-md-4 mil-mb-30">
                    <div className={styles.statItem}>
                      <i className={`fas fa-clock ${styles.statIcon}`}></i>
                      <h4 className={`${styles.statTitle} mil-mb-10`}>24-Hour Funding</h4>
                      <p className={styles.statDesc}>Fast approval and same-day funding</p>
                    </div>
                  </div>
                  <div className="col-md-4 mil-mb-30">
                    <div className={styles.statItem}>
                      <i className={`fas fa-shield-alt ${styles.statIcon}`}></i>
                      <h4 className={`${styles.statTitle} mil-mb-10`}>Bank-Level Security</h4>
                      <p className={styles.statDesc}>Your information is protected</p>
                    </div>
                  </div>
                  <div className="col-md-4 mil-mb-30">
                    <div className={styles.statItem}>
                      <i className={`fas fa-check-circle ${styles.statIcon}`}></i>
                      <h4 className={`${styles.statTitle} mil-mb-10`}>Transparent Fees</h4>
                      <p className={styles.statDesc}>No hidden costs, no surprises</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}