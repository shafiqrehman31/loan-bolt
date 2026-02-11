export default function FinalCTA() {
  return (
    <div className="mil-cta mil-up">
      <div className="container">
        <div className="mil-out-frame mil-bg-1">
          <div className="mil-gradient-plus"></div>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-7 mil-mt-60">
              <h2 className="mil-mb-30 mil-up">
                Get Connected with Lenders in as Little as<span className="mil-accent"> 24 Hours</span>
              </h2>
              <p className="mil-text-m mil-mb-60 mil-up">
                Access a fast, secure, and transparent process with competitive loan options.<br /> Join thousands of satisfied customers today.
              </p>
              <div className="mil-up">
                <a href="/contact" className="mil-btn mil-md mil-add-arrow">
                  Apply Now
                </a>
              </div>
              
              <div className="mil-mt-40">
                <div className="row">
                  <div className="col-md-4">
                    <div className="mil-up d-flex align-items-center mb-3">
                      <i className="fas fa-bolt mil-accent me-2"></i>
                      <span className="mil-text-s">Fast Approval</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mil-up d-flex align-items-center mb-3">
                      <i className="fas fa-lock mil-accent me-2"></i>
                      <span className="mil-text-s">Secure Process</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mil-up d-flex align-items-center mb-3">
                      <i className="fas fa-percent mil-accent me-2"></i>
                      <span className="mil-text-s">Low Rates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 mil-mt-60">
              <img 
                src="/img/home-1/4th.png" 
                alt="Quick Loan Process" 
                style={{ width: "100%" }} 
                className="mil-up" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}