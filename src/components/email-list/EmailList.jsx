import { useQuery } from "@tanstack/react-query";
import styles from "./EmailList.module.scss";
import { EmailService } from "../../services/email-services";
import parse from "html-react-parser";

const emailService = new EmailService();

export function EmailList() {
  const { data } = useQuery({
    queryKey: ["email list"],
    queryFn: () => emailService.getEmails(),
    // queryFn: () => fetch(emailService.URL).then((res) => res.json()),
  });

  return (
    <>
      <div className={styles.list}>
        {data?.map((email) => (
          <div key={email.id}>{parse(email.text)}</div>
        ))}
      </div>
    </>
  );
}
