import { FriendListItem } from "components/FriendListItem/FriendListItem"
import PropTypes from 'prop-types';



export const FriendList = ({friends}) => {
 return(
    <ul className="friend-list">
        {friends.map(friend => (
            <FriendListItem key={friend.id} friend={friend}/>))}    
    </ul>)
}

Event.PropTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    }))
}