import PageContent from "../components/PageContent";
import {useRouteError} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {

    const error = useRouteError();

    let title = "An error occurred!";
    let message = "Some error occurred";

    if (error.status === 500) {
        message = JSON.parse(error.data).message;
    }

    if (error.status === 404) {
        title = 'Not found!';
        message = 'Could not found resource or page.';
    }

    return (
        <>
            <MainNavigation/>
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
}

export default ErrorPage;