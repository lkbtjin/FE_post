import PostWrite from "../../components/post/PostWrite";
import ReactQuill from "react-quill";
import styles from "./PostWritePage.module.css"
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import {PostAddRequestType} from "../../type/pages/post/Post.type";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";

/**
 * 게시글 작성 페이지
 * - 라이브러리 'Quill' 이용
 */
const PostWritePage = () => {
    const param = useParams()
    console.log(param)

    const navigate = useNavigate();

    /**
     * 글 상세정보 조회(게시글 수정)
     */
    const postModifyInfoApi = () => {
        console.log('postModifyApi')
    }

    /**
     * 글 작성 기능
     */
    const addPostApi = (content: string, title: string) => {
        let postAddParam: PostAddRequestType = {
            postTitle: title,
            postContent: content
        }
        axios.post('http://localhost:8080/post/add', postAddParam)
            .then((result) => {
                console.log(result)
                navigate(`/post/info/${result.data}`)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {

            })
    }

    useEffect(() => {
        postModifyInfoApi()
    }, []);


    return (
        <div className={styles.main}>
            <PostWrite addPostApi={addPostApi}/>
        </div>
    )
}

export default PostWritePage;