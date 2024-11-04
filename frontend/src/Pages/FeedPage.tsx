import Feed from '../Components/Feed';
import styles from '../styles/FeedPage.module.css';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Prompt from '../Components/Prompt';

const FeedPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Header />
      </div>

      <div className={styles.middle}>
        <NavBar />
      </div>
      <div>
        <div className={styles.prompt_container}>
          <Prompt />
        </div>

        <Feed />
      </div>
    </div>
  );
};

export default FeedPage;
