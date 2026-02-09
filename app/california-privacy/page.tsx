import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './california-privacy.module.css';

export const metadata: Metadata = {
  title: 'California Privacy Notice (CCPA/CPRA) - Loan Bolt',
  description: 'California Consumer Privacy Act notice for Loan Bolt. Learn about your privacy rights as a California resident.',
  keywords: 'california privacy, ccpa, cpra, privacy rights, do not sell my information, california consumer privacy act',
};

export default function CaliforniaPrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className={styles.heroContent}>
                <div className={styles.californiaBadge}>
                  CALIFORNIA PRIVACY NOTICE
                </div>
                <h1 className="mil-mb-30 mil-up">California Privacy Notice</h1>
                <p className={`${styles.textLg} mil-soft mil-mb-40 mil-up`}>
                  CCPA / CPRA - Your California Privacy Rights
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

      {/* Content Section */}
      <section className={styles.content}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className={styles.noticeContainer}>
                {/* Header Information */}
                <div className={styles.headerInfo}>
                  <h2 className="mil-mb-30">California Privacy Notice (CCPA / CPRA)</h2>
                  <div className={styles.effectiveDate}>
                    <p>Effective Date: January 06, 2026</p>
                    <p>Last Updated: January 06, 2026</p>
                  </div>
                  
                  <p className="mil-text-m mil-soft">
                    This California Privacy Notice supplements the Privacy Policy of Loan Bolt ("Company,"
                    "we," "us," or "our") and applies solely to California residents ("Consumers") as defined by the
                    California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA).
                  </p>
                  
                  <div className={styles.disclosureBox}>
                    <h4>Important Notice for California Residents</h4>
                    <p className="mil-text-m mil-soft">
                      This notice provides detailed information about your privacy rights under California law and 
                      how we handle your personal information.
                    </p>
                  </div>
                </div>

                {/* Notice Sections */}
                <div className={styles.noticeContent}>
                  
                  {/* Section 1 */}
                  <div className={styles.noticeSection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>1</span>
                      <h3>Our Role</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        Loan Bolt operates a financial lead-generation and distribution platform that connects
                        consumers seeking loan products with third-party lenders and financial service providers through
                        real-time routing and ping-tree technology.
                      </p>
                      <p className="mil-text-m mil-soft">
                        <strong>Loan Bolt is not a lender, does not make credit decisions, and does not issue loans.</strong>
                      </p>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className={styles.noticeSection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>2</span>
                      <h3>Categories of Personal Information Collected</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        Within the last 12 months, we may have collected the following categories of personal
                        information:
                      </p>
                      
                      <div className={styles.categoryBox}>
                        <div className={styles.categoryHeader}>A. Identifiers</div>
                        <ul className={`mil-text-m mil-soft ${styles.categoryList}`}>
                          <li>Full name</li>
                          <li>Email address</li>
                          <li>Phone number</li>
                          <li>IP address</li>
                          <li>Online identifiers</li>
                        </ul>
                      </div>
                      
                      <div className={styles.categoryBox}>
                        <div className={styles.categoryHeader}>B. Personal Information (Cal. Civ. Code §1798.80)</div>
                        <ul className={`mil-text-m mil-soft ${styles.categoryList}`}>
                          <li>Mailing address</li>
                          <li>Date of birth</li>
                          <li>Employment information</li>
                          <li>Income-related indicators</li>
                          <li>Loan request details</li>
                        </ul>
                      </div>
                      
                      <div className={styles.categoryBox}>
                        <div className={styles.categoryHeader}>C. Internet or Network Activity</div>
                        <ul className={`mil-text-m mil-soft ${styles.categoryList}`}>
                          <li>Website interaction data</li>
                          <li>Browsing behavior</li>
                          <li>Referral and affiliate source data</li>
                        </ul>
                      </div>
                      
                      <div className={styles.categoryBox}>
                        <div className={styles.categoryHeader}>D. Geolocation Data</div>
                        <ul className="mil-text-m mil-soft">
                          <li>Approximate location derived from IP address</li>
                        </ul>
                      </div>
                      
                      <div className={styles.categoryBox}>
                        <div className={styles.categoryHeader}>E. Sensitive Personal Information</div>
                        <ul className={`mil-text-m mil-soft ${styles.categoryList}`}>
                          <li>Financial information provided in connection with a loan request</li>
                          <li>Authentication or verification data (if applicable)</li>
                        </ul>
                      </div>
                      
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div className={styles.noticeSection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>3</span>
                      <h3>Sources of Personal Information</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        We collect personal information from:
                      </p>
                      <ul className="mil-text-m mil-soft">
                        <li>Consumers directly</li>
                        <li>Affiliate publishers and marketing partners</li>
                        <li>Lead generators</li>
                        <li>Data verification and fraud-prevention providers</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div className={styles.noticeSection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>4</span>
                      <h3>Purposes for Collection and Use</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        We collect and use personal information to:
                      </p>
                      <ul className="mil-text-m mil-soft">
                        <li>Match consumers with potential lenders or financial partners</li>
                        <li>Operate and optimize ping-tree lead-distribution systems</li>
                        <li>Communicate regarding loan inquiries</li>
                        <li>Verify identity and prevent fraud</li>
                        <li>Maintain compliance and audit records</li>
                        <li>Improve website performance and user experience</li>
                        <li>Comply with legal and regulatory obligations</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div className={styles.noticeSection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>5</span>
                      <h3>Disclosure, Sale, and Sharing of Personal Information</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <div className={styles.categoryBox}>
                        <div className={styles.categoryHeader}>A. Disclosure for Business Purposes</div>
                        <p className="mil-text-m mil-soft">
                          We may disclose personal information to:
                        </p>
                        <ul className="mil-text-m mil-soft">
                          <li>Service providers</li>
                          <li>Technology and lead-routing platforms</li>
                          <li>Hosting, analytics, and compliance vendors</li>
                        </ul>
                      </div>
                      
                      <div className={styles.categoryBox}>
                        <div className={styles.categoryHeader}>B. Sale or Sharing of Personal Information</div>
                        <p className="mil-text-m mil-soft">
                          Loan Bolt may sell or share personal information to third-party lenders and financial
                          buyers in exchange for monetary or other valuable consideration.
                        </p>
                        <p className="mil-text-m mil-soft">
                          This may include:
                        </p>
                        <ul className="mil-text-m mil-soft">
                          <li>Identifiers</li>
                          <li>Financial and loan-related information</li>
                          <li>Internet or network activity data</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 6 */}
                  <div className={styles.noticeSection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>6</span>
                      <h3>Sensitive Personal Information</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        Sensitive personal information is used only as reasonably necessary to:
                      </p>
                      <ul className="mil-text-m mil-soft">
                        <li>Provide requested services</li>
                        <li>Match consumers with lenders</li>
                        <li>Maintain platform security</li>
                        <li>Meet compliance obligations</li>
                      </ul>
                      <p className="mil-text-m mil-soft">
                        We do not use sensitive personal information for unrelated purposes.
                      </p>
                    </div>
                  </div>

                  {/* Section 7 - Your California Privacy Rights */}
                  <div className={styles.noticeSection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>7</span>
                      <h3>Your California Privacy Rights</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        If you are a California resident, you have the right to:
                      </p>
                      
                      <div className={styles.rightsSection}>
                        
                        <div className={styles.rightItem}>
                          <div className={styles.rightIcon}>
                            <i className="fas fa-search"></i>
                          </div>
                          <div className={styles.rightContent}>
                            <h5>A. Right to Know</h5>
                            <p className="mil-text-m mil-soft">
                              Request disclosure of categories of personal information collected, sources of personal information,
                              business or commercial purposes for collection, and categories of third parties with whom information is shared.
                            </p>
                          </div>
                        </div>
                        
                        <div className={styles.rightItem}>
                          <div className={styles.rightIcon}>
                            <i className="fas fa-trash-alt"></i>
                          </div>
                          <div className={styles.rightContent}>
                            <h5>B. Right to Delete</h5>
                            <p className="mil-text-m mil-soft">
                              Request deletion of personal information, subject to legal exceptions.
                            </p>
                          </div>
                        </div>
                        
                        <div className={styles.rightItem}>
                          <div className={styles.rightIcon}>
                            <i className="fas fa-edit"></i>
                          </div>
                          <div className={styles.rightContent}>
                            <h5>C. Right to Correct</h5>
                            <p className="mil-text-m mil-soft">
                              Request correction of inaccurate personal information.
                            </p>
                          </div>
                        </div>
                        
                        <div className={styles.rightItem}>
                          <div className={styles.rightIcon}>
                            <i className="fas fa-ban"></i>
                          </div>
                          <div className={styles.rightContent}>
                            <h5>D. Right to Opt Out of Sale or Sharing</h5>
                            <p className="mil-text-m mil-soft">
                              You may opt out of the sale or sharing of your personal information at any time.
                            </p>
                            <div className={styles.optOutSection}>
                              <p className="mil-text-m mil-soft">
                                <strong>Email: contact@loan-bold.com</strong>
                              </p>
                              <a href="mailto:contact@loan-bold.com?subject=Opt-Out%20Request" className={styles.optOutButton}>
                                Do Not Sell or Share My Personal Information
                              </a>
                            </div>
                          </div>
                        </div>
                        
                        <div className={styles.rightItem}>
                          <div className={styles.rightIcon}>
                            <i className="fas fa-lock"></i>
                          </div>
                          <div className={styles.rightContent}>
                            <h5>E. Right to Limit Use of Sensitive Personal Information</h5>
                            <p className="mil-text-m mil-soft">
                              You may request limitations on how sensitive personal information is used.
                            </p>
                          </div>
                        </div>
                        
                        <div className={styles.rightItem}>
                          <div className={styles.rightIcon}>
                            <i className="fas fa-balance-scale"></i>
                          </div>
                          <div className={styles.rightContent}>
                            <h5>F. Right to Non-Discrimination</h5>
                            <p className="mil-text-m mil-soft">
                              We will not discriminate against you for exercising your privacy rights.
                            </p>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  {/* Section 8 */}
                  <div className={styles.noticeSection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>8</span>
                      <h3>How to Submit a Privacy Request</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        You may submit a request by contacting us at:
                      </p>
                      <div className={styles.optOutSection}>
                        <p className="mil-text-m mil-soft">
                          <strong>Email: contact@loan-bold.com</strong>
                        </p>
                        <p className="mil-text-m mil-soft">
                          We may verify your identity before processing your request.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 9 */}
                  <div className={styles.noticeSection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>9</span>
                      <h3>Authorized Agents</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        You may designate an authorized agent to submit a request on your behalf. Proof of authorization
                        may be required.
                      </p>
                    </div>
                  </div>

                  {/* Section 10 */}
                  <div className={styles.noticeSection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>10</span>
                      <h3>Data Retention</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        We retain personal information only as long as necessary to:
                      </p>
                      <ul className="mil-text-m mil-soft">
                        <li>Fulfill lead-generation purposes</li>
                        <li>Meet legal and regulatory obligations</li>
                        <li>Resolve disputes</li>
                        <li>Enforce agreements</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 11 */}
                  <div className={styles.noticeSection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>11</span>
                      <h3>Minors</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        Loan Bolt does not knowingly sell or share the personal information of individuals under
                        16 years of age.
                      </p>
                    </div>
                  </div>

                  {/* Section 12 */}
                  <div className={styles.noticeSection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>12</span>
                      <h3>Updates to This Notice</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <p className="mil-text-m mil-soft">
                        We may update this California Privacy Notice from time to time. Any updates will be posted on
                        this page with a revised effective date.
                      </p>
                    </div>
                  </div>

                  {/* Section 13 */}
                  <div className={styles.noticeSection}>
                    <div className={styles.sectionHeader}>
                      <span className={styles.sectionNumber}>13</span>
                      <h3>Contact Information</h3>
                    </div>
                    <div className={styles.sectionContent}>
                      <div className={styles.contactSection}>
                        <h4>Loan Bolt</h4>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}