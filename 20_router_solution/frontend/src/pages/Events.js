import EventsList from '../components/EventsList';
import {json, useLoaderData} from "react-router-dom";

function EventsPage() {
    const data = useLoaderData();

    // if (data.isError) {
    //     return (
    //       <p>{data.message}</p>
    //     );
    // }

    const events = data.events;

    return (
        <>
            <EventsList events={events}/>
        </>
    );
}

export default EventsPage;

export async function loader() {
    // useState() -- can not use useState hoook inside loader
    // but default browser functions can be used like localStorage
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return {isError: true, message: 'Could not fetch events.'};

        // throw new Error();

        // throw {message: 'Could not fetch events.'};

        // throw new Response(
        //     JSON.stringify({message: 'Could not fetch events.'}),
        //     {status: 500}
        // );

        // json(): creates Response class and data in json format
        throw json(
            {message: 'Could not fetch events.'},
            {status: 500}
        );
    } else {
        return response;

        // const resData = await response.json();
        // return resData.events;

        // const res = new Response('any data', {status: 201})
        // return res;
    }
}