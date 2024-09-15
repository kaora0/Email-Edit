import { EmailEditor } from "../../components/email-editor/EmailEditor";
import { EmailList } from "../../components/email-list/EmailList";
import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.rootStyle}>
      <EmailEditor />
      <EmailList />
    </div>
  );
}
