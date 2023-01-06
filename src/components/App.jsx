import { Profile } from "./Profile/Profile";
import { FriendList } from "./FriendList/FriendList";
import { Statistics } from "./Statistics/Statistics";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";


import user from "data/user"
import friends from "data/friends"
import data from "data/data"
import transactions from "data/transactions"


export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 0',
        gap: '20px',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile user={user}/>
      <FriendList friends={friends}/>
      <Statistics title="Upload stats" stats={data}/>
      {/* <Statistics stats={data}/> */}
      <TransactionHistory items={transactions}/>
    </div>
  );
};
