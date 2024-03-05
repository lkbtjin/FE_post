import {useNavigate, useParams} from "react-router-dom";
import React, {Fragment, useEffect, useState} from "react";
import PostInfo from "../../components/post/PostInfo";
import axios from "axios";
import {PostInfoResponseType, PostLikeRequestType, PostRemoveRequestType} from "../../type/pages/post/Post.type";
import styles from './PostInfoPage.module.css'

/**
 * 게시물 상세 페이지
 * @param props
 * @constructor
 */
const PostInfoPage = (props: any): JSX.Element => {
    /** 페이지 이동을 위해 navigate 사용 */
    const navigate = useNavigate();
    /** 포스트아이디 */
    const {postId} = useParams();
    /** 게시물 상세를 받아와서 셋팅 **/
    const [post, setPost] = useState<PostInfoResponseType>();

    /**
     *  상세조회
     */
    const postInfoApi = () => {
        axios.get(`http://localhost:8080/post/info/${postId}`)
            .then((result) => {
                setPost(result.data)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {

            })
    }

    /**
     * 게시글 삭제
     */
    const postRemoveApi = () => {
        let postRemoveParam: PostRemoveRequestType = {
            postId: Number(postId)
        }
        axios.post('http://localhost:8080/post/remove', postRemoveParam)
            .then((result) => {
                console.log(result)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(()=>{

            })
    }

    /**
     * 게시글 좋아요/좋아요 취소
     */
    const postLikeApi = () => {
        console.log('postLike API')
        console.log(post);
        let postLikeParam: PostLikeRequestType = {
            postId: Number(postId),
            memberId: 111112
            // postLikeYn: post.postLikeYn
        }
        axios.post('http://localhost:8080/post/like', postLikeParam)
            .then((result) => {
                console.log(result)
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => {

        })
    }

    useEffect(() => {
        postInfoApi()
    }, []);

    return (
        <div className={styles.main}>
            <PostInfo postLikeApi={postLikeApi} postRemoveApi={postRemoveApi} post={post}/>
        </div>
    )
}

export default PostInfoPage;