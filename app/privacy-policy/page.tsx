import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './privacy.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy - Loan Bolt',
  description: 'Learn how Loan Bolt collects, uses, and protects your personal information in our comprehensive privacy policy.',
  keywords: 'privacy policy, data protection, personal information, loan bolt privacy, data security',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className={styles.heroContent}>
                <h1 className="mil-mb-30 mil-up">Privacy Policy</h1>
                <p className={`${styles.textLg} mil-soft mil-mb-40 mil-up`}>
                  Your privacy is important to us. Learn how we collect, use, and protect your information.
                </p>
                <div className="mil-up">
                  <Link href="/terms-conditions" className="mil-btn mil-md mil-light mil-mr-15">
                    Terms & Conditions
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

      {/* Privacy Content */}
      <section className={styles.content}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className={styles.privacyContainer}>
                {/* Header Information */}
                <div className={styles.headerInfo}>
                  <h2 className="mil-mb-30">Privacy Policy</h2>
                  <div className={styles.effectiveDate}>
                    <p>Effective Date: January 06, 2026</p>
                    <p>Last Updated: January 06, 2026</p>
                  </div>
                  
                  <p className="mil-text-m mil-soft">
                    Loan Bolt ("Company," "we," "us," or "our") operates a financial lead-generation platform
                    that connects consumers seeking loan products with third-party lenders and financial service
                    providers through a real-time distribution (ping-tree) model.
                  </p>
                  
                  <p className="mil-text-m mil-soft">
                    This Privacy Policy explains how we collect, use, share, and protect personal information when you
                    visit www.loan-bold.com ("Website") or submit information through our forms.
                  </p>
                  
                  <div className={styles.disclosureBox}>
                    <h4>1. Our Role (Important Disclosure)</h4>
                    <p className="mil-text-m mil-soft">
                      We are not a lender and do not make credit decisions. We operate as a lead generator / marketplace that matches consumers with potential lenders and financial partners.
                    </p>
                    <p className="mil-text-m mil-soft">
                      When you submit information:
                    </p>
                    <ul className="mil-text-m mil-soft">
                      <li>Your data may be shared with multiple lenders or buyers</li>
                      <li>Distribution occurs via automated decisioning (ping-tree technology)</li>
                      <li>Buyers may evaluate eligibility independently</li>
                    </ul>
                  </div>
                </div>

                {/* Privacy Sections */}
                <div className={styles.privacyContent}>
                  
                  {/* Section 2 */}
                  <div className={styles.privacySection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>2</span>
                      <h3>Information We Collect</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      
                      <div className={styles.infoList}>
                        <div className={styles.listHeader}>
                          <i className="fas fa-user-edit"></i>
                          <span>A. Information You Provide</span>
                        </div>
                        <p className="mil-text-m mil-soft">
                          When you submit a loan request or inquiry, we may collect:
                        </p>
                        <ul className="mil-text-m mil-soft">
                          <li>Full name</li>
                          <li>Email address</li>
                          <li>Phone number</li>
                          <li>Mailing address</li>
                          <li>Date of birth</li>
                          <li>Loan amount requested</li>
                          <li>Employment and income details</li>
                          <li>Banking or financial indicators (as required)</li>
                          <li>Consent and authorization records</li>
                        </ul>
                      </div>
                      
                      <div className={styles.infoList}>
                        <div className={styles.listHeader}>
                          <i className="fas fa-desktop"></i>
                          <span>B. Automatically Collected Information</span>
                        </div>
                        <ul className="mil-text-m mil-soft">
                          <li>IP address</li>
                          <li>Device and browser data</li>
                          <li>Geolocation (approximate)</li>
                          <li>Time and date stamps</li>
                          <li>Referral and affiliate source data</li>
                        </ul>
                      </div>
                      
                      <div className={styles.infoList}>
                        <div className={styles.listHeader}>
                          <i className="fas fa-users"></i>
                          <span>C. Information From Third Parties</span>
                        </div>
                        <p className="mil-text-m mil-soft">
                          We may receive data from:
                        </p>
                        <ul className="mil-text-m mil-soft">
                          <li>Affiliate publishers</li>
                          <li>Marketing partners</li>
                          <li>Data verification services</li>
                          <li>Fraud-prevention providers</li>
                        </ul>
                      </div>
                      
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div className={styles.privacySection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>3</span>
                      <h3>How the Ping-Tree Model Uses Your Data</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        Your information may be used as follows:
                      </p>
                      
                      <div className={styles.pingTreeSection}>
                        <div className={styles.pingStep}>
                          <span className={styles.stepNumber}>1</span>
                          <div>
                            <strong>Initial Evaluation (Ping)</strong>
                            <ul className="mil-text-m mil-soft">
                              <li>Limited data is shared with multiple potential lenders</li>
                              <li>Used to determine eligibility and pricing</li>
                              <li>May occur simultaneously or sequentially</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className={styles.pingStep}>
                          <span className={styles.stepNumber}>2</span>
                          <div>
                            <strong>Lead Delivery (Post)</strong>
                            <ul className="mil-text-m mil-soft">
                              <li>Full application data is sent to one or more matched lenders</li>
                              <li>Based on eligibility, availability, and business rules</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className={styles.pingStep}>
                          <span className={styles.stepNumber}>3</span>
                          <div>
                            <strong>Fallback Distribution</strong>
                            <ul className="mil-text-m mil-soft">
                              <li>If one lender declines, your information may be shared with others</li>
                              <li>Distribution may continue until a match is found or buyers are exhausted</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div className={styles.privacySection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>4</span>
                      <h3>How We Use Your Information</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        We use personal information to:
                      </p>
                      <ul className="mil-text-m mil-soft">
                        <li>Match consumers with lenders and financial partners</li>
                        <li>Operate and optimize lead-distribution systems</li>
                        <li>Communicate with you regarding your request</li>
                        <li>Verify identity and detect fraud</li>
                        <li>Maintain compliance records</li>
                        <li>Improve platform performance</li>
                        <li>Comply with legal and regulatory obligations</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div className={styles.privacySection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>5</span>
                      <h3>Information Sharing & Sale Disclosure</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      
                      <div className={styles.infoList}>
                        <div className={styles.listHeader}>
                          <i className="fas fa-university"></i>
                          <span>A. Lenders & Financial Buyers</span>
                        </div>
                        <p className="mil-text-m mil-soft">
                          We may share or sell your personal information to:
                        </p>
                        <ul className="mil-text-m mil-soft">
                          <li>Banks</li>
                          <li>Licensed lenders</li>
                          <li>Loan servicers</li>
                          <li>Financial service providers</li>
                        </ul>
                        <p className="mil-text-m mil-soft">
                          This sharing may be considered a "sale" or "sharing" under certain state privacy laws.
                        </p>
                      </div>
                      
                      <div className={styles.infoList}>
                        <div className={styles.listHeader}>
                          <i className="fas fa-cogs"></i>
                          <span>B. Service Providers</span>
                        </div>
                        <p className="mil-text-m mil-soft">Including:</p>
                        <ul className="mil-text-m mil-soft">
                          <li>Lead-routing platforms</li>
                          <li>Hosting providers</li>
                          <li>Analytics services</li>
                          <li>CRM and call-tracking vendors</li>
                          <li>Compliance and audit partners</li>
                        </ul>
                      </div>
                      
                      <div className={styles.infoList}>
                        <div className={styles.listHeader}>
                          <i className="fas fa-gavel"></i>
                          <span>C. Legal & Compliance</span>
                        </div>
                        <p className="mil-text-m mil-soft">
                          We may disclose information to:
                        </p>
                        <ul className="mil-text-m mil-soft">
                          <li>Comply with law or court order</li>
                          <li>Respond to regulatory requests</li>
                          <li>Prevent fraud or abuse</li>
                          <li>Enforce agreements</li>
                        </ul>
                      </div>
                      
                    </div>
                  </div>

                  {/* Section 6 */}
                  <div className={styles.privacySection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>6</span>
                      <h3>TCPA & Communication Consent</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        By submitting your information, you expressly consent to receive communications from us and our
                        partners, including:
                      </p>
                      <ul className="mil-text-m mil-soft">
                        <li>Phone calls</li>
                        <li>Text messages (SMS)</li>
                        <li>Emails</li>
                      </ul>
                      <p className="mil-text-m mil-soft">
                        This may include automated dialing systems or prerecorded messages, as permitted by law.
                      </p>
                      <div className={styles.highlightBox}>
                        <p className="mil-text-m mil-soft">
                          <strong>Consent:</strong>
                        </p>
                        <ul className="mil-text-m mil-soft">
                          <li>Is not required to obtain credit</li>
                          <li>Can be revoked at any time by following opt-out instructions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 7 */}
                  <div className={styles.privacySection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>7</span>
                      <h3>Gramm-Leach-Bliley Act (GLBA)</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        As a financial lead-generation entity, we comply with the GLBA by:
                      </p>
                      <ul className="mil-text-m mil-soft">
                        <li>Limiting access to consumer information</li>
                        <li>Implementing security safeguards</li>
                        <li>Sharing data only as permitted by law</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 8 */}
                  <div className={styles.privacySection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>8</span>
                      <h3>Cookies & Tracking</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        We use cookies and similar technologies to:
                      </p>
                      <ul className="mil-text-m mil-soft">
                        <li>Enable Website functionality</li>
                        <li>Track affiliate attribution</li>
                        <li>Measure performance</li>
                        <li>Detect fraud</li>
                      </ul>
                      <p className="mil-text-m mil-soft">
                        You may disable cookies in your browser settings.
                      </p>
                    </div>
                  </div>

                  {/* Section 9 */}
                  <div className={styles.privacySection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>9</span>
                      <h3>Data Retention</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        We retain personal information only as long as necessary to:
                      </p>
                      <ul className="mil-text-m mil-soft">
                        <li>Fulfill lead-generation purposes</li>
                        <li>Meet regulatory requirements</li>
                        <li>Resolve disputes</li>
                        <li>Maintain audit and compliance records</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 10 */}
                  <div className={styles.privacySection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>10</span>
                      <h3>Your Privacy Rights (U.S.)</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <div className={styles.rightsSection}>
                        <h4 className="mil-mb-20">California Residents (CCPA/CPRA)</h4>
                        <p className="mil-text-m mil-soft mil-mb-20">
                          You have the right to:
                        </p>
                        <div className={styles.rightItem}>
                          <i className="fas fa-check-circle"></i>
                          <span>Know what personal information we collect</span>
                        </div>
                        <div className={styles.rightItem}>
                          <i className="fas fa-check-circle"></i>
                          <span>Request deletion or correction</span>
                        </div>
                        <div className={styles.rightItem}>
                          <i className="fas fa-check-circle"></i>
                          <span>Opt out of the sale or sharing of personal information</span>
                        </div>
                        <div className={styles.rightItem}>
                          <i className="fas fa-check-circle"></i>
                          <span>Limit use of sensitive personal information</span>
                        </div>
                        <div className={styles.rightItem}>
                          <i className="fas fa-check-circle"></i>
                          <span>Not be discriminated against</span>
                        </div>
                        <div className="mil-mt-20">
                          <p className="mil-text-m mil-soft">
                            <strong>Opt-Out:</strong> email contact@loan-bold.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 11 */}
                  <div className={styles.privacySection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>11</span>
                      <h3>Do Not Track Signals</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        We do not currently respond to "Do Not Track" signals.
                      </p>
                    </div>
                  </div>

                  {/* Section 12 */}
                  <div className={styles.privacySection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>12</span>
                      <h3>Children's Privacy</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        Our Website is intended for individuals 18 years or older.
                        We do not knowingly collect information from minors.
                      </p>
                    </div>
                  </div>

                  {/* Section 13 */}
                  <div className={styles.privacySection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>13</span>
                      <h3>Security Measures</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        We use reasonable safeguards including:
                      </p>
                      <ul className="mil-text-m mil-soft">
                        <li>SSL encryption</li>
                        <li>Access controls</li>
                        <li>Secure storage systems</li>
                        <li>Regular security reviews</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 14 */}
                  <div className={styles.privacySection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>14</span>
                      <h3>Policy Updates</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        We may update this Privacy Policy periodically. Changes will be posted on this page with a revised effective date.
                      </p>
                    </div>
                  </div>

                  {/* Section 15 */}
                  <div className={styles.privacySection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>15</span>
                      <h3>Contact Us</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <div className={styles.contactSection}>
                        <h4>Loan Bolt</h4>
                        <div className={styles.contactInfo}>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}