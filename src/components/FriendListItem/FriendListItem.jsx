export const FriendListItem = ({friend: {avatar, name, isOnline}}) => {
    return (
        <li className="item">
        <span className="status" id={isOnline}></span>
        <img className="avatar" src={avatar} alt="" width="48" />
        <p className="name">{name}</p>
        </li>
    )
}