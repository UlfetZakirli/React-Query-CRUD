import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PostList from "../pages/PostList";
import AddPost from "../components/AddPost";
import EditPost from "../components/EditPost";
import Post from "../pages/Post";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/postList',
                element: <PostList />
            },
            {
                path: '/addPost',
                element: <AddPost />,
            },
            {
                path: '/editPost/:id',
                element: <EditPost />
            },
            {
                path: '/postDetail/:id',
                element: <Post />
            }
        ]
    }
])