'use client';

import { useState } from 'react';
import styles from './contact.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h3>Send us a Message</h3>
        <p className="mil-text-m mil-soft">
          Have questions? Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mil-contact-form">
        <div className="mil-mb-30">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name *"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="mil-mb-30">
          <input
            type="email"
            name="email"
            placeholder="Your Email Address *"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="mil-mb-30">
          <input
            type="text"
            name="subject"
            placeholder="Subject *"
            className={styles.input}
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="mil-mb-30">
          <textarea
            name="message"
            placeholder="Your Message *"
            className={styles.textarea}
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          ></textarea>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className={`${styles.alert} ${styles.success} mil-mb-30`}>
            <i className={`fas fa-check-circle ${styles.mr10}`}></i>
            Thank you! Your message has been sent successfully. We'll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className={`${styles.alert} ${styles.error} mil-mb-30`}>
            <i className={`fas fa-exclamation-circle ${styles.mr10}`}></i>
            Something went wrong. Please try again or contact us directly.
          </div>
        )}

        <button 
          type="submit" 
          className="mil-btn mil-md mil-add-arrow"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <i className={`fas fa-spinner fa-spin ${styles.mr10}`}></i>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>

        <p className={`mil-text-xs mil-soft ${styles.mt20}`}>
          By submitting this form, you agree to our Privacy Policy and Terms of Service.
        </p>
      </form>
    </div>
  );
}