import React, {useState, useEffect} from 'react'
import Axios from 'axios';

export default function Blog() {
    
    const [characters, setCharacters] =useState("")
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        fetch("https://hidden-mountain-30566.herokuapp.com/blog/get")
        .then((res) => res.json())
        .then((res) => setAllBlogs(res))
        .catch((error) => console.log("there was an error retrieving your data.", error));
      }, [allBlogs]);

    const renderAllBlogs = () => {
        return allBlogs.map((blog) => {
            return (
                <div>
                {blog.characters}
                </div>
            )
        })
    }

const createBlog = (e) => {
    e.preventDefault();
    fetch("https://hidden-mountain-30566.herokuapp.com/blog/add", {
        method: 'POST',
        body: JSON.stringify({
            characters:characters,
            user_fk: 1
        }),
        headers: {
            "Content-type": "application/json; charset-UTF-8",
        },
    })
        .then((res) => res.json())
        .then((res) => console.log(res));
        setCharacters("");
}

  return (
    <div>
        <form onSubmit={createBlog}>
            <input onChange={(e) => setCharacters(e.target.value)} placeholder="add blog" type="text" value={characters}></input>
            <button>Submit</button>
        </form>
        {renderAllBlogs()}
    </div>
  )
}
