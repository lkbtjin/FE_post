import PostWrite from "../../components/post/PostWrite";
import ReactQuill from "react-quill";
import styles from "./PostWritePage.module.css"
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import {PostAddRequestType} from "../../type/pages/post/Post.type";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import reactRoute from "../../routers/modules";
import router from "../../routers";
import routers from "../../routers";

/**
 * 게시글 작성 페이지
 * - 라이브러리 'Quill' 이용
 */
const PostWritePage = () => {
    const param = useParams()
    console.log(param)
    console.log(reactRoute)
    const navigate = useNavigate();
    console.log(navigate)
    const location = useLocation();
    console.log(location)
    console.log(router.state)
    console.log(routers)

    /**
     * 글 상세정보 조회(게시글 수정)
     */
    const postModifyInfoApi = () => {
        console.log('postModifyApi')
        axios.get(`http://localhost:8080/post/modifyInfo/${param.postId}`)
            .then((result) => {
                console.log(result)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {

            })

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

    /**
     * 글 수정 기능
     */
    const postModifyApi = (content: string, title: string) => {
        console.log('postModifyApi')
        let modifyParam = {
            postId: param.postId,
            postTitle: title,
            postContent: content
        }
        axios.post('http://localhost:8080/post/modify', modifyParam)
            .then((result) => {
                console.log(result)
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
            <PostWrite addPostApi={addPostApi} postModifyApi={postModifyApi}/>
        </div>
    )
}

export default PostWritePage;