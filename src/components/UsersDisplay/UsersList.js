import styles from "./UsersList.module.css";

import UserItem from "./UserItem";

function UsersList({ users }) {
  return (
    <ul className={styles["users-list"]}>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <UserItem {...user} />
          </li>
        );
      })}
    </ul>
  );
}

export default UsersList;
