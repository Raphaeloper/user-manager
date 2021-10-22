import styles from "./UsersForm.module.css";

function UsersForm() {
  return (
    <form className={styles["users-form"]}>
      <div className={styles["users-form__inputs"]}>
        <div className={styles["users-form__input"]}>
          <label htmlFor="name-input">Name</label>
          <input type="text" id="name-input" />
        </div>
        <div className={styles["users-form__input"]}>
          <label htmlFor="age-input">Age</label>
          <input type="number" min="18" max="120" step="1" id="age-input" />
        </div>
      </div>
      <div className={styles["users-form__buttons"]}>
        <button type="submit">Add user</button>
      </div>
    </form>
  );
}

export default UsersForm;
