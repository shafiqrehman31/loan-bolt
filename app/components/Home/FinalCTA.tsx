export default function FinalCTA() {
  return (
    <div className="mil-cta mil-up">
      <div className="container">
        <div className="mil-out-frame mil-bg-1">
          <div className="mil-gradient-plus"></div>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-7 mil-mt-60">
              <h2 className="mil-mb-30 mil-up">
                Discover Loan Bolt today and Transform your Financial Experience!
              </h2>
              <p className="mil-text-m mil-mb-60 mil-up">
                Discover the innovation, speed and security <br />
                of Loan Bolt in every transaction.
              </p>
              <div className="mil-up">
                <a href="/register" className="mil-btn mil-md mil-add-arrow">
                  Register now
                </a>
              </div>
            </div>
            <div className="col-xl-5 mil-mt-60">
              <img src="/img/home-1/4th.png" alt="img" style={{ width: "100%" }} className="mil-up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}