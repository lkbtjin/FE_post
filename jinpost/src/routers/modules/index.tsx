import MainLayout from "../../pages/main/MainLayout";
import Main from "../../pages/main/Main";
import PostWrite from "../../pages/post/PostWritePage";
import PostInfoPage from "../../pages/post/PostInfoPage";
import PostWritePage from "../../pages/post/PostWritePage";

const reactRoute = [
    {
        id: 'root',
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                id: 'main',
                path:"",
                element: <Main/>
            },
            {
                id: 'postWrite',
                path: 'add',
                element: <PostWritePage/>
            },
            {
                id: 'postInfo',
                path:`/post/info/:postId`,
                element: <PostInfoPage/>
            },
            {
                id: 'postModify',
                path: '/post/modify/:postId',
                element: <PostWritePage/>
            }
        ]
    }
]

export default reactRoute;