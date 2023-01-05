import PropTypes from 'prop-types';
import { Avatar, Name, Status } from './FriendListItem.styled';

// export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
//   return (
//     <>
//       {isOnline ? (
//         <span className="status gren"></span>
//       ) : (
//         <span className="status red"></span>
//       )}
//       <Avatar className="avatar" src={avatar} alt="" width="48" />
//       <Name className="name">{name}</Name>
//     </>
//   );
// };
export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <>
      <Status isOnline={isOnline} className="status"></Status>
      <Avatar className="avatar" src={avatar} alt="" width="48" />
      <Name className="name">{name}</Name>
    </>
  );
};

Event.PropTypes = {
  friend: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
