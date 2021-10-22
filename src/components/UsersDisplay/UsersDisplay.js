import styles from "./UsersDisplay.module.css";

import Card from "../UI/Card";
import UsersList from "./UsersList";

function UsersDisplay({ users }) {
  return (
    <Card className={styles["users-display"]}>
      <UsersList users={users} />
    </Card>
  );
}

export default UsersDisplay;
