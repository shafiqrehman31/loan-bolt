import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Terms & Conditions - Loan Bolt',
  description: 'Terms and Conditions for Loan Bolt',
};

export default function TermsConditionsPage() {
  return (
    <div className="mil-p-160-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="mil-text-center mil-mb-90">
              <h1 className="mil-mb-30">Terms & Conditions</h1>
              <p className="mil-text-m mil-soft">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="mil-mb-60">
              <h3 className="mil-mb-20">1. Acceptance of Terms</h3>
              <p className="mil-text-m mil-soft">
                By accessing and using Loan Bolt services, you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
            </div>

            <div className="mil-mb-60">
              <h3 className="mil-mb-20">2. Description of Service</h3>
              <p className="mil-text-m mil-soft">
                Loan Bolt provides financial technology services including but not limited to money transfers, payment processing, and financial management tools.
              </p>
            </div>

            <div className="mil-mb-60">
              <h3 className="mil-mb-20">3. User Responsibilities</h3>
              <p className="mil-text-m mil-soft">
                Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
              </p>
            </div>

            <div className="mil-mb-60">
              <h3 className="mil-mb-20">4. Privacy Policy</h3>
              <p className="mil-text-m mil-soft">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
              </p>
            </div>

            <div className="mil-mb-60">
              <h3 className="mil-mb-20">5. Limitation of Liability</h3>
              <p className="mil-text-m mil-soft">
                Loan Bolt shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </div>

            <div className="mil-mb-60">
              <h3 className="mil-mb-20">6. Changes to Terms</h3>
              <p className="mil-text-m mil-soft">
                We reserve the right to modify these terms at any time. We will notify users of any significant changes through our website or via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}