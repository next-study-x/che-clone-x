import styles from "./loginModal.module.css";
import Image from "next/image";
import ZLogo from "../../../../public/zlogo.png";
import GoogleLogo from "../../../../public/googleLogo.png";
import AppleLogo from "../../../../public/appleLogo.png";

export default function LoginModal() {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.closeButton}>✕</div>
        <div className={styles.modalContent}>
          <Image
            src={ZLogo}
            alt="X Logo"
            width={40}
            height={40}
            className={styles.logo}
          />
          <h1 className={styles.title}>X 가입하기</h1>

          <button className={styles.googleButton}>
            <Image src={GoogleLogo} alt="Google" width={20} height={20} />
            <span>하은(으)로 로그인</span>
          </button>
          <button className={styles.appleButton}>
            <Image src={AppleLogo} alt="Apple" width={20} height={20} />
            <span>Apple로 로그인하기</span>
          </button>
          <div className={styles.divider}>
            <span>또는</span>
          </div>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              placeholder="휴대폰 번호, 이메일 주소 또는 사용자 아이디"
            />
          </div>

          <button className={styles.nextButton}>다음</button>
          <button className={styles.forgotButton}>
            비밀번호를 잊으셨나요?
          </button>
          <p className={styles.signupText}>
            계정이 없으신가요?{" "}
            <a href="#" className={styles.signupLink}>
              가입하기
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
