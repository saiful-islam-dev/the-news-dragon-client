import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";

const router  =createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: '/category/:id',
                element: <Category/>
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout/>,
        children: [
            {
                path: '/:id',
                element: <News/>
            }
        ]
    }
])


export default router;