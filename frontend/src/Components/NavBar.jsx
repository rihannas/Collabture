import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  const filters = [
    'ui/ux',
    'frontend',
    'backend',
    'mobile',
    'game',
    'data',
    'cloud',
    'other',
  ];
  return (
    <div className={styles.nav}>
      <ul className={styles.navBar}>
        {filters.map((filter, idx) => {
          return (
            <li
              className={styles.navItem}
              key={idx}
            >
              {filter}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
