import styles from "./UserItem.module.css";

function UserItem({ name, age }) {
  return (
    <div className={styles["user-item"]}>
      <p className={styles["user-item__name"]}>{name}</p>
      <p className={styles["user-item__age"]}>{`${age} years old`}</p>
    </div>
  );
}

export default UserItem;
