import React, {useState, useEffect} from 'react'
import Axios from 'axios';

export default function Blog() {
    
    const url = ""
    const [blogs, setBlogs] = useState([])
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        fetch("https://hidden-mountain-30566.herokuapp.com/blog/get")
        .then((res) => res.json())
        .then((res) => setAllBlogs(res))
        .catch((error) => console.log("there was an error retrieving your data.", error));
      }, []);

    const renderAllBlogs = () => {
        return allBlogs.map((blog) => {
            return (
                <div>
                {blog.characters}
                </div>
            )
        })
    }

  return (
    <div>
        <form>
            <input placeholder="add blog" type="text"></input>
            <button>Submit</button>
        </form>
        {renderAllBlogs()}
    </div>
  )
}
