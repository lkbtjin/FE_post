import styles from "./ReplyWrite.module.css"
import {useState} from "react";

/**
 * 댓글 작성 컴포넌트
 * @param props
 * @constructor
 */
const ReplyWrite = (props: any) => {

    /** 댓글 작성정보 **/
    const [writer, setWriter] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [content, setContent] = useState<string>("");


    return (
        <div className={styles.replyWriteForm}>
            <div className={styles.replyWriteTop}>
                <div className={styles.replyInputForm}>
                    <div className={styles.replyWriterForm}>
                        <label htmlFor="">writer</label>
                        <input type='text' onChange={(e) => setWriter(e.target.value)}/>
                    </div>
                    <div className={styles.replyPasswordForm}>
                        <label htmlFor="">password</label>
                        <input type='password' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button onClick={(e) => props.replyAddApi(writer, password, content)}>작성</button>
                    </div>
                </div>
            </div>
            <div className={styles.replyTextAreaForm}>
                <div>
                    <textarea onChange={(e) => setContent(e.target.value)} name="" id="" cols={154} rows={10}></textarea>
                </div>
            </div>
        </div>
    )
}

export default ReplyWrite;