import PropTypes from 'prop-types';



export const FriendListItem = ({friend: {avatar, name, isOnline, id}}) => {
    return (
        <li className="item">
        {isOnline ? (<span className="status gren"></span>) :
        (<span className="status red"></span>)}
        <img className="avatar" src={avatar} alt="" width="48" />
        <p className="name">{name}</p>
        </li>
    )
}


Event.PropTypes = {
    friend: PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
}