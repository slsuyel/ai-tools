import { createBrowserRouter } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";
import WithNavbar from "../layouts/WithNavbar";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home/Home";
import ToolsLayout from "../layouts/ToolsLayout";
import ScrollToTop from "../components/ScrollToTop";
import OnlineCodeEditor from "../pages/Category/CodingTools/OnlineCodeEditor";
import CodeFormatter from "../pages/Category/CodingTools/CodeFormatter/CodeFormatter";

import CroperPage from "../pages/Category/ImageTools/ImageResizer/CroperPage";
import BackgroundRemover from "../pages/Category/ImageTools/BackgroundRemover/BackgroundRemover";
import ImageCompression from "../pages/Category/ImageTools/ImageCompression/ImageCompression";
import PdfToImage from "../pages/Category/FileTools/PdfToImage";
import LoginPage from "../pages/Auth/LoginPage";
import Search from "../pages/Home/Search/Search";
import Blogs from "../pages/Home/Blogs/Blogs";
import DashHome from "../pages/Dashboard/Dash-Home/DashHome";
import AddBlog from "../pages/Dashboard/Blog/AddBlog";
import BlogsDas from "../pages/Dashboard/Blog/BlogsDas";
import Setting from "../pages/Dashboard/Setting/Setting";
import PrivateRoute from "./PrivateRoute";
import AdminLogin from "../pages/Auth/AdminLogin";
import SingleNews from "../pages/Home/Blogs/SingleNews/SingleNews";
import Hadith from "../pages/Category/Islamic/Hadith/Hadith";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <ScrollToTop> <WithOutnavbar /></ScrollToTop>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "/blog",
                element: <Blogs />,
            },
            {
                path: "/blog/:id",
                element: <SingleNews />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/admin",
                element: <AdminLogin />,
            },

            {
                path: ":slug/:tool",
                element: <ToolsLayout />,
            },
            {
                path: "search-results/:search",
                element: <Search />,
            },


            {
                path: ":slug/online-code-editor",
                element: <OnlineCodeEditor />,
            },
            {
                path: ":slug/code-formatter",
                element: <CodeFormatter />,
            },
            {
                path: ":slug/image-resizer",
                element: <CroperPage />,
            },
            {
                path: ":slug/background-remover",
                element: <BackgroundRemover />,
            },
            {
                path: ":slug/image-compressor",
                element: <ImageCompression />,
            },
            {
                path: ":slug/pdf-to-image",
                element: <PdfToImage />,
            },
            {
                path: ":slug/hadith",
                element: <Hadith />,
            },



        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><WithNavbar /></PrivateRoute>,
        children: [
            {
                path: '',
                element: <DashHome />
            },
            {
                path: 'add/news',
                element: <AddBlog />
            },
            {
                path: 'news',
                element: <BlogsDas />
            },
            {
                path: 'setting',
                element: <Setting />
            },

        ]
    }

]);