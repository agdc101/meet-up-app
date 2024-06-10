import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from 'mongodb';

export default function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
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

  const client = await MongoClient.connect('mongodb+srv://agdc101:Jupiter68-@cluster0.lrcr2ju.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 3600
  };
}
