import Notion from './Notion';
import styles from '../styles/Feed.module.css';

const Feed = () => {
  return (
    <div className={styles.feed}>
      <Notion
        text={
          '🚀 Im working on building a Tinder-like app, but instead of \
            matching with people, users will match with project ideas! 🎯 Ive \
            got the backend development covered, but Im looking for insights on \
            the best UI/UX practices to make the experience smooth and engaging. \
            Also, any recommendations for frontend frameworks or libraries that \
            would work well for a dynamic, swipe-based interface? Lets create \
            something amazing together! #WebDev #AppDevelopment #UIUX #Frontend'
        }
        className={styles.notion}
      />
      <Notion text={'hi guys i have an idea'} />

      <Notion
        text={
          '🚀 Im working on building a Tinder-like app, but instead of \
            matching with people, users will match with project ideas! 🎯 Ive \
            got the backend development covered, but Im looking for insights on \
            the best UI/UX practices to make the experience smooth and engaging. \
            Also, any recommendations for frontend frameworks or libraries that \
            would work well for a dynamic, swipe-based interface? Lets create \
            something amazing together! #WebDev #AppDevelopment #UIUX #Frontend \
            🚀 Im working on building a Tinder-like app, but instead of \
            matching with people, users will match with project ideas! 🎯 Ive \
            got the backend development covered, but Im looking for insights on \
            the best UI/UX practices to make the experience smooth and engaging. \
            Also, any recommendations for frontend frameworks or libraries that \
            would work well for a dynamic, swipe-based interface? Lets create \
            something amazing together! #WebDev #AppDevelopment #UIUX #Frontend \
            🚀 Im working on building a Tinder-like app, but instead of \
            matching with people, users will match with project ideas! 🎯 Ive \
            got the backend development covered, but Im looking for insights on \
            the best UI/UX practices to make the experience smooth and engaging. \
            Also, any recommendations for frontend frameworks or libraries that \
            would work well for a dynamic, swipe-based interface? Lets create \
            something amazing together! #WebDev #AppDevelopment #UIUX #Frontend'
        }
      />
    </div>
  );
};

export default Feed;
