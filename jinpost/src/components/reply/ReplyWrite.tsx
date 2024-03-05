import styles from "./ReplyWrite.module.css"

const ReplyWrite = () => {
    return (
        <div className={styles.replyWriteForm}>
            <div className={styles.replyWriteTop}>
                <div className={styles.replyInputForm}>
                    <div className={styles.replyWriterForm}>
                        <label htmlFor="">writer</label>
                        <input type='text'/>
                    </div>
                    <div className={styles.replyPasswordForm}>
                        <label htmlFor="">password</label>
                        <input type='text'/>
                    </div>
                    <div>
                        <button>작성</button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <textarea name="" id="" cols={154} rows={10}></textarea>
                </div>
            </div>
        </div>
    )
}

export default ReplyWrite;