import Link from 'next/link';
import styles from './home.module.scss';

const components = ['RotativeCards'];

const splitWords = (str: string): string => {
  const words = [];
  let lastUppercaseLetterIndex = 0;
  for (let i = 1; i < str.length; ++i) {
    if (str[i] == str[i].toUpperCase()) {
      words.push(str.slice(lastUppercaseLetterIndex, i));
      lastUppercaseLetterIndex = i;
    }
  }

  if (str.length) {
    words.push(str.slice(lastUppercaseLetterIndex, str.length));
  }

  return words.join(' ');
};

export default function Home() {
  return (
    <div className={styles.home}>
      <ol className={styles['components-list']}>
        {components.map((component) => (
          <li key={component} className={styles['components-list__item']}>
            <Link href={`/${component}`}>{splitWords(component)}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
