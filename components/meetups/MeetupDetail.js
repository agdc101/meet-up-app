

import classes from './MeetupDetail.module.css';

export default function MeetupDetail (props) {
  console.log(props);
  return (
    <section className={classes.container}>
        <div>
            <h1>Meetup Details Page</h1>
            <img className={classes.img} src={props.image} alt={props.alt} />
            <p>{props.description}</p>
            <address>{props.address}</address>
        </div>
    </section>
  );
}

