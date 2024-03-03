import PostEvent from "./PostEvent";
import PostUpdate from "./PostUpdate";

function Post() {
  return (
    <div className="admin">
      <PostEvent />
      <PostUpdate />
    </div>
  );
}

export default Post;
