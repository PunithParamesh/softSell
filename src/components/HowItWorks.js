
import styles from '../styles/HowItWorks.module.css';
import { motion } from 'framer-motion';
import { FaUpload, FaSearchDollar, FaMoneyCheckAlt } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUpload />,
    title: 'Upload License',
    description: 'Submit your unused software licenses securely.',
  },
  {
    icon: <FaSearchDollar />,
    title: 'Get Valuation',
    description: 'We evaluate the market value of your licenses.',
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: 'Get Paid',
    description: 'Receive fast payment once the license is sold.',
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <h2>How It Works</h2>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={styles.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
