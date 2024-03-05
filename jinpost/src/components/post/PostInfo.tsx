import styles from "./PostInfo.module.css"
import {Fragment} from "react";
import ReplyWrite from "../reply/ReplyWrite";
import ReplyList from "../reply/ReplyList";

const PostInfo = (props: any): JSX.Element => {
    console.log(props)
    return (
        <Fragment>
            {props.post ?
                <div className={styles.baseForm}>
                    <div>
                        <div className={styles.postTitle}>{props.post.postTitle}</div>
                        <div className={styles.info}>
                            <div className={styles.leftInfo}>
                                <div>조회수 {props.post.postLikeCount}</div>
                                <div>좋아요</div>
                                <div>싫어요</div>
                            </div>
                            <div className={styles.rightInfo}>
                                <div>별점</div>
                                <div>
                                    <button onClick={props.postLikeApi}>좋아요</button>
                                </div>
                                <div>
                                    <button>싫어요</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imageInfo}>IMAGE</div>
                        <div className={styles.contentInfo}>{props.post.postContent}</div>
                        <div>
                            <button>수정</button>
                            <button onClick={props.postRemoveApi}>삭제</button>
                        </div>
                        <div className={styles.replyInfo}>
                            <ReplyWrite/>
                            <ReplyList replies={props.post.replies}/>
                        </div>
                    </div>
                </div>
                : <div></div>}
        </Fragment>
    )
}

export default PostInfo;