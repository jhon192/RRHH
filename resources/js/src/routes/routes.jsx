import About from "../Pages/About";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import UsersIndex from "../Pages/Users/Index";
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
			{
				path: '/users',
				element: <UsersIndex />
			}
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
]

export default routes