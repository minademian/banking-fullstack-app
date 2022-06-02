import { AccountDashboard } from "./components/account-dashboard";

const DATA_STORE = {
  user: {
    name: "Domhnall Gleeson",
    img: "profile-photo.png",
  },
  account: {
    nr: "45679821545",
    salary: 255500,
    balance: 3450.09,
  },
  transactions: [
    {
      id: "001",
      recipient: "Behance",
      lineitem: "Behance Project",
      timestamp: "23 march 2021",
      amount: 320,
    },
    {
      id: "002",
      recipient: "Behance",
      lineitem: "Behance Project",
      timestamp: "23 march 2021",
      amount: 320,
    },
    {
      id: "003",
      recipient: "Behance",
      lineitem: "Behance Project",
      timestamp: "23 march 2021",
      amount: 320,
    },
    {
      id: "004",
      recipient: "Behance",
      lineitem: "Behance Project",
      timestamp: "23 march 2021",
      amount: 320,
    },
  ],
};

function App() {
  return <AccountDashboard data={DATA_STORE} />;
}

export default App;
