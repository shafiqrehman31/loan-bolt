import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Loan Bolt',
  description: 'Learn about Loan Bolt and our mission',
};

export default function AboutPage() {
  return (
    <div className="mil-p-160-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="mil-text-center mil-mb-90">
              <h1 className="mil-mb-30">About Loan Bolt</h1>
              <p className="mil-text-m mil-soft">
                Your trusted partner in financial technology
              </p>
            </div>
          </div>
        </div>
        
        <div className="row mil-mb-90">
          <div className="col-xl-6">
            <h2 className="mil-mb-30">Our Mission</h2>
            <p className="mil-text-m mil-soft mil-mb-30">
              At Loan Bolt, we're revolutionizing the way people manage their finances. 
              Our mission is to provide secure, fast, and accessible financial services 
              to everyone, everywhere.
            </p>
            <p className="mil-text-m mil-soft">
              We believe in transparency, security, and innovation. Our team of experts 
              works tirelessly to ensure that every transaction is protected and every 
              customer experience is exceptional.
            </p>
          </div>
          <div className="col-xl-6">
            <div className="mil-image-frame">
              <img src="/img/home-1/About-Image.png" alt="About Us" />
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-xl-4 mil-mb-30">
            <div className="mil-icon-box mil-text-center">
              <div className="mil-icon-frame mil-icon-bg mil-mb-30">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h5 className="mil-mb-20">Security First</h5>
              <p className="mil-text-m mil-soft">
                Bank-level security for all your transactions
              </p>
            </div>
          </div>
          <div className="col-xl-4 mil-mb-30">
            <div className="mil-icon-box mil-text-center">
              <div className="mil-icon-frame mil-icon-bg mil-mb-30">
                <i className="fas fa-bolt"></i>
              </div>
              <h5 className="mil-mb-20">Lightning Fast</h5>
              <p className="mil-text-m mil-soft">
                Instant transfers and real-time processing
              </p>
            </div>
          </div>
          <div className="col-xl-4 mil-mb-30">
            <div className="mil-icon-box mil-text-center">
              <div className="mil-icon-frame mil-icon-bg mil-mb-30">
                <i className="fas fa-globe"></i>
              </div>
              <h5 className="mil-mb-20">Global Reach</h5>
              <p className="mil-text-m mil-soft">
                Send and receive money across 170+ countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}