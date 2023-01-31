import {Link} from "react-router-dom";

function EditEventPage() {
    return (
        <>
            <h1>Edit Event</h1>
            <p><Link to={".."} relative={'path'}>Back</Link></p>
        </>
    );
}

export default EditEventPage;