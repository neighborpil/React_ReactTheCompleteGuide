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

export default MeetupDetails;