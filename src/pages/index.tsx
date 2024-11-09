import api from "../../api";
import { useEffect, useState } from "react";

export default function Home() {
  // possibly shouldn't live here this is all test code to easily make sure your api is set up correctly
  const [posts, setPosts] = useState([]);
  // test api
  useEffect(() => {
    fetchPosts();
  }, []);

  // call fetch posts, this probably shouldn't live here
  const fetchPosts = async () => {
    try {
      // this endpoint needs to match whatever you named your endpoint in the mock api
      const response = await api.get("/posts");
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div>
      <h1>WELCOME</h1>
      <h2>Post Count: {posts.length ?? 0}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>Post Title: {post.title}</li>
        ))}
      </ul>
    </div>
  );
}
