import { FriendListItem } from "components/FriendListItem/FriendListItem"

export const FriendList = ({friends}) => {
 return(
    <ul className="friend-list">
        {friends.map(friend => {
            <FriendListItem key={friend.id} friend={friend}/>}
        )}
        
    </ul>)
}