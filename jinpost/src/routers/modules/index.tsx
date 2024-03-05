import MainLayout from "../../pages/main/MainLayout";
import Main from "../../pages/main/Main";
import PostWrite from "../../pages/post/PostWritePage";
import PostInfoPage from "../../pages/post/PostInfoPage";

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
                element: <PostWrite/>
            },
            {
                path:`/post/info/:postId`,
                element: <PostInfoPage/>
            }
        ]
    }
]

export default reactRoute;