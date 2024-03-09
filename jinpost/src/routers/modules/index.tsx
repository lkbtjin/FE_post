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
                path:"",
                element: <Main/>
            },
            {
                path: 'add',
                element: <PostWritePage/>
            },
            {
                path:`/post/info/:postId`,
                element: <PostInfoPage/>
            },
            {
                path: '/post/modify/:postId',
                element: <PostWritePage/>
            }
        ]
    }
]

export default reactRoute;