import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './terms.module.css';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Loan Bolt',
  description: 'Terms and Conditions for Loan Bolt loan referral and lead-generation services.',
  keywords: 'loan bolt terms, terms and conditions, loan agreement, privacy policy, user agreement',
};

export default function TermsConditionsPage() {
  const currentDate = new Date();
  const effectiveDate = new Date('2026-01-06');
  
  const termsSections = [
    {
      number: '1',
      title: 'Loan Referral & Lead Generation Service',
      content: `Loan Bolt operates an online loan referral and lead-distribution platform that connects consumers with third-party lenders, lender networks, and financial service providers ("Lender Partners").`
    },
    {
      number: '2',
      title: 'No Lending or Credit Decisions',
      content: `Loan Bolt is not a lender, does not issue loans, and does not make credit decisions. We do not guarantee that you will receive a loan offer, that you will be matched with a lender, or any specific loan amount, rate, fee, or term. All lending decisions are made solely by Lender Partners.`
    },
    {
      number: '3',
      title: 'Information Sharing & Contact Consent',
      content: `By submitting a Request Form, you authorize Loan Bolt to share your information with multiple Lender Partners, acknowledge that you are requesting loan offers from third parties, and agree that Loan Bolt and Lender Partners may contact you via phone calls, text messages (SMS), emails, and automated dialing systems or prerecorded messages (where permitted by law). Consent is not required to purchase goods or services.`
    },
    {
      number: '4',
      title: 'Credit Checks',
      content: `Lender Partners may review your information in real time and may perform soft credit checks (which do not affect credit scores), or hard credit inquiries (which may affect your credit score). These checks may be conducted through Experian, Equifax, TransUnion, or alternative credit bureaus or data providers. By submitting a Request Form, you authorize such reviews.`
    },
    {
      number: '5',
      title: 'Redirection to Lender Websites',
      content: `If a Lender Partner determines that your information meets its criteria, you may be redirected to the lender's website. Once redirected, Loan Bolt is no longer involved, the lender's own terms and privacy policies apply, and Loan Bolt is not responsible for lender actions or decisions.`
    },
    {
      number: '6',
      title: 'Electronic Disclosures & E-Sign Consent',
      content: `By using the Service, you consent to receive electronic disclosures, notices, agreements, and communications. Lender Partners may require electronic signatures, which are legally binding and equivalent to handwritten signatures. You may withdraw electronic consent directly with the lender, though doing so may affect your ability to obtain a loan.`
    },
    {
      number: '7',
      title: 'Accuracy of Information',
      content: `You represent that all information you submit is accurate, current, and truthful. Providing false or misleading information may result in rejection of your request or suspension or termination of access to the Service.`
    },
    {
      number: '8',
      title: 'Changes to the Service',
      content: `Loan Bolt may modify, suspend, or discontinue any part of the Service at any time without notice. We are not responsible for delays or failures caused by incorrect user information or internet or system issues beyond our control.`
    },
    {
      number: '9',
      title: 'Disclaimers',
      content: `The Service is provided "AS IS" and "AS AVAILABLE." Loan Bolt disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. Use of the Service is at your own risk.`
    },
    {
      number: '10',
      title: 'Limitation of Liability',
      content: `To the maximum extent permitted by law, Loan Bolt, its partners, affiliates, and service providers are not liable for indirect or consequential damages, credit decisions or lender actions, loss of data or business, or unauthorized access beyond reasonable security measures. Some states may not allow these limitations; rights may vary.`
    },
    {
      number: '11',
      title: 'Indemnification',
      content: `You agree to indemnify and hold harmless Loan Bolt and its partners from any claims, damages, or expenses arising from your use of the Service, your violation of these Terms, or your violation of any law or third-party rights.`
    },
    {
      number: '12',
      title: 'Third-Party Links',
      content: `The Service may include links to third-party websites. Loan Bolt does not control or endorse third-party content or services.`
    },
    {
      number: '13',
      title: 'Binding Arbitration & Class Action Waiver',
      content: `Any dispute arising from or relating to these Terms or the Service shall be resolved exclusively through binding arbitration, governed by the Federal Arbitration Act, administered by the American Arbitration Association (AAA). You agree to no class actions, no representative claims, and arbitration on an individual basis only. You may pursue qualifying claims in small-claims court.`
    },
    {
      number: '14',
      title: 'Governing Law',
      content: `These Terms are governed by the laws of the United States and the applicable state, without regard to conflict-of-law principles.`
    },
    {
      number: '15',
      title: 'Changes to These Terms',
      content: `We may update these Terms at any time by posting changes on the Site. Continued use of the Service constitutes acceptance of the revised Terms.`
    },
    {
      number: '16',
      title: 'Contact Information',
      content: `Loan Bolt - Website: www.loan-bold.com - Email: contact@loan-bold.com`
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className={styles.heroContent}>
                <h1 className="mil-mb-30 mil-up">Terms & Conditions</h1>
                <p className={`${styles.textLg} mil-soft mil-mb-40 mil-up`}>
                  Please read these Terms and Conditions carefully before using our services.
                </p>
                <div className="mil-up">
                  <Link href="/privacy-policy" className="mil-btn mil-md mil-light mil-mr-15">
                    Privacy Policy
                  </Link>
                  <Link href="/contact" className="mil-btn mil-md mil-add-arrow">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className={styles.content}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className={styles.termsContainer}>
                {/* Header Information */}
                <div className={styles.headerInfo}>
                  <h2 className="mil-mb-30">Terms and Conditions of Use</h2>
                  <div className={styles.effectiveDate}>
                    <p>Effective Date: January 06, 2026</p>
                    <p>Last Updated: January 06, 2026</p>
                  </div>
                  
                  <p className="mil-text-m mil-soft mil-mb-30">
                    loan-bold.com and its owner and operator ("Loan Bolt," "we," "us," or "our")
                    provide loan referral and lead-generation services (described below), related content, and
                    technology through our website located at www.loan-bold.com (the "Site") and any related
                    applications, tools, features, or technologies (collectively, the "Service").
                  </p>
                  
                  <p className="mil-text-m mil-soft mil-mb-30">
                    By accessing, browsing, or using any part of the Service, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms and Conditions of Use ("Terms").
                    If you do not agree to these Terms, you must not use the Service.
                  </p>
                  
                  <div className={styles.importantNotice}>
                    <strong>IMPORTANT NOTICE REGARDING ARBITRATION</strong>
                    <p>PLEASE READ THESE TERMS CAREFULLY.</p>
                    <p>
                      They include a binding arbitration agreement, a class-action waiver, and limitations on your legal
                      rights. By using the Service, you agree that disputes will be resolved individually through
                      arbitration, not in court, and not as part of a class action.
                    </p>
                  </div>
                </div>

                {/* Terms Sections */}
                <div className={styles.termsContent}>
                  {termsSections.map((section, index) => (
                    <div key={index} className={styles.termsSection}>
                      <div className={styles.sectionHeader}>
                        <span className={styles.sectionNumber}>{section.number}</span>
                        <h3>{section.title}</h3>
                      </div>
                      <div className={styles.sectionContent}>
                        {section.content.split('\n').map((paragraph, pIndex) => (
                          <p key={pIndex} className="mil-text-m mil-soft">
                            {paragraph}
                          </p>
                        ))}
                        
                        {/* Special content for section 1 */}
                        {section.number === '1' && (
                          <div className={styles.highlightBox}>
                            <p className="mil-text-m mil-soft">
                              To use the Service, you must complete an online request form ("Request Form") that may require personal information, including but not limited to:
                            </p>
                            <ul className="mil-text-m mil-soft">
                              <li>Name</li>
                              <li>Address</li>
                              <li>Phone number</li>
                              <li>Email address</li>
                              <li>Employment and income information</li>
                              <li>Banking or financial details</li>
                              <li>Social Security number (where required by lenders)</li>
                            </ul>
                            <p className="mil-text-m mil-soft">
                              Our Privacy Policy governs how we collect and use this information and is incorporated into these Terms by reference.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Information Box */}
                <div className={styles.contactSection}>
                  <h4>Need Help?</h4>
                  <p className="mil-text-m mil-soft mil-mb-30">
                    If you have any questions about these Terms and Conditions, please contact us.
                  </p>
                  <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                      <i className="fas fa-globe"></i>
                      <span>Website: www.loan-bold.com</span>
                    </div>
                    <div className={styles.contactItem}>
                      <i className="fas fa-envelope"></i>
                      <span>Email: contact@loan-bold.com</span>
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