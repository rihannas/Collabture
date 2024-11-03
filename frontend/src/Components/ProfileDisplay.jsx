import pic from '../assets/coder.jpg';
import styles from '../styles/ProfileDisplay.module.css';

const ProfileDisplay = () => {
  return (
    <div>
      <img
        src={pic}
        alt='display image'
        className={styles.dp}
      />
    </div>
  );
};

export default ProfileDisplay;
