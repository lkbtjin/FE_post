import styles from "./PostInfo.module.css"
import {Fragment} from "react";
import ReplyWrite from "../reply/ReplyWrite";
import ReplyList from "../reply/ReplyList";
import ReplyPage from "../../pages/reply/ReplyPage";

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
                                <div>조회수 {props.post.viewCount}</div>
                                &nbsp;
                                <div>좋아요 {props.post.likeCount} </div>
                                &nbsp;
                                <div>싫어요 {props.post.hateCount}</div>
                            </div>
                            <div className={styles.rightInfo}>
                                <div>별점</div>
                                &nbsp;
                                <div>
                                    <button onClick={props.postLikeApi}>좋아요</button>
                                </div>
                                &nbsp;
                                <div>
                                    <button onClick={props.postHateApi}>싫어요</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imageInfo}>
                            <div className={styles.leftImage}>IMAGE1</div>
                            <div className={styles.rightImage}>
                                <div className={styles.rightLeft}>
                                    <div>IMAGE2</div>
                                    <div>IMAGE3</div>
                                </div>
                                <div className={styles.rightRight}>
                                    <div>IMAGE4</div>
                                    <div>IMAGE5</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contentInfo}
                             dangerouslySetInnerHTML={{
                                 __html: props.post.postContent,
                             }}
                        />
                        {/*<div className={styles.contentInfo}>{props.post.postContent}</div>*/}
                        <div>
                            <button>수정</button>
                            <button onClick={props.postRemoveApi}>삭제</button>
                        </div>
                        <div className={styles.replyInfo}>
                            <ReplyPage replies={props.post.replies} postId={props.post.postId}
                                       postInfoApi={props.postInfoApi}/>
                        </div>
                    </div>
                </div>
                : <div></div>}
        </Fragment>
    )
}

export default PostInfo;