// import { useState } from 'react';
import styles from '../styles/LinkedInBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LinkedInButton = () => {
  // const [toggle, useToggle] = useState(false);
  return (
    <button className={styles.button}>
      <FontAwesomeIcon icon={faLinkedin} />
      <span> Connect</span>
    </button>
  );
};

export default LinkedInButton;
