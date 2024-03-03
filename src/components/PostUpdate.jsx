import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function PostUpdate() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || description.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    let success = false;
    const event = {
      name,
      description,
    };

    console.log(event);

    success = true;
    if (success) {
      setName("");
      setDescription("");
    }
  };

  return (
    <div className="adminDetiels">
      <div>
        <h2>Post new updates</h2>
        <div className="registration">
          <div className="form-group">
            <label htmlFor="name" className="label-left-center">
              Title:
            </label>
            <Input
              type="text"
              placeholder="Enter your update title"
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
              placeholder="Update description"
              id="description"
              value={description}
              rows={4}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="back">
          <Button type="button" text="Post Update" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default PostUpdate;
