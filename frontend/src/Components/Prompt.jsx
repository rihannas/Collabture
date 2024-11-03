import ProfileDisplay from './ProfileDisplay';
import styles from '../styles/Prompt.module.css';
import { useState } from 'react';

const Prompt = () => {
  const [state, setState] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.top_container}>
        <div className={styles.lft_container}>
          <ProfileDisplay />
        </div>
        <div className={styles.rht_container}>
          <p className={styles.username}>shego.codes</p>
          <input
            className={styles.content}
            placeholder="What's on your mind?"
          />
        </div>
      </div>
    </div>
  );
};

export default Prompt;
