import  { useState } from 'react';
import styles from '../styles/ContactForm.module.css';
import { motion } from 'framer-motion';

const initialState = {
  name: '',
  email: '',
  company: '',
  licenseType: '',
  message: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Email is invalid.';
    }
    if (!formData.company.trim()) errs.company = 'Company is required.';
    if (!formData.licenseType) errs.licenseType = 'Select a license type.';
    if (!formData.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      setFormData(initialState);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className={styles.contactSection}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <motion.div className={styles.field} whileFocus={{ scale: 1.02 }}>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span>{errors.name}</span>}
        </motion.div>

        <motion.div className={styles.field} whileFocus={{ scale: 1.02 }}>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </motion.div>

        <motion.div className={styles.field} whileFocus={{ scale: 1.02 }}>
          <label>Company</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} />
          {errors.company && <span>{errors.company}</span>}
        </motion.div>

        <motion.div className={styles.field}>
          <label>License Type</label>
          <select name="licenseType" value={formData.licenseType} onChange={handleChange}>
            <option value="">-- Select --</option>
            <option value="Enterprise">Enterprise</option>
            <option value="Cloud">Cloud</option>
            <option value="On-Premise">On-Premise</option>
          </select>
          {errors.licenseType && <span>{errors.licenseType}</span>}
        </motion.div>

        <motion.div className={styles.field}>
          <label>Message</label>
          <textarea name="message" rows="4" value={formData.message} onChange={handleChange} />
          {errors.message && <span>{errors.message}</span>}
        </motion.div>

        <button type="submit" className={styles.submitBtn}>Send Message</button>

        {submitted && <p className={styles.success}>Thanks! We'll be in touch soon.</p>}
      </form>
    </section>
  );
};

export default ContactForm;
