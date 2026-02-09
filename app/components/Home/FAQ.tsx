'use client';

import { useState } from 'react';

const faqItems = [
  {
    id: 1,
    question: "What is Loan Bolt?",
    answer: "Loan Bolt is an online service that helps users access loan options through a fast and simple application process."
  },
  {
    id: 2,
    question: "How much can I borrow?",
    answer: "Available loan amounts range from $100 to $5,000, depending on eligibility and other factors."
  },
  {
    id: 3,
    question: "Are loans available in my state?",
    answer: "Loan availability varies by state regulations. Options will be shown based on your location once you apply."
  },
  {
    id: 4,
    question: "Will my credit be checked?",
    answer: "A soft credit check may be used to display options and does not affect your score. A hard inquiry may occur before final approval."
  },
  {
    id: 5,
    question: "Can I apply with less-than-perfect credit?",
    answer: "Yes. Applications from all credit backgrounds are reviewed, along with income and employment details."
  },
  {
    id: 6,
    question: "How fast will I receive the funds?",
    answer: "Once approved, funds are usually deposited into your bank account the same day or the next business day."
  },
  {
    id: 7,
    question: "Are there any hidden fees?",
    answer: "No. All fees and charges are clearly disclosed before you accept any offer."
  },
  {
    id: 8,
    question: "Can I repay early?",
    answer: "Yes. Early repayment is allowed and may help reduce total interest costs."
  },
  {
    id: 9,
    question: "How can I send money with Loan Bolt?",
    answer: "Discover the step-by-step process to make money transfers easily and securely with Loan Bolt. Simply log in to your account, enter the recipient's details, specify the amount, and confirm the transaction."
  },
  {
    id: 10,
    question: "What security measures does Loan Bolt have to protect my transactions?",
    answer: "We use bank-level encryption, two-factor authentication, and real-time fraud monitoring to ensure your transactions are completely secure."
  },

  {
    id: 11,
    question: "How can I contact Loan Bolt customer service?",
    answer: "You can contact our customer service team 24/7 through email at support@loanbolt.com or call us at +001 (808) 555-0111."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mil-faq mil-p-160-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="mil-text-center">
              <h2 className="mil-mb-30 mil-up">Explore Our Frequently <br />Asked Questions</h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                Find quick and clear answers to the most common <br />
                questions about Loan Bolt
              </p>
            </div>

            <div className="mil-accordion">
              {faqItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`mil-accordion-group mil-up ${openIndex === index ? 'mil-active' : ''}`}
                >
                  <div 
                    className="mil-accordion-menu"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h5>{item.question}</h5>
                    <div className="mil-accordion-icon">
                      <i className={`fas fa-chevron-${openIndex === index ? 'down' : 'up'}`}></i>
                    </div>
                  </div>
                  <div 
                    className="mil-accordion-content"
                    style={{ 
                      display: openIndex === index ? 'block' : 'none',
                      height: openIndex === index ? 'auto' : '0',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <p className="mil-text-m mil-soft">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            
                        {/* Still Have Questions? */}
            <div className="mil-text-center mil-mt-60">
              <div className="mil-contact-info mil-up">
                <h4 className="mil-mb-20">Still have questions?</h4>
                <p className="mil-text-m mil-mb-30">
                  Can't find the answer you're looking for? Please chat with our friendly team.
                </p>
                <div className="mil-up">
                  <a href="mailto:contact@loan-bolt.com" className="mil-btn mil-md mil-add-arrow">
                    <i className="fas fa-envelope mil-mr-10"></i>
                    Email Support
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}