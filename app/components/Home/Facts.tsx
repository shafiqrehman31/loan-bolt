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
                    7
                  </span>
                  <span className="mil-pale">m</span>
                </p>
                <h5>Registered Users</h5>
              </div>
              <div className="col-xl-6 mil-sm-text-center mil-mb-80 mil-up">
                <p className="h1 mil-display mil-mb-15">
                  <span className="mil-accent mil-counter" data-number="170">
                    170
                  </span>
                  <span className="mil-pale">+</span>
                </p>
                <h5>Countries with our coverage</h5>
              </div>
            </div>
          </div>
          <div className="col-xl-5 mil-mb-80">
            <p className="mil-text-m mil-soft mil-up">
              Dive into the data behind Loan Bolt's success. From the number of users 
              to the extent of our global network, these facts and figures highlight 
              our impact on the world of finance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}