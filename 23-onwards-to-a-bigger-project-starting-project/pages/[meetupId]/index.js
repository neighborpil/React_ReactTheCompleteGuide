import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail
            image={'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
            title={'A First Meetup'}
            address={'Some street 5, some city'}
            description={'The meetup description'}
        />
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
                id: meetupId,
                title: 'First Meetup',
                address: 'Some street 5, some city',
                description: 'This is a first meetup',
            }
        }
    }
}

export default MeetupDetails;
