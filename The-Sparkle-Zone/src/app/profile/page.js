
// /src/app/pages/profile.js
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';

export default function Profile() {
  const [profile, setProfile] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(`/api/profile?userId=${user.id}`);
        setProfile(data.profile);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    const fetchUserPosts = async () => {
      try {
        const { data } = await axios.get(`/api/posts?userId=${user.id}`);
        setUserPosts(data.posts);
      } catch (error) {
        console.error("Error fetching user posts:", error);
      }
    };

    fetchProfile();
    fetchUserPosts();
  }, [user.id]);

  return (
    <div className="profile-page">
      <h1>{user?.firstName}'s Profile</h1>
      <img src={profile.profile_picture_url} alt="Profile" />
      <p>Bio: {profile.bio}</p>
      <h2>Your Posts</h2>
      {userPosts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
