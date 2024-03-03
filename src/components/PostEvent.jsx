import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Date from "../utils/Date";

function PostEvent() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [lastDateofReg, setLastDateofReg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || description.trim() === "" || id.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    const today = Date();
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!datePattern.test(date) || !datePattern.test(lastDateofReg)) {
      alert("Please enter a valid date");
      return;
    }

    if (date < today) {
      alert("You're providing an old date");
      return;
    }

    let success = false;
    const event = {
      name,
      description,
      id,
      date,
      lastDateofReg,
    };
    console.log(event);
    success = true;
    if (success) {
      setId("");
      setName("");
      setDescription("");
      setDate("");
      setLastDateofReg("");
    }
  };

  return (
    <div className="adminDetiels">
      <div>
        <h2>Post new events</h2>
        <div className="registration">
          <div className="form-group">
            <label htmlFor="id" className="label-left-center">
              Event ID:
            </label>
            <Input
              type="number"
              placeholder="Enter event ID"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
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
            <label htmlFor="description" className="label-left-center">
              Description:
            </label>
            <textarea
              type="text"
              placeholder="Event description"
              id="description"
              value={description}
              rows={3}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="event" className="label-left-center">
              Date:
            </label>
            <Input
              type="text"
              placeholder="DD/MM/YYYY"
              id="event"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="deadline" className="label-left-center">
              Deadline:
            </label>
            <Input
              type="text"
              placeholder="DD/MM/YYYY"
              id="deadline"
              value={lastDateofReg}
              onChange={(e) => setLastDateofReg(e.target.value)}
            />
          </div>
        </div>

        <div className="back">
          <Button type="button" text="Post Event" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default PostEvent;
