import React from 'react';

export interface UserContextType {
  user: any; // Define the type of your user object here
  setUser: React.Dispatch<any>; // Define the type of your setUser function here
  userId: any; 
  setUserId: React.Dispatch<any>; 
  reRender:boolean;
  setReRender: React.Dispatch<any>;
  query:string;
  setQuery: React.Dispatch<any>;
}

const UserContext = React.createContext<UserContextType | null>(null);

export default UserContext;
