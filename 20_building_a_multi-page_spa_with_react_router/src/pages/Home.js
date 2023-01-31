import {Link, useNavigate} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function HomePage() {

    const navigate = useNavigate();

    function navigateHandler() {
        navigate('products');
    }

    return (
        <>
            {/*<MainNavigation/>*/}
            <h1>My Home Page</h1>
            <p>
                Go to <Link to="products">The list of products</Link>
            </p>
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </>
    )
}

export default HomePage;