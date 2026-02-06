export default function CTASection() {
  const features = [
    {
      icon: "/img/home-1/icons/1.svg",
      title: "Unmatched Speed",
      description: "Make instant transfers and experience Loan Bolt's unparalleled speed with every transaction."
    },
    {
      icon: "/img/home-1/icons/2.svg",
      title: "Extensive Global Network",
      description: "Connect with the world through our global network that spans more than 170 countries."
    },
    {
      icon: "/img/home-1/icons/3.svg",
      title: "Advanced Security",
      description: "Protect your assets with our robust security protocols and cutting-edge technologies."
    }
  ];

  return (
    <div className="mil-cta mil-up">
      <div className="container">
        <div className="mil-out-frame mil-p-160-100">
          <div className="row align-items-end">
            <div className="col-xl-8 mil-mb-80-adaptive-30">
              <h2 className="mil-up">Innovation and Efficiency in Every Transaction</h2>
            </div>
            <div className="col-xl-4 mil-mb-80 mil-up">
              <a href="/about" className="mil-btn mil-m mil-add-arrow mil-adaptive-right">
                Learn More
              </a>
            </div>
          </div>
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-xl-4 mil-mb-60">
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