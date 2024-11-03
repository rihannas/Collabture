/* eslint-disable react/prop-types */
import styles from '../styles/Notion.module.css';
import ProfileDisplay from './ProfileDisplay';
import LinkedInButton from './LinkedInButton';
import InteractiveButtons from './InteractiveButtons';

const Notion = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top_container}>
        <div className={styles.lft_container}>
          <ProfileDisplay />
        </div>
        <div className={styles.rht_container}>
          <p className={styles.username}>shego.codes</p>
          <h1 className={styles.title}> Collaborating app</h1>
          <p>{text}</p>
        </div>
      </div>

      <div className={styles.bottom_container}>
        <div>
          <LinkedInButton />
        </div>
        <div className={styles.IA_btn}>
          <InteractiveButtons />
        </div>
      </div>
    </div>
  );
};

export default Notion;
