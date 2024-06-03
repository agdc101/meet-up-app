

import classes from './MeetupDetail.module.css';

export default function MeetupDetail (props) {
  return (
    <section class={classes.container}>
        <div>
            <h1>Meetup Details Page</h1>
            <img class={classes.img} src={props.image} alt={props.alt} />
            <p>{props.description}</p>
            <address>{props.address}</address>
        </div>
    </section>
  );
}

