import styles from '../styles/WhyChooseUs.module.css';
import { motion } from 'framer-motion';
import { FaLock, FaBolt, FaHandshake, FaChartLine } from 'react-icons/fa';

const points = [
  {
    icon: <FaLock />,
    title: 'Secure Process',
    description: 'We prioritize data protection and license security.',
  },
  {
    icon: <FaBolt />,
    title: 'Quick Turnaround',
    description: 'Get evaluated and paid faster than ever.',
  },
  {
    icon: <FaHandshake />,
    title: 'Trusted by Businesses',
    description: 'Hundreds of satisfied clients worldwide.',
  },
  {
    icon: <FaChartLine />,
    title: 'Maximize Value',
    description: 'We help you earn the best market rate.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChoose}>
      <h2>Why Choose Us</h2>
      <div className={styles.tiles}>
        {points.map((point, index) => (
          <motion.div
            key={index}
            className={styles.tile}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>{point.icon}</div>
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
