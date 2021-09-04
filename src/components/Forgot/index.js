import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import TextInput from "../common/TextInput";
import Button from "../common/Button";
import styles from "./index.module.css";

const Forgot = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.body}>
        <section className={styles.content}>
          <div className={styles.wrapper}>
            <form>
              <h1 className={styles.title}>Can't log in?</h1>
              <TextInput placeholder="Enter email" type="email" />
              <Button type="submit" value="Send recovery link" />
            </form>
            <hr className={styles.divider} />
            <ul className={styles.formLinks}>
              <li>
                <Link className={styles.link} to="/">
                  Return to log in
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Forgot;
