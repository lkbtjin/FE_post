import MainLayout from "../../pages/main/MainLayout";
import Main from "../../pages/main/Main";
import PostWrite from "../../pages/post/PostWrite";

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
            }
        ]
    }
]

export default reactRoute;