import styles from '../styles/SideBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faBookmark,
  faRss,
  faRightFromBracket,
  faFan,
} from '@fortawesome/free-solid-svg-icons';
import SideBarItem from './sideBarItem';

const SideBar = () => {
  return (
    <div className={styles.side_bar}>
      <div className={styles.logo_container}>
        <FontAwesomeIcon
          icon={faFan}
          className={styles.logo}
        />
        <span>Collabture</span>
      </div>
      <div>
        <SideBarItem
          icon={faUser}
          text={'Profile'}
        />
        <SideBarItem
          icon={faRss}
          text={'Feed'}
        />
        <SideBarItem
          icon={faBookmark}
          text={'Saved'}
        />
        <SideBarItem
          icon={faRightFromBracket}
          text={'Logout'}
        />
      </div>
    </div>
  );
};

export default SideBar;
