import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './before-apply.module.css';

export const metadata: Metadata = {
  title: 'Before You Apply - Important Information | Loan Bolt',
  description: 'Important things to know before applying for a loan with Loan Bolt. Understand fees, credit impact, collections, and our role in the lending process.',
  keywords: 'loan application tips, before applying for loan, loan terms explained, credit score impact, loan fees',
};

export default function BeforeApplyPage() {
  const sections = [
    {
      icon: 'fas fa-exclamation-triangle',
      title: 'Important Things to Know Before You Apply',
      content: `Taking out a loan is a serious financial decision. Before you accept any loan offer, make sure you understand how it works and what could happen if you don't follow the loan terms.`,
      highlight: true
    },
    {
      icon: 'fas fa-clock',
      title: 'If You Pay Late or Miss Payments',
      content: `When you accept a loan, you agree to pay it back on time, with interest, and according to the repayment schedule set by the lender. If you pay late, miss a payment, or don't repay the loan, the lender may charge late fees, penalties, and additional interest. Loan Bolt is not a lender, and we do not control loan fees, penalties, or repayment rules. Always read the lender's loan agreement carefully so you know what happens if a payment is late or missed.`,
      bulletPoints: [
        'On time',
        'With interest',
        'According to the repayment schedule set by the lender'
      ],
      warningPoints: [
        'Late fees',
        'Penalties',
        'Additional interest'
      ]
    },
    {
      icon: 'fas fa-chart-line',
      title: 'How Your Credit Score May Be Affected',
      content: `Lenders may check your credit to decide whether to offer you a loan. Missing or late payments can also hurt your credit score and stay on your credit report.`,
      bulletPoints: [
        'Some lenders use a soft credit check, which does not affect your credit score.',
        'If you move forward with a loan, the lender may perform a hard credit check, which can affect your credit score.'
      ]
    },
    {
      icon: 'fas fa-handshake',
      title: 'Debt Collection',
      content: `Loan Bolt does not collect payments and does not handle debt collection. If you do not repay your loan, the lender may contact you to collect the debt. The lender's collection rules will be explained in your loan agreement. If you have questions about payments or collections, contact your lender directly.`
    },
    {
      icon: 'fas fa-bolt',
      title: 'How Long It Takes to Get Your Money',
      content: `If a lender approves your loan, the time it takes to receive funds can vary. Loan Bolt does not control funding times.`,
      bulletPoints: [
        'The lender',
        'Your bank',
        'The day and time of approval'
      ]
    },
    {
      icon: 'fas fa-info-circle',
      title: 'Our Role',
      content: `Loan Bolt helps connect you with lenders — we do not provide loans. All loan decisions and terms come directly from the lender.`,
      bulletPoints: [
        'We do not decide who gets approved',
        'We do not set loan terms',
        'We do not control interest rates or fees'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="mil-text-center">
                <h1 className="mil-mb-30 mil-up">
                  Before You <span className="mil-accent">Apply</span>
                </h1>
                <p className={`${styles.textLg} mil-soft mil-mb-40 mil-up`}>
                  Important information to understand before applying for a loan.
                  Make informed decisions about your financial future.
                </p>
                <div className="mil-up">
                  <Link href="/contact" className="mil-btn mil-md mil-add-arrow mil-mr-15">
                    Apply Now
                  </Link>
                  <Link href="/faq" className="mil-btn mil-md mil-light">
                    View FAQs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.content}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className={styles.beforeApplyGrid}>
                {sections.map((section, index) => (
                  <div 
                    key={index} 
                    className={`${styles.applySection} ${section.highlight ? styles.highlightSection : ''}`}
                  >
                    <div className={styles.sectionHeader}>
                      <div className={styles.sectionIcon}>
                        <i className={section.icon}></i>
                      </div>
                      <h3 className="mil-mb-20">{section.title}</h3>
                    </div>
                    
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft mil-mb-30">{section.content}</p>
                      
                      {section.bulletPoints && (
                        <div className={styles.bulletPoints}>
                          <ul className="mil-text-m mil-soft">
                            {section.bulletPoints.map((point, idx) => (
                              <li key={idx} className="mil-mb-15">
                                <i className={`fas fa-check mil-accent ${styles.mr10}`}></i>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {section.warningPoints && (
                        <div className={styles.warningPoints}>
                          <div className={styles.warningHeader}>
                            <i className={`fas fa-exclamation-circle ${styles.mr10}`}></i>
                            <strong>The lender may charge:</strong>
                          </div>
                          <ul className="mil-text-m mil-soft">
                            {section.warningPoints.map((point, idx) => (
                              <li key={idx} className="mil-mb-10">
                                • {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Important Notice */}
              <div className={styles.importantNotice}>
                <div className={styles.noticeHeader}>
                  <i className={`fas fa-shield-alt ${styles.mr15}`}></i>
                  <h4>Important Notice</h4>
                </div>
                <p className="mil-text-m mil-soft">
                  This information is provided to help you make informed decisions. Loan terms and conditions 
                  vary by lender. Always read and understand the lender's loan agreement before accepting any 
                  loan offer. If you have questions about specific loan terms, contact the lender directly.
                </p>
              </div>

              {/* CTA Section */}
              <div className={styles.applyCta}>
                <h3 className="mil-mb-30">Ready to Apply?</h3>
                <p className={`${styles.ctaText} mil-text-m`}>
                  Now that you understand the important information, you can proceed with confidence.
                </p>
                <div className={`${styles.flex} ${styles.gap20}`}>
                  <Link href="/contact" className="mil-btn mil-md mil-add-arrow">
                    Start Application
                  </Link>
                  <Link href="/contact" className="mil-btn mil-md mil-light">
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}