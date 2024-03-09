import ReactQuill from "react-quill";
import styles from "./PostWrite.module.css"
import {useState} from "react";
import {region1} from "../../resources/data/region";

const PostWrite = (props: any) => {
    const modules = {
        toolbar: {
            container: [
                ['image'],
                [{header: [1, 2, 3, 4, 5, 6, false]}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            ]
        },
    }

    const region_1 = region1;

    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");

    return (
        <div className={styles.baseForm}>
            <div className={styles.baseTitle}>
                <div>
                    <h2>맛집 작성</h2>
                </div>
                <div className={styles.postWriteButton}>
                    <button onClick={() => props.addPostApi(content, title)}>글 등록</button>
                </div>
            </div>
            <div className={styles.postWriteTitle}>
                <input type='text' placeholder='제목을 입력해주세요.' onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <ReactQuill
                style={{width: "1200px", height: "600px"}} modules={modules} theme="snow" placeholder='내용을 입력해주세요'
                onChange={setContent}
            />
            <div className={styles.postWriteSelect}>
                <div className={styles.selectRegion1}>
                    <label>시 / 도</label>&nbsp;
                    <select>
                        {region_1 ? region_1.map((region1) => {
                            return (
                                <option value={region1} key={region1}>{region1}</option>
                            )
                        }) : <div>sorry</div>}
                    </select>
                </div>
                <div className={styles.selectRegion1}>
                    <label>구 / 시</label>&nbsp;
                    <select>
                        {region_1 ? region_1.map((region1) => {
                            return (
                                <option value={region1} key={region1}>{region1}</option>
                            )
                        }) : <div>sorry</div>}
                    </select>
                </div>
                <div className={styles.selectRegion1}>
                    <label>동</label>&nbsp;
                    <select>
                        {region_1 ? region_1.map((region1) => {
                            return (
                                <option value={region1} key={region1}>{region1}</option>
                            )
                        }) : <div>sorry</div>}
                    </select>
                </div>
            </div>
            <div>
                <div>
                    <label>업종정보</label>
                    <select>
                        <option>선</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default PostWrite;