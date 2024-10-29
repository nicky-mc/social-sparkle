
// /src/app/pages/newsfeed.js
import { useState, useEffect } from 'react';
import { useClerk, useUser } from '@clerk/nextjs';
import axios from 'axios';

export default function NewsFeed() {
  const [posts, setPosts] = useState([]);
  const { signOut } = useClerk();
  const { user } = useUser();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get('/api/explore/trending');
        setPosts(data.trending);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed-container">
      <h1>Welcome to Your News Feed, {user?.firstName}</h1>
      <button onClick={() => signOut()}>Sign Out</button>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>Likes: {post.engagement_score}</p>
        </div>
      ))}
    </div>
  );
}
