'use client';

import { useState } from 'react';
import styles from './faq.module.css';

export default function FAQSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    const items = document.querySelectorAll('.mil-accordion-group');
    items.forEach(item => {
      const question = item.querySelector('h5')?.textContent?.toLowerCase() || '';
      const answer = item.querySelector('.mil-text-m')?.textContent?.toLowerCase() || '';
      const isVisible = question.includes(term) || answer.includes(term);
      (item as HTMLElement).style.display = isVisible ? 'block' : 'none';
    });
  };

  return (
    <div className={`${styles.faqSearch} mil-up`}>
      <div className={styles.searchBox}>
        <i className="fas fa-search"></i>
        <input 
          type="text" 
          placeholder="Search for questions..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <p className={styles.searchNote}>
        Search for specific questions about loans, applications, fees, or support
      </p>
    </div>
  );
}