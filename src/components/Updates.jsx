import { updates } from "../data/UpdateDate";
import Update from "./Update";

function Updates() {
  return (
    <div className="event__show">
      <h2>Other Updates</h2>
      <div className="event">
        <ol>
          {updates.map((update) => (
            <Update key={update.name} update={update} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Updates;
