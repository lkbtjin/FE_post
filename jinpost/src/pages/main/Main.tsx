import {useEffect, useState} from "react";
import {PostListResponseType} from "../../type/pages/post/Post.type";
import PostList from "../../components/post/PostList";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Main = (): JSX.Element => {

    const navigate = useNavigate();

    const [posts, setPosts] = useState<PostListResponseType>();

    /**
     * 게시글 전체 조회
     */
    const postListApi = () => {
        console.log('postlist API')
        axios.get('http://localhost:8080/post/list')
            .then((result) => {
                console.log(result.data)
                result.data.postViewCount = 1231;
                setPosts(result.data)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(()=>{

            })
    }

    /**
     * 게시글 좋아요
     */
    const postLikeApi = () =>{
        console.log('postLike API')
    }

    useEffect(() => {
        console.log('Main Page')
        postListApi();
    }, []);

    return (
        <div>
            <h3>Main</h3>
            <button onClick={()=>navigate('/add')}></button>
            <PostList posts={posts}/>
        </div>
    )
};

export default Main;