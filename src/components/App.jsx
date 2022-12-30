import { Profile } from "./Profile/Profile";
import user from "data/user"
import { FriendList } from "./FriendList/FriendList";
import friends from "data/friends"
// import { Statistics } from "./Statistics/Statistics";
// import data from "../data/data"


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile user={user}/>
      <FriendList friends={friends}/>

    </div>
  );
};
