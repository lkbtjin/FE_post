import {ReplyInfoResponseType} from "../../type/pages/reply/Reply.type";
import styles from './ReplyList.module.css'

const ReplyList = (props: any) => {
    console.log(props.replies)
    return (
        <div>
            {props.replies ? props.replies.map((reply: ReplyInfoResponseType) => {
                return (
                    <div key={reply.replyId} className={styles.replyForm}>
                        <div className={styles.replyTop}>
                            <div className={styles.replyBasicInfo}>
                                <div>{reply.replyWriter}</div>
                                <div>{reply.regDateTime}</div>
                            </div>
                            <div className={styles.replyButton}>
                                <div>
                                    <button>좋아요</button>
                                </div>
                                <div>
                                    <button>싫어요</button>
                                </div>
                                <div>
                                    <button>핀 고정</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.replyBottom}>
                            <div>{reply.replyContent}</div>
                        </div>
                        <div>
                            <button>수정</button>
                            <button>삭제</button>
                        </div>
                    </div>
                )
            }) : <div>sorry</div>}
        </div>
    )
}

export default ReplyList;