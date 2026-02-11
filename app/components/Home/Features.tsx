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
            <h2 className="mil-mb-30 mil-up">Why People Choose <br />Using Loan Bolt</h2>
            
            <p>We focus on speed, simplicity, and trust, making borrowing easier for everyday situations.</p> <br></br>
            <ul className="mil-list-1">
              <li>
                <div className="mil-up">
                  <h5 className="mil-mb-15 mil-up">Fast Application</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Our streamlined online form takes just minutes to complete,<br /> saving you time and effort with no complications or delays.
                  </p>
                </div>
              </li>
              <li>
                <div className="mil-up">
                  <h5 className="mil-mb-15 mil-up">Clear & Honest Terms</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    All loan details are shared upfront so you know exactly<br /> what to expect before moving forward.
                  </p>
                </div>
              </li>
              <li>
                <div className="mil-up">
                  <h5 className="mil-mb-15 mil-up">Secure Information</h5>
                  <p className="mil-text-m mil-soft mil-up">
                  Your personal and financial details are protected using<br />  modern security standards.
                  
                  </p>
                </div>
              </li>
              <li>
                <div className="mil-up">
                  <h5 className="mil-mb-15 mil-up">Built for U.S. Borrowers</h5>
                  <p className="mil-text-m mil-soft mil-up">
                  Loan availability is based on state regulations and lender <br />participation across the United States.
                  Loan availability is based on state regulations and lender <br /> participation across the USA. 
                  
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
                    Safe. Secure. Reliable <br />
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