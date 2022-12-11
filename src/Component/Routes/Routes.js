import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Project1 from "../RightSide/All Porjects/ProjectsSec/Project1";
import Project2 from "../RightSide/All Porjects/ProjectsSec/Project2";
import Project3 from "../RightSide/All Porjects/ProjectsSec/Project3";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/project1',
                element: <Project1></Project1>
            },
            {
                path: '/project2',
                element: <Project2></Project2>
            },
            {
                path: '/project3',
                element: <Project3></Project3>
            }
        ]
    }
])