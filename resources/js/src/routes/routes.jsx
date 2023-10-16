import Example from "../components/Example";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";

const routes = [
    {
        path: "/",
        element: <Example/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/*",
        element: <NotFound/>
    }
]

export default routes