export default function Features() {
  const features = [
    {
      title: "Instant Transactions",
      description: "Make money transfers immediately, without complications or delays.",
      img: "/img/home-1/icons/1.svg"
    },
    {
      title: "Extensive Global Network",
      description: "Connect with the world through our global network that spans more than 170 countries.",
      img: "/img/home-1/icons/2.svg"
    },
    {
      title: "Advanced Security",
      description: "Protect your assets with our robust security protocols and cutting-edge technologies.",
      img: "/img/home-1/icons/3.svg"
    }
  ];

  return (
    <div className="mil-features mil-p-160-80">
      <div className="container">
        <div className="row flex-sm-row-reverse justify-content-between align-items-center">
          <div className="col-xl-6 mil-mb-80">
            <h2 className="mil-mb-30 mil-up">Exclusive Benefits of <br />Using Loan Bolt</h2>
            <ul className="mil-list-1">
              <li>
                <div className="mil-up">
                  <h5 className="mil-mb-15 mil-up">Instant Transactions</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Make money transfers immediately, without <br />
                    complications or delays.
                  </p>
                </div>
              </li>
              <li>
                <div className="mil-up">
                  <h5 className="mil-mb-15 mil-up">Guaranteed Security</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Protect your financial information with our advanced <br />
                    security protocols.
                  </p>
                </div>
              </li>
              <li>
                <div className="mil-up">
                  <h5 className="mil-mb-15 mil-up">Extensive Global Coverage</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Access our global network that covers more than <br />
                    169 countries for your international transactions.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-xl-5 mil-mb-80">
            <div className="mil-image-frame mil-visible-overflow">
              <img src="/img/home-1/2nd.png" alt="image" className="mil-up" />
              <div className="mil-img-box mil-accent-box mil-up">
                <div>
                  <h2 className="mil-light mil-mb-15">100%</h2>
                  <p className="mil-text-s mil-light">
                    Security in your <br />
                    payments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}