'use client';

import { useState } from 'react';

const faqItems = [
  {
    id: 1,
    question: 'How can I send money with Loan Bolt?',
    answer: 'Sending money with Loan Bolt is easy. Simply log in to your account, enter the recipient\'s details, specify the amount, and confirm the transaction. Your money will be transferred instantly.'
  },
  {
    id: 2,
    question: 'What security measures does Loan Bolt have?',
    answer: 'We use bank-level encryption, two-factor authentication, and real-time fraud monitoring to ensure your transactions are completely secure.'
  },
  {
    id: 3,
    question: 'What is the coverage of the Loan Bolt network?',
    answer: 'Loan Bolt operates in over 170 countries worldwide, allowing you to send and receive money almost anywhere.'
  },
  {
    id: 4,
    question: 'How can I contact customer service?',
    answer: 'You can contact our customer service team 24/7 through email at support@loanbolt.com or call us at +001 (808) 555-0111.'
  }
];

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
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
  );
}