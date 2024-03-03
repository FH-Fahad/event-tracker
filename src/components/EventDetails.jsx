import Button from "./Button";
import Date from "../utils/Date";
import { events } from "../data/EventData";
import { images } from "../data/ImageData";
import { useParams } from "react-router-dom";
import { useState } from "react";

function EventDetails() {
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id));
  const [expandedImage, setExpandedImage] = useState(null);

  if (!event) {
    return (
      <div className="event__details">
        <h2>Event not found</h2>
        <br />
        <Button
          type="button"
          text="Go back"
          onClick={() => {
            window.history.back();
          }}
        />
      </div>
    );
  }

  const valid = event.registration === "yes";
  const reg = event.lastDateofReg;
  const today = Date();
  const validDate = reg >= today;

  const handleImageClick = (index) => {
    setExpandedImage(
      images.find((image) => image.id === event.id).images[index]
    );
  };

  return (
    <div className="event__details">
      <h2 dangerouslySetInnerHTML={{ __html: event.name }} />
      <div className="detiels">
        <p>Date: {event.date}</p>
        {valid ? <p>Registration deadline: {event.lastDateofReg}</p> : null}
      </div>
      <p dangerouslySetInnerHTML={{ __html: event.description }} />
      <br />

      <div className="images">
        {images
          .find((image) => image.id === event.id)
          .images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Event ${index + 1}`}
              onClick={(e) => {
                e.preventDefault();
                handleImageClick(index);
              }}
            />
          ))}
      </div>

      {expandedImage ? (
        <div className="expanded-image">
          <img src={expandedImage} alt="Expanded" />
        </div>
      ) : null}

      <div className="detiels">
        <Button
          type="button"
          text="Go back"
          onClick={() => {
            window.history.back();
          }}
        />

        {valid && validDate ? (
          <Button
            type="button"
            text="Registration Now"
            onClick={() => {
              window.location.href = `/registration`;
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

export default EventDetails;
