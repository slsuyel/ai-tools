import { createBrowserRouter } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";
import WithNavbar from "../layouts/WithNavbar";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home/Home";
import ToolsLayout from "../layouts/ToolsLayout";
import ScrollToTop from "../components/ScrollToTop";
import NotFound from "../components/NotFound";
import OnlineCodeEditor from "../pages/Category/CodingTools/OnlineCodeEditor";
import CodeFormatter from "../pages/Category/CodingTools/CodeFormatter/CodeFormatter";

import CroperPage from "../pages/Category/ImageTools/ImageResizer/CroperPage";
import BackgroundRemover from "../pages/Category/ImageTools/BackgroundRemover/BackgroundRemover";
import ImageCompression from "../pages/Category/ImageTools/ImageCompression/ImageCompression";
import PdfToImage from "../pages/Category/FileTools/PdfToImage";
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
                element: <NotFound />,
            },
            {
                path: "/login",
                element: <NotFound />,
            },
            {
                path: ":category/:tool",
                element: <ToolsLayout />,
            },
            {
                path: "/coding-tools/online-code-editor",
                element: <OnlineCodeEditor />,
            },
            {
                path: "/coding-tools/code-formatter",
                element: <CodeFormatter />,
            },
            {
                path: "/image-tools/image-resizer",
                element: <CroperPage />,
            },
            {
                path: "/image-tools/background-remover",
                element: <BackgroundRemover />,
            },
            {
                path: "/image-tools/image-compressor",
                element: <ImageCompression />,
            },
            {
                path: "/document-converters/pdf-to-image",
                element: <PdfToImage />,
            },

        ],
    },
    {
        path: 'dashboard',
        element: <WithNavbar />,
        children: [
            {
                path: '',
                element: <div>Home  2</div>
            },

        ]
    }

]);