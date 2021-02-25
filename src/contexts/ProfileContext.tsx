import { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from '../services/api';


interface ProfileProviderProps {
  children: ReactNode;
}

interface ProfileContextData {
  name: string;
  login: string;
  bio: string;
  avatar: string;
  // stars: number;
  following: number;
  followers: number;
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [name, setName] = useState();
  const [login, setLogin] = useState();
  const [avatar, setAvatar] = useState();
  const [bio, setBio] = useState();
  // const [stars, setStars] = useState();
  const [following, setFollowing] = useState();
  const [followers, setFollowers] = useState();

  async function getDataApi() {
    const response = await api.get(`https://api.github.com/users/cauas1`);
    console.log(response.data); 

    setName(response.data.name);
    setAvatar(response.data.avatar_url);
    setLogin(response.data.login);
    setBio(response.data.bio);
    setFollowers(response.data.followers);
    setFollowing(response.data.following);

  }

  useEffect(() => {
    getDataApi();
  }, []);

  return (
    <ProfileContext.Provider value={{
      name,
      login,
      avatar,
      bio,
      followers,
      following
    }}>
      {children}
    </ProfileContext.Provider>
  )
}