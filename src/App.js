import { useState } from "react";

import UsersDisplay from "./components/UsersDisplay/UsersDisplay";

const INITIAL_USERS = [
  {
    id: 1,
    name: "Max",
    age: 31,
  },
  {
    id: 2,
    name: "Raph",
    age: 20,
  },
];

function App() {
  const [users, setUsers] = useState(INITIAL_USERS);
  return (
    <div className="App">
      <UsersDisplay users={users} />
    </div>
  );
}

export default App;
