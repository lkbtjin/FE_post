import {useEffect, useState} from "react";
import {
    PostInfoResponseType, PostListRequestType,
    PostListResponseType,
    PostPinRequestType,
    PostSearchRequestType
} from "../../type/pages/post/Post.type";
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
    const postListApi = (startDate: string, keyword: string) => {
        console.log(keyword)
        let listParam: PostListRequestType = {
            postTitle: keyword
        }
        axios.get('http://localhost:8080/post/list', {params: listParam})
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
     * 게시글 검색
     * - 키워드 검색: 제목, 작성자 / 날짜 검색
     */
    const postSearchApi = (startDate: string, keyword: string) => {
        console.log(startDate)
        console.log(keyword)
        let searchParam: PostSearchRequestType = {
            startDate: '',
            endDate: '',
            postTitle: '',
            postWriter: '',
            keyword: keyword
        }
        console.log(searchParam)
        axios.get('http://localhost:8080/post/search', {params: searchParam})
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
        postListApi('', '');
    }, []);

    return (
        <div className={styles.main}>
            <PostList postPinApi={postPinApi} posts={posts} postSearchApi={postSearchApi} postListApi={postListApi}/>
        </div>
    )
};

export default Main;