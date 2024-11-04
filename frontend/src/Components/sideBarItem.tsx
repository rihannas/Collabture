import styles from '../styles/SidebarItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface SideBarItemProps {
  icon: IconDefinition;
  text: string;
}

const SideBarItem = ({ icon, text }: SideBarItemProps) => {
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
