import styles from './rotative-card.module.scss';
import { useState, useRef } from 'react';

const RotativeCard = ({ number, maxRotateAngle = 30 }) => {
  const [angleX, setAngleX] = useState(0);
  const [angleY, setAngleY] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>();

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef) {
      const cardSize = cardRef.current.getBoundingClientRect();
      const width = cardSize.width;
      const height = cardSize.height;
      const cursorX = event.pageX - cardRef.current.offsetLeft;
      const cursorY = event.pageY - cardRef.current.offsetTop;
      setAngleY(-(-maxRotateAngle + (cursorX * maxRotateAngle * 2) / width));
      setAngleX(-(-maxRotateAngle + (cursorY * maxRotateAngle * 2) / height));
    }
  };

  return (
    <div
      style={{
        transform: `rotateX(${angleX}deg) rotateY(${angleY}deg)`,
      }}
      onMouseMove={onMouseMove}
      ref={cardRef}
      className={styles.card}
    >
      <h2 className={styles.card__caption}>0{number}</h2>
      <p className={styles.card__text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad
        placeat, voluptates in asperiores ab dolores vel repellat temporibus
        assumenda, dignissimos quos doloremque ullam numquam sequi rem nisi
        possimus illum.
      </p>
      <div className={styles['card__link-container']}></div>
      <a href="#" className={styles.card__link}>
        &#10003;
      </a>
    </div>
  );
};

export default RotativeCard;
