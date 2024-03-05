import {useParams} from "react-router-dom";
import React, {Fragment, useEffect, useState} from "react";
import PostInfo from "../../components/post/PostInfo";
import axios from "axios";
import {PostInfoResponseType, PostLikeRequestType} from "../../type/pages/post/Post.type";
import styles from './PostInfoPage.module.css'

const PostInfoPage = (props: any): JSX.Element => {
    const {postId} = useParams();
    console.log('Post Info Page')
    console.log(postId)

    const [post, setPost] = useState<PostInfoResponseType>();

    /**
     *  상세조회
     */
    const postInfoApi = () => {
        console.log('postInfo API')
        axios.get(`http://localhost:8080/post/info/${postId}`)
            .then((result) => {
                console.log(result)
                setPost(result.data)
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
        console.log('postLike API')
        let postLikeParam: PostLikeRequestType = {
            postId: Number(postId),
            postLikeYn: 'Y'
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
            <PostInfo postLikeApi={postLikeApi} post={post}/>
        </div>
    )
}

export default PostInfoPage;