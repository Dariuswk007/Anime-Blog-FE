import React, {useState, useEffect} from 'react'

export default function Blog() {

    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        fetch("https://hidden-mountain-30566.herokuapp.com/user/get")
        .then((res) => res.json())
        .then((res) => setAllUsers(res))
        .catch((error) => console.log("there was an error retrieving your data.", error));
      }, []);

    const renderAllUsers = () => {
        return allUsers.map((user) => {
            return (
                {user,username, password}
            )
        })
    }

  return (
    <div>
        BLOGS
    </div>
  )
}
