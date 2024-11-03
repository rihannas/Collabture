import styles from '../styles/SidebarItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBarItem = ({ icon, text }) => {
  return (
    <li className={styles.nav_item}>
      <FontAwesomeIcon
        icon={icon}
        className={styles.icon}
      />
      <span className={styles.text}>{text}</span>
    </li>
  );
};

export default SideBarItem;
