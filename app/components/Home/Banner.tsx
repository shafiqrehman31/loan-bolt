'use client';

export default function Banner() {
  return (
    <div className="mil-banner mil-dissolve">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="mil-banner-text">
              <h6 className="mil-text-gradient-2 mil-mb-20">
                Send money globally with Loan Bolt
              </h6>
              <h1 className="mil-display mil-text-gradient-3 mil-mb-60">
                Shop with Confidence, Protected
              </h1>
              <div className="mil-buttons-frame">
                <a href="/contact" className="mil-btn mil-md mil-add-arrow">
                   Loan Quote
                </a>

              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mil-banner-img">
              <img
                src="/img/home-1/Slider.png"
                alt="banner"
                style={{ maxWidth: "125%", transform: "translateX(10%)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}