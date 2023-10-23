import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import { SharedLayout, Home, Error, NestedLayout,
Business, Entertainment, Sports, Technology, Science, Health, SearchResult } from './pages';

const router = createBrowserRouter([
    {
        path: "/",
        element: <SharedLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/",
                element: <NestedLayout />,
                children: [
                    {
                        path: 'business',
                        element: <Business />
                    },
                    {
                        path: "entertainment",
                        element: <Entertainment />
                    },
                    {
                        path: "sports",
                        element: <Sports />
                    },
                    {
                        path: "technology",
                        element: <Technology />
                    },
                    {
                        path: "science",
                        element: <Science />
                    },
                    {
                        path: "health",
                        element: <Health />
                    },
                ],
            },
            {
                path: "search",
                element: <SearchResult />
            },
        ],
    },
]);
  

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App