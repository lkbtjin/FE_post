import {useNavigate, useParams} from "react-router-dom";
import React, {Fragment, useEffect, useState} from "react";
import PostInfo from "../../components/post/PostInfo";
import axios from "axios";
import {
    PostInfoResponseType,
    PostLikeRequestType,
    PostRemoveRequestType,
    ViewRequestType
} from "../../type/pages/post/Post.type";
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
                console.log(result.data)
                setPost(result.data)
                viewApi()
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
            .finally(() => {

            })
    }

    /**
     * 게시글 좋아요/좋아요 취소
     */
    const postLikeApi = () => {
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

    /**
     * 게시글 싫어요/싫어요 취소
     */
    const postHateApi = () => {
        let postHateParam: PostLikeRequestType = {
            postId: Number(postId),
            memberId: 111112
            // postLikeYn: post.postLikeYn
        }
        axios.post('http://localhost:8080/post/hate', postHateParam)
            .then((result) => {
                console.log(result)
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => {

        })
    }

    /**
     * 조회수 카운트 기능
     * TODO (구현필요) 2024-03-06 현재 중복제어 안됨, 추후 회원 등 기능으로 중복제어 필요
     */
    const viewApi = () => {
        let viewParam: ViewRequestType = {
            postId: Number(postId)
        }
        axios.post('http://localhost:8080/post/view', viewParam)
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
        postInfoApi()
    }, []);

    return (
        <div className={styles.main}>
            <PostInfo postLikeApi={postLikeApi} postHateApi={postHateApi} postRemoveApi={postRemoveApi} postInfoApi={postInfoApi} post={post}/>
        </div>
    )
}

export default PostInfoPage;