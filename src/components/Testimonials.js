import styles from '../styles/Testimonials.module.css';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Samantha Lee',
    role: 'IT Procurement Manager',
    company: 'TechNova Inc.',
    message:
      'SoftSell made it incredibly easy to recover value from our unused licenses. The process was fast and secure.',
  },
  {
    name: 'Michael Tran',
    role: 'Operations Lead',
    company: 'BrightWave Solutions',
    message:
      'We were able to quickly evaluate and sell licenses we no longer needed. Highly recommend SoftSell!',
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2>What Our Clients Say</h2>
      <div className={styles.cards}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <p className={styles.message}>"{testimonial.message}"</p>
            <div className={styles.author}>
              <strong>{testimonial.name}</strong>
              <span>
                {testimonial.role}, {testimonial.company}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
