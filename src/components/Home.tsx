"use client"

import UserContext, { UserContextType } from "@/context/UserContext";
import { retrieveUserId } from "@/lib/retrieveUserId"
import { useContext, useEffect, useState } from "react"
import TopicsList from "./TopicsList/TopicsList";

function HomePage() {
    const { user, setUserId } = useContext(UserContext as React.Context<UserContextType>);

    useEffect(() => {
        async function fetchCurrentUser() {
            try {
                const id = await retrieveUserId();
                if (id !== undefined && id !== null) {
                    setUserId(id);
                }
            } catch (error) {
                console.error("Error fetching current user:", error);
            }
        }
    fetchCurrentUser()

    return () => {
        setUserId(null)
    };
    }, [])


  return (
    <div className=" px-5" >
      <TopicsList/>
    </div>
  )
}

export default HomePage
