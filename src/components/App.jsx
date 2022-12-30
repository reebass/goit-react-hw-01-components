import { Profile } from "./Profile/Profile";
import user from "data/user"
import { FriendList } from "./FriendList/FriendList";
import friends from "data/friends"

import data from "../data/data"
import { Statistics } from "./Statistics/Statistics";


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
      <Statistics title="Upload stats" stats={data}/>

    </div>
  );
};
