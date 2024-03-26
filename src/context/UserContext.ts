import React, { SetStateAction , Dispatch} from 'react';

export interface UserContextType {
  user: any; // Define the type of your user object here
  setUser: Dispatch<any>; // Define the type of your setUser function here
  userId: string | null; 
  setUserId: Dispatch<SetStateAction<string | null>>
  reRender:boolean;
  setReRender: Dispatch<SetStateAction<boolean>>;
  query:string;
  setQuery: Dispatch<SetStateAction<string>>;
}

const UserContext = React.createContext<UserContextType | null>(null);

export default UserContext;
