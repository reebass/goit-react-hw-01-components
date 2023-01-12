import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { Item, List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map(friend => (
        <Item className="item" key={friend.id}>
          <FriendListItem friend={friend} />
        </Item>
      ))}
    </List>
  );
};

Event.PropTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
