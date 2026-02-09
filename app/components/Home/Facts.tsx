export default function Facts() {
  return (
    <div className="mil-facts mil-p-0-80">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-6">
            <div className="row">
              <div className="col-xl-6 mil-sm-text-center mil-mb-30 mil-up">
                <p className="h1 mil-display mil-mb-15">
                  <span className="mil-accent mil-counter" data-number="7">
                    500
                  </span>
                  <span className="mil-pale">K+</span>
                </p>
                <h5>Issued Payments</h5>
              </div>
              <div className="col-xl-6 mil-sm-text-center mil-mb-80 mil-up">
                <p className="h1 mil-display mil-mb-15">
                  <span className="mil-accent mil-counter" data-number="50">
                    50
                  </span>
                  
                </p>
                <h5>States Served</h5>
              </div>
            </div>
          </div>
          <div className="col-xl-5 mil-mb-80">
            <p className="mil-text-m mil-soft mil-up">
             Our platform has successfully processed over 500,000 payments across 50 states, ensuring reliable and efficient transactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}