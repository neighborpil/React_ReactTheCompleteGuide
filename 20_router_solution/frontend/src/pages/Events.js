import EventsList from '../components/EventsList';
import {Suspense} from "react";
import {Await, defer, json, useLoaderData} from "react-router-dom";

function EventsPage() {
    // defer를 안쓸경우
    // const data = useLoaderData();

    // if (data.isError) {
    //     return (
    //       <p>{data.message}</p>
    //     );
    // }


    // const events = data.events;

    // return (
    //     <>
    //         <EventsList events={events}/>
    //     </>
    // );

    // defer를 쓸경우
    const {events} = useLoaderData();
    return (
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents}/>}
            </Await>
        </Suspense>
    )
}

export default EventsPage;

async function loadEvents() {
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
        const resData = await response.json();
        return resData.events;
        // return response;

        // const resData = await response.json();
        // return resData.events;

        // const res = new Response('any data', {status: 201})
        // return res;
    }
}

export function loader() {
    // defer: 페이지를 먼저 로딩시키고 그다음에 데이터를 가져온다
    return defer({
        events: loadEvents()
    })
}