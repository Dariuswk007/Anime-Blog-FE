import React, {useState, useEffect} from 'react'
import image1 from '../images/attack on titan.jpg'
import image2 from '../images/demon-slayer.png'
import image3 from '../images/FMA-Brotherhood.jpg'
import image4 from '../images/summertime-rendering.jpg'
import image5 from '../images/engage-kiss.jpg'
import image6 from '../images/spyxfamily.jpg'

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
                <button onClick={() => deleteBlog(blog.id)}>Delete</button>
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

const deleteBlog = (id) => {
    fetch(`https://hidden-mountain-30566.herokuapp.com/blog/delete/${id}`, {
        method: 'DELETE'})
    .then((res) => res.json())
    .then((res) => console.log(res))
}

  return (
    <div className="form-image-wrapper">
       
        <div className="image-container">
        <img className="attack-on-titan-img" src={image1} alt='attack on titan'></img>
        <img classname="demon-slayer-img" src={image2} alt='demon slayer'></img>
        <img classNme="fma-img" src={image3} alt='fullmetal alchemist brotherhood'></img>
        <img className="summertime-rendering-img"src={image4} alt='summertime rendering'></img>
        <img className="engage-kiss-img" src={image5} alt='engage kiss'></img>
        <img className="spy-family-img"src={image6} alt='spy x family'></img>
        </div>

        <div>
            {renderAllBlogs()} 
            <form className="form-container" onSubmit={createBlog}>
                <input onChange={(e) => setCharacters(e.target.value)} placeholder="what are your thoughts?" type="text" value={characters}></input>
                <button>Submit</button>
            </form>
        </div>

       
    </div>
  )
}
