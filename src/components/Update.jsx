/* eslint-disable react/prop-types */

function Update({ update }) {
  return (
    <div className="event1">
      <li>
        <h3>{update.name}</h3>
        <p dangerouslySetInnerHTML={{ __html: update.description }} />
      </li>
    </div>
  );
}

export default Update;
