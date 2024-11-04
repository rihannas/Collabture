import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  // this should come from the backend
  const filters: string[] = [
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
        {filters.map((filter: string, idx: number) => {
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
