import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/InteractiveBtn.module.css';
import {
  faBookmark as faBookmark2,
  faHeart as faHeart2,
} from '@fortawesome/free-regular-svg-icons';

const InteractiveButtons = () => {
  const [heartToggle, setHeartToggle] = useState(false);
  const [bookmarkToggle, setBookmarkToggle] = useState(false);

  function handleHeartToggle() {
    setHeartToggle(!heartToggle);
  }

  function handleBookmarkToggle() {
    setBookmarkToggle(!bookmarkToggle);
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.heart_button}
        onClick={handleHeartToggle}
      >
        {heartToggle ? (
          <FontAwesomeIcon
            icon={faHeart}
            className={styles.heart_icon}
          />
        ) : (
          <FontAwesomeIcon icon={faHeart2} />
        )}
      </button>

      <button
        className={styles.bookmark_button}
        onClick={handleBookmarkToggle}
      >
        {bookmarkToggle ? (
          <FontAwesomeIcon
            icon={faBookmark}
            className={styles.icon}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBookmark2}
            className={styles.icon}
          />
        )}
      </button>
    </div>
  );
};

export default InteractiveButtons;
