import { FormEvent, useState } from "react";
import { inquiryTypes, site } from "../config/siteData";

export function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("入力内容を確認しました。このフォームは制作課題用の表示で、実際の送信は行われません。");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>お名前</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>メールアドレス</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>

      <label>
        <span>お問い合わせ種別</span>
        <select name="type" required defaultValue="">
          <option value="" disabled>
            選択してください
          </option>
          {inquiryTypes.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>会社・団体名</span>
        <input name="organization" type="text" autoComplete="organization" />
      </label>

      <label>
        <span>メッセージ</span>
        <textarea name="message" rows={8} required />
      </label>

      <p className="privacy-note">
        入力内容はお問い合わせへの返信のために確認されます。詳しくは
        <a href="/privacy-policy">プライバシーポリシー</a>をご覧ください。{site.fictionalNotice}
      </p>

      <button className="button button--primary" type="submit">
        内容を確認する
      </button>
      {message && (
        <p className="form-message" role="status">
          {message}
        </p>
      )}
    </form>
  );
}
