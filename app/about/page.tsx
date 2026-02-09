import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Loan Bolt - Our Mission, Vision & Values',
  description: 'Discover Loan Bolt - revolutionizing online lending with speed, transparency, and security. Learn about our mission to make borrowing accessible and stress-free.',
  keywords: 'online loans, fast approval, personal loans, financial technology, loan platform',
};

export default function AboutPage() {
  const stats = [
    { value: '5000+', label: 'Happy Customers' },
    { value: '$10M+', label: 'Loans Processed' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '24h', label: 'Avg. Funding Time' },
  ];

  const values = [
    {
      icon: 'fas fa-handshake',
      title: 'Transparency',
      description: 'No hidden fees or surprises. We believe in complete clarity about rates, terms, and conditions from day one.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Speed',
      description: 'Technology-driven processes that deliver quick decisions and faster funding when you need it most.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Security',
      description: 'Bank-level encryption and security protocols to protect your personal and financial information.'
    },
    {
      icon: 'fas fa-users',
      title: 'Accessibility',
      description: 'Financial solutions designed for real people, with options for various credit backgrounds.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Empathy',
      description: 'We understand financial stress and design our services with genuine care for our customers.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Innovation',
      description: 'Continually improving our platform to provide smarter, more efficient lending solutions.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroAbout}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className={styles.heroContent}>
                <span className={styles.badge}>About Loan Bolt</span>
                <h1 className="mil-mb-40 mil-up">
                  Revolutionizing <span className="mil-accent">Online Lending</span> 
                  <br />with Speed & Transparency
                </h1>
                <p className={`${styles.textLg} mil-mb-50 mil-up`}>
                  Loan Bolt is designed to help individuals access loan options quickly and conveniently. 
                  Our goal is to remove confusion from the borrowing process by offering a straightforward, 
                  secure, and transparent experience.
                </p>
                <div className="mil-up">
                  <Link href="/contact" className="mil-btn mil-md mil-add-arrow mil-mr-15">
                    Apply Now
                  </Link>

                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className={`${styles.heroImage} mil-up`}>
                <img 
                  src="/img/home-1/About-Image.png" 
                  alt="Loan Bolt Platform" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className={`${styles.statBox} mil-up`}>
                  <h2>{stat.value}</h2>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mil-p-160-130">
        <div className="container">
          <div className="row align-items-center mil-mb-90">
            <div className="col-xl-6">
              <div className={`${styles.imageFrame} mil-up`}>
                <img src="/img/home-1/Our-values.png" alt="Our Mission" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className={`${styles.pl60} mil-up`}>
                <span className={styles.badge}>Our Mission</span>
                <h2 className="mil-mb-30">Making Borrowing Accessible to All</h2>
                <p className="mil-text-m mil-soft mil-mb-30">
                  At Loan Bolt, we're on a mission to democratize access to credit. We believe that 
                  everyone deserves a fair chance at financial stability, regardless of their credit 
                  history or background.
                </p>
                <p className="mil-text-m mil-soft">
                  We've built our platform from the ground up to prioritize speed, transparency, and 
                  customer care. By leveraging advanced technology and maintaining human-centered 
                  design, we're creating a lending experience that actually works for people.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.valuesHeader}>
            <span className={styles.badge}>Our Values</span>
            <h2 className="mil-mb-30 mil-up">What We Stand For</h2>
            <p className="mil-text-m mil-soft mil-up">
              These principles guide everything we do at Loan Bolt
            </p>
          </div>

          <div className="row">
            {values.map((value, index) => (
              <div key={index} className="col-lg-4 col-md-6 mil-mb-60">
                <div className={`${styles.valueCard} mil-up`}>
                  <div className={styles.iconFrame}>
                    <i className={value.icon}></i>
                  </div>
                  <h5 className="mil-mb-20">{value.title}</h5>
                  <p className="mil-text-m mil-soft">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}