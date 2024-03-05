import {useEffect, useState} from "react";
import {PostInfoResponseType, PostListResponseType, PostPinRequestType} from "../../type/pages/post/Post.type";
import PostList from "../../components/post/PostList";
import axios from "axios";
import styles from './Main.module.css'

/**
 * 메인 페이지
 * - 페이지 접속 후 첫 화면
 * - 게시글에 대한 API를 이 곳에서 실행한 후, 자식 컴포넌트에게 내려준다.
 * TODO (구현필요) 2024-03-05 추후 로딩바 구현 필요
 * @constructor
 */
const Main = (): JSX.Element => {

    /** 게시글 조회 후 받아온 리스트를 저장 **/
    const [posts, setPosts] = useState<PostListResponseType>();

    /**
     * 게시글 전체 조회
     */
    const postListApi = () => {
        axios.get('http://localhost:8080/post/list')
            .then((result) => {
                setPosts(result.data)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {

            })
    }

    /**
     * 게시글 핀 고정
     * TODO (구현필요) 2024-03-05 전체적으로 재 구현 필요
     */
    const postPinApi = (post: PostInfoResponseType) => {
        let postPinParam: PostPinRequestType = {
            postId: Number(post.postId),
            postPinYn: post.postPinYn
        }
        axios.post('http://localhost:8080/post/pin', postPinParam)
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
     * 최초 페이지 접속시 게시글 조회를 실행
     */
    useEffect(() => {
        postListApi();
    }, []);

    return (
        <div className={styles.main}>
            <PostList postPinApi={postPinApi} posts={posts}/>
        </div>
    )
};

export default Main;