/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Date from "../utils/Date";
import { images } from "../data/ImageData";

function Event({ event }) {
  const today = Date();
  const matchingImage = images.find((image) => image.id === event.id);

  const description =
    event.description.length > 150
      ? `${event.description.substring(0, 150)}...`
      : event.description;

  return (
    <div className="event1">
      <li className="event-container">
        <Link to={`/event/${event.id}`} className="event-details">
          <div>
            <h3>{event.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <span className="date">Date: {event.date}</span>
            {/* {console.log(event.lastDateofReg >= today)}
            {console.log(event.registration === "yes")} */}
            {event.lastDateofReg >= today && event.registration === "yes" && (
              <span className="date">
                Registration deadline: {event.lastDateofReg}
              </span>
            )}
          </div>
        </Link>
        <div className="event-image">
          {matchingImage && (
            <div>
              <img
                key={matchingImage.id}
                src={matchingImage.images[0]}
                alt={event.name}
              />
            </div>
          )}
        </div>
      </li>
    </div>
  );
}

export default Event;
