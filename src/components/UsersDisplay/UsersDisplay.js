import styles from "./UsersDisplay.module.css";

import UsersList from "./UsersList";

function UsersDisplay({ users }) {
  return (
    <div className={styles["users-display"]}>
      <UsersList users={users} />
    </div>
  );
}

export default UsersDisplay;
