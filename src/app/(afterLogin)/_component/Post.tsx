import style from "./post.module.css";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";

//dayjs는 plugin로 되어 있어 있어서 원하는 기능을 불러와서 써줘야 함.
dayjs.locale("ko"); //한국 플러그인
dayjs.extend(relativeTime);

export default function Post() {
  //target은 서버에서 받아온 데이터라고 가정
  const target = {
    User: {
      id: "elonmusk",
      nickname: "Elon Musk",
      image: "/yRsRRjGO.jpg",
    },
    content: "너무 힘들어요 ㅠㅠ",
    createdAt: new Date(),
    Images: [],
  };
  return (
    //article 시멘틱 태그를 이용
    <article className={style.post}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          <div className={style.postImageSection}></div>
          {/* post action에 대한 버튼  */}
          <ActionButtons />
        </div>
      </div>
    </article>
  );
}
