import { Metadata } from 'next';
import FAQContent from './FAQContent';

export const metadata: Metadata = {
  title: 'FAQ - Loan Bolt',
  description: 'Frequently Asked Questions',
};

export default function FAQPage() {
  return (
    <div className="mil-faq mil-p-160-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="mil-text-center">
              <h1 className="mil-mb-30 mil-up">Frequently Asked Questions</h1>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                Find quick and clear answers to the most common <br />
                questions about Loan Bolt
              </p>
            </div>
            
            <FAQContent />
          </div>
        </div>
      </div>
    </div>
  );
}