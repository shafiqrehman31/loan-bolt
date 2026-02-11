export default function CTASection() {
  const features = [
    {
      icon: "/img/home-1/icons/apply-online.png",
      title: "Apply Online",
      description: "Complete a short, secure loan request form anytime, from any device."
    },
    {
      icon: "/img/home-1/icons/Review-process.png",
      title: "Review Process",
      description: "Your information is carefully reviewed to help ensure accuracy and a smooth experience."
    },
    {
      icon: "/img/home-1/icons/Approval-Decision.png",
      title: "Approval Decision",
      description: "Once your information is verified, you’ll receive a quick decision without unnecessary delays."
    },
        {
      icon: "/img/home-1/icons/Get-your-funds.png",
      title: "Get Your Funds",
      description: "If approved, funds are deposited directly into your bank account, often by the same or next business day."
    }

  ];

  return (
    <div className="mil-cta mil-up">
      <div className="container">
        <div className="mil-out-frame mil-p-160-100">
          <div className="row align-items-end">
            <div className="col-xl-8 mil-mb-80-adaptive-30">
              <h2 className="mil-up">How It Works  <span className="mil-accent">Easy Steps</span></h2>
            </div>
            <div className="col-xl-4 mil-mb-80 mil-up">
              <a href="/contact" className="mil-btn mil-m mil-add-arrow mil-adaptive-right">
                Loan Quote
              </a>
            </div>
          </div>
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-xl-3 mil-mb-60">
                <div className="mil-icon-box">
                  <img src={feature.icon} alt="icon" className="mil-mb-30 mil-up" />
                  <h5 className="mil-mb-30 mil-up">{feature.title}</h5>
                  <p className="mil-text-m mil-soft mil-up">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}