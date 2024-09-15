import axios from "axios";

export class EmailService {
  URL = "http://localhost:3000/emails";

  async getEmails() {
    const { data } = await axios.get(this.URL);
    return data;
  }

  async sendEmails(text) {
    const { data } = await axios.post(this.URL, {
      text,
    });
    return data;
  }
}
