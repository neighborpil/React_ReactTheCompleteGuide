import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        address: 'Some address 5, 12345, city',
        description: 'This is a first meetup',
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        address: 'Some address 3, 12345, city',
        description: 'This is a second meetup',
    }
]

function HomePage(props) {

    return (
        <MeetupList meetups={props.meetups}/>
    );
}

export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;

    // fetch data from API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}

// This is reserved name for static pre-rendering process
// this code is executed during the build process
// export async function getStaticProps() {
//     // fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 1 // every 1 second, server will build new static props
//     };
// }

export default HomePage;