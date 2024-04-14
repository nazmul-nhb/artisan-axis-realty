import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/:id',
                element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
                loader: (() => fetch('./estate-data.json'))
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/update-profile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
        ]
    },
]);