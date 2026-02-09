'use client';

import { useState } from 'react';
import styles from './FAQContent.module.css';

const faqCategories = [
  {
    title: 'General Questions',
    items: [
      {
        id: 1,
        question: 'What is Loan Bolt?',
        answer: 'Loan Bolt is an online service that helps users access loan options through a fast and simple application process.'
      },
      {
        id: 2,
        question: 'How much can I borrow?',
        answer: 'Available loan amounts range from $100 to $5,000, depending on eligibility and other factors.'
      },
      {
        id: 3,
        question: 'Are loans available in my state?',
        answer: 'Loan availability varies by state regulations. Options will be shown based on your location once you apply.'
      }
    ]
  },
  {
    title: 'Application & Credit',
    items: [
      {
        id: 4,
        question: 'Will my credit be checked?',
        answer: 'A soft credit check may be used to display options and does not affect your score. A hard inquiry may occur before final approval.'
      },
      {
        id: 5,
        question: 'Can I apply with less-than-perfect credit?',
        answer: 'Yes. Applications from all credit backgrounds are reviewed, along with income and employment details.'
      },
      {
        id: 6,
        question: 'What documents do I need to apply?',
        answer: 'Typically, you need proof of income, government-issued ID, and bank account information. Specific requirements may vary.'
      }
    ]
  },
  {
    title: 'Funding & Fees',
    items: [
      {
        id: 7,
        question: 'How fast will I receive the funds?',
        answer: 'Once approved, funds are usually deposited into your bank account the same day or the next business day.'
      },
      {
        id: 8,
        question: 'Are there any hidden fees?',
        answer: 'No. All fees and charges are clearly disclosed before you accept any offer.'
      },
      {
        id: 9,
        question: 'Can I repay early?',
        answer: 'Yes. Early repayment is allowed and may help reduce total interest costs.'
      }
    ]
  },
  {
    title: 'Support & Security',
    items: [
      {
        id: 10,
        question: 'How can I contact customer service?',
        answer: 'You can contact our customer service team 24/7 through email at support@loanbolt.com or call us at +001 (808) 555-0111.'
      },
      {
        id: 11,
        question: 'What security measures does Loan Bolt have?',
        answer: 'We use bank-level encryption, two-factor authentication, and real-time fraud monitoring to ensure your transactions are completely secure.'
      },
      {
        id: 12,
        question: 'Is my personal information safe?',
        answer: 'Yes. We use industry-standard security protocols and never sell your personal information to third parties.'
      }
    ]
  }
];

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Flatten all FAQ items
  const allFaqItems = faqCategories.flatMap(category => 
    category.items.map(item => ({ ...item, category: category.title }))
  );

  // Filter items based on active category
  const filteredItems = activeCategory === 'all' 
    ? allFaqItems 
    : allFaqItems.filter(item => item.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Search functionality
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const items = document.querySelectorAll(`.${styles.accordionGroup}`);
    items.forEach(item => {
      const question = item.querySelector('h5')?.textContent?.toLowerCase() || '';
      const answer = item.querySelector('.mil-text-m')?.textContent?.toLowerCase() || '';
      const isVisible = question.includes(searchTerm) || answer.includes(searchTerm);
      (item as HTMLElement).style.display = isVisible ? 'block' : 'none';
    });
  };

  return (
    <>
      {/* Category Tabs */}
      <div className={styles.faqCategories}>
        <div className={styles.tabsNav}>
          <button 
            className={`${styles.tab} ${activeCategory === 'all' ? styles.active : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Questions
          </button>
          {faqCategories.map((category) => (
            <button 
              key={category.title}
              className={`${styles.tab} ${activeCategory === category.title ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.title)}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="mil-accordion">
        {filteredItems.map((item, index) => (
          <div 
            key={item.id} 
            className={`${styles.accordionGroup} mil-up ${openIndex === index ? styles.active : ''}`}
            data-category={item.category}
          >
            <div 
              className={styles.accordionMenu}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.accordionTitle}>
                <h5>{item.question}</h5>
                <span className={styles.faqBadge}>{item.category}</span>
              </div>
              <div className={styles.accordionIcon}>
                <div className={styles.accordionIconInner}>
                  <i className={`fas fa-chevron-${openIndex === index ? 'down' : 'up'}`}></i>
                </div>
              </div>
            </div>
            <div 
              className={styles.accordionContent}
              style={{ 
                display: openIndex === index ? 'block' : 'none',
                height: openIndex === index ? 'auto' : '0'
              }}
            >
              <div className={styles.accordionAnswer}>
                <p className="mil-text-m mil-soft">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Still Have Questions */}
      <div className={styles.faqCta}>
        <div className={styles.contactBox}>
          <h3>Still have questions?</h3>
          <p className={`${styles.contactText} mil-text-m`}>
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className={styles.buttonGroup}>
            <a href="mailto:support@loanbolt.com" className="mil-btn mil-md mil-add-arrow">
              <i className="fas fa-envelope mil-mr-10"></i>
              Email Support
            </a>
            
          </div>
        </div>
      </div>
    </>
  );
}