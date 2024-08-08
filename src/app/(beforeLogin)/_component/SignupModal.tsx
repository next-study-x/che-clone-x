import styles from "./signupModal.module.css";
import Image from "next/image";
import ZLogo from "../../../../public/zlogo.png";
import GoogleLogo from "../../../../public/googleLogo.png";
import AppleLogo from "../../../../public/appleLogo.png";

export default function SignupModal() {
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
          <h1 className={styles.title}>계정을 생성하세요.</h1>
          <div className={styles.inputWrapper}>
            <input className={styles.input} placeholder="이름" />
          </div>
          <div className={styles.inputWrapper}>
            <input className={styles.input} placeholder="휴대폰" />
          </div>

          <div className={styles.inputWrapper}>
            <a href="#" className={styles.useEmail}>
              대신 이메일 사용하기
            </a>
          </div>
          <div className={styles.birthContainer}>
            <h2 className={styles.birthTitle}>생년월일</h2>
            <p className={styles.birthDescription}>
              이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정
              주제에 상관없이 나의 연령을 확인하세요.
            </p>
            <div className={styles.birthInputContainer}>
              <div className={styles.birthInput}>
                <select className={styles.birthSelect}>
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="1">5</option>
                  <option value="1">6</option>
                  <option value="1">7</option>
                </select>
              </div>
              <div className={styles.birthInput}>
                <select className={styles.birthSelect}>
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="1">5</option>
                  <option value="1">6</option>
                  <option value="1">7</option>
                </select>
              </div>
              <div className={styles.birthInput}>
                <select className={styles.birthSelect}>
                  <option value="1">2024</option>
                  <option value="1">2023</option>
                  <option value="1">2022</option>
                  <option value="1">2021</option>
                </select>
              </div>
            </div>
          </div>

          <button className={styles.nextButton}>다음</button>
        </div>
      </div>
    </div>
  );
}
