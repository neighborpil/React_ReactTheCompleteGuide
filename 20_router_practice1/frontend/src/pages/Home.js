import MainNavigation from "../components/MainNavigation";
import {Link, useNavigate} from "react-router-dom";

function HomePage() {

    const navigate = useNavigate();

    function navigateHandler() {
        navigate('events');
    }

    return (
        <>
            <h1>Home Page</h1>
            <p>
                Go to <Link to={'events'}>Go to events</Link>
            </p>
            <p>
                <button onClick={navigateHandler}>Events</button>
            </p>
        </>
    )
}

export default HomePage;