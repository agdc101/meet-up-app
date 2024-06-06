
import MeetupDetail from "../components/meetups/MeetupDetail";

function MeetUpDetails() {
  return (
    <MeetupDetail image="https://via.placeholder.com/400" alt="meetup" address="address 5" description="meet up desc" ></MeetupDetail>
  );
}   

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1"
        }
      },
      {
        params: {
          meetupId: "m2"
        }
      }
    ]
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/b/b8/Darby_House%2C_Telford_-_geograph.org.uk_-_864342.jpg",
        title: "First Meetup",
        address: "Meetupstreet 5, 12345 Meetup City",
        description: "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
      }
    }
  };
}

export default MeetUpDetails;