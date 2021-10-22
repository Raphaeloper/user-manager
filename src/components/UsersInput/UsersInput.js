import styles from "./UsersInput.module.css";

import UsersForm from "./UsersForm";

function UsersInput() {
  return (
    <div className={styles["users-input"]}>
      <UsersForm />
    </div>
  );
}

export default UsersInput;
