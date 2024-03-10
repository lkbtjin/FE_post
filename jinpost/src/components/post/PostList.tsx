import React, {useState} from "react";
import styles from "./PostList.module.css"
import {useNavigate} from "react-router-dom";
import {PostInfoResponseType, PostSearchRequestType} from "../../type/pages/post/Post.type";

/**
 * 게시판 조회 결과를 뿌려주는 화면
 * TODO (구현필요) 2024-03-05 props 타입 정의 필요
 * @param props
 * @constructor
 */
const PostList = (props: any): JSX.Element => {
    /** 페이지 이동을 위해 navigate 사용 **/
    const navigate = useNavigate();

    const [startDate, setStartDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [endDate, setEndDate] = useState<string>();
    // const [searchParam, setSearchParam] = useState<PostSearchRequestType>({
    //     startDate: '',
    //     endDate: '',
    //     postTitle: '',
    //     postWriter: ''
    // });

    const [keyword, setKeyword] = useState<string>();

    const date = new Date();
    // const today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className={styles.baseForm}>
            <div className={styles.baseTitle}>
                <div>
                    <div>
                        <span>
                            <input onChange={(e)=> setStartDate(e.target.value)}type='date' value={today}/>
                        </span>
                        <span>~</span>
                        <span>
                            <input type='date'/>
                        </span>
                    </div>
                    <div>
                        <select>
                            <option>선택</option>
                            <option>제목</option>
                        </select>
                        <input type="text" onChange={(e)=> setKeyword(e.target.value)}/>
                    </div>
                    <div>
                        {/*<button onClick={(e)=>props.postSearchApi(startDate, keyword)}>검색</button>*/}
                        <button onClick={(e)=>props.postListApi(startDate, keyword)}>검색</button>
                    </div>
                </div>
            </div>
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
                                <div className={styles.titleItems}
                                     onClick={() => navigate(`/post/info/${post.postId}`)}>
                                    <div className={styles.titleItem}>
                                        {post.postTitle}
                                    </div>
                                    <div className={styles.countItem}>
                                        <span>조회수 {post.viewCount}</span>&nbsp;
                                        <span>좋아요 {post.likeCount}</span>&nbsp;
                                        <span>싫어요 {post.hateCount}</span>
                                    </div>
                                </div>
                                <div>김현진 2023-04-02</div>
                                {/*<div className={styles.contentItem}>{post.postContent}</div>*/}
                            </div>
                            <div className={styles.viewItem}>
                                <button onClick={() => props.postPinApi(post)}>핀 고정</button>
                            </div>
                        </div>
                    </div>
                )
            }) : <div>sorry</div>}
        </div>
    )
};

export default PostList;