import { createBrowserRouter } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";
import WithNavbar from "../layouts/WithNavbar";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home/Home";
import ToolsLayout from "../layouts/ToolsLayout";
import ScrollToTop from "../components/ScrollToTop";
import NotFound from "../components/NotFound";
import OnlineCodeEditor from "../pages/Category/CodingTools/OnlineCodeEditor";
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