import Main from "../../pages/main/Main";
import {useEffect, useState} from "react";
import {PostListType} from "../../type/pages/post/Post.type";
import {PostList} from "../../resources/api/pages/post/Post.api";


/** 게시글 전체조회 **/
const postList = ():void => {
    console.log(PostList)
    // PostList()
        // .then((result => {
        //
        // }))
}


const PostContainer = ():JSX.Element => {
    return (
        <div>
            <Main></Main>
        </div>
    )
}

export default PostContainer;