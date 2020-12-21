import styles from './rotative-cards.module.scss';
import RotativeCard from './RotativeCard';

const RotativeCards = () => {
  return (
    <div className={styles.cards}>
      {[...Array(3)].map((_, index) => (
        <RotativeCard key={index} number={index} />
      ))}
    </div>
  );
};

export default RotativeCards;
