//import { Item } from 'components/Statistics/Statistics.styled';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.item}>
      <span className={isOnline ? styles.statusOn : styles.statusOff}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => {
        return (
          <FriendItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
FriendList.propTypes = {
  friends: PropTypes.array,
};

/* "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
    "name": "Mango",
    "isOnline": true,
    "id": 1812
   */
