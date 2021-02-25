import { useContext } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';
import styles from '../styles/components/ProfileBox.module.css';

export function ProfileBox() {
  const { name, login, avatar, followers, following, bio } = useContext(ProfileContext);

  return (
    <div className={styles.profileBoxContainer}>
      <div>
        <img src={avatar} alt="Avatar" />
        <div>
          <h1>{name}</h1>
          <span>{login}</span>
          <span>{bio}</span>
        </div>
      </div>

      <div>
        <p>14 Stars</p>
        <p>{following} Following</p>
        <p>{followers} Followers</p>
      </div>
    </div>
  );
}