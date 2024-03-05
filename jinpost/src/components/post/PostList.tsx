import React from "react";
import styles from "./PostList.module.css"
import {useNavigate} from "react-router-dom";
import {PostInfoResponseType} from "../../type/pages/post/Post.type";


const PostList = (props: any): JSX.Element => {
    const navigate = useNavigate();
    return (
        <div className={styles.baseForm}>
            {props.posts ? props.posts.map((post: PostInfoResponseType) => {
                return (
                    <div key={post.postId}>
                        <div className={styles.list}>
                            <div className={styles.regionItem}>
                                <div>{post.region1}</div>
                                <div>{post.region2}</div>
                                <div>{post.region3}</div>
                            </div>
                            <div className={styles.photoItem}>
                                사진
                            </div>
                            <div className={styles.postItem}>
                                <div className={styles.titleItem} onClick={() => navigate(`/post/info/${post.postId}`)}>
                                    <div>
                                        {post.postTitle}
                                    </div>
                                    <div>
                                        <span>조회수 223</span>&nbsp;
                                        <span>좋아요 223</span>&nbsp;
                                        <span>싫어요 42</span>
                                    </div>
                                </div>
                                <div className={styles.contentItem}>{post.postContent}</div>
                            </div>
                            <div className={styles.viewItem}>
                                <button>핀 고정</button>
                            </div>
                        </div>
                    </div>
                )
            }) : <div>sorry</div>}
        </div>
    )
};

export default PostList;