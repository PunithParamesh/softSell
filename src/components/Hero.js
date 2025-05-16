import styles from '../styles/Hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Turn Unused Software Into Cash</h1>
        <p>SoftSell helps businesses recover value by reselling unused software licenses quickly and securely.</p>
        <button className={styles.cta}>Sell My Licenses</button>
      </motion.div>
    </section>
  );
};

export default Hero;
