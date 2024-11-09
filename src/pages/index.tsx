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
      const response = await api.get("/Posts");
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div>
      <h1>WELCOME</h1>
      <h2>Post Count: {posts.length}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>Post Title: {post.title}</li>
        ))}
      </ul>
    </div>
  );
}
