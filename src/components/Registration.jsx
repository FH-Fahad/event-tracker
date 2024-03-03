/* eslint-disable react/prop-types */

import { events } from "../data/EventData";
import Input from "./Input";
import { useState } from "react";
import Date from "../utils/Date";
import Button from "./Button";

function Registration() {
  const today = Date();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [event, setEvent] = useState("");

  const filteredEvents = events.filter((event) => {
    return event.date >= today && event.registration === "yes";
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!event) {
      alert("Please select an event");
      return;
    }

    if (email.trim() === "" || name.trim() === "" || id.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    let success = false;
    const registration = {
      name,
      email,
      id,
      event,
    };

    console.log(registration);

    alert(`Registration Successful! \n`);
    success = true;
    if (success) {
      setEvent("");
      setId("");
      setEmail("");
      setName("");
    }
  };

  return (
    <div className="registration">
      <h2>Registration Page</h2>
      <div className="form-group">
        <label htmlFor="name" className="label-left-center">
          Name:
        </label>
        <Input
          type="text"
          placeholder="Enter your name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="label-left-center">
          Email:
        </label>
        <Input
          type="email"
          placeholder="Enter your email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="id" className="label-left-center">
          ID:
        </label>
        <Input
          type="number"
          placeholder="Enter your ID"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="event" className="label-left-center">
          Select one:
        </label>
        <select
          name="event"
          id="eventDropdown"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
        >
          <option value="">Select an event</option>
          {filteredEvents.map((event) => (
            <option key={event.id} value={event.name}>
              {event.name}
            </option>
          ))}
        </select>
      </div>
      <div className="back">
        <Button
          type="button"
          text="Go Back"
          onClick={() => window.history.back()}
        />
        <Button type="button" text="Registration Now" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default Registration;
