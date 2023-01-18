import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPages from "./pages/Products";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";

// // order version
// const routeDefinitions = createRoutesFromElements(
//     <Route>
//         <Route path={"/"} element={<HomePage/>}/>
//         <Route path={"/products"} element={<ProductsPages/>}/>
//     </Route>
// );
// const oldRouter = createBrowserRouter(routeDefinitions);

// new version
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {path: '/', element: <HomePage/>},
            {path: '/products', element: <ProductsPages/>},
        ]
    },
]);

function App() {
    // return <RouterProvider router={oldRouter}/>;
    return <RouterProvider router={router}/>;
}

export default App;