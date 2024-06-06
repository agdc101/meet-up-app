import MeetupList from "../components/meetups/MeetupList";

const dummy_meetups = [
    {
        id: "m1",
        title: "This is a first meetup",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Darby_House%2C_Telford_-_geograph.org.uk_-_864342.jpg",
        address: "Meetupstreet 5, 12345 Meetup City",
        description: "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
    },
    {
        id: "m2",
        title: "This is a second meetup",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Darby_House%2C_Telford_-_geograph.org.uk_-_864342.jpg",
        address: "Meetupstreet 9, 123 Meetup City",
        description: "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
    }
];

export default function HomePage(props) {
  return (
    <>
      <MeetupList meetups={dummy_meetups} />
    </>
  );
}

// // executes on the fly, on the server after deployment
// export async function getServerSideProps(context) {
//   const { req, res } = context;
//   return {
//     props: {
//       meetups: dummy_meetups
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API! // executes on the server/during build
  return {
    props: {
      meetups: dummy_meetups
    },
    revalidate: 3600
  };
}
