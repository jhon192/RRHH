import Example from "../components/Example";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import GuestLayout from "../components/GuestLayout";
import ProtectedLayout from "../components/ProtectedLayout";


const routes = [
	{
		path: '/',
		element: <GuestLayout />,
		children: [
			{
				path: '/',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
	{
		path: '/',
		element: <ProtectedLayout />,
		children: [
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/profile',
				element: <Profile />,
			},
		],
	},
    {
        path: '*',
        element: <NotFound />,
    },
]

export default routes