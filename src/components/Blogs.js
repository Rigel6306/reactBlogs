
import {useState} from 'react';
import List from './List';

const Blogs = () => {

    const [blogs,setBlogs] = useState(
        [
            {   id:1,
                title:"weather",
                author:"Shanaka",
                content:"Lorem ipsum dolor sit amet consecteturadipisicing n inventore quis esse, voluptatem, "
            },
            {   id:2,
                title:"Health",
                author:"Manoj",
                content:"Lorem ipsum dolor sit amet consecteturadipisicing n inventore quis esse, voluptatem, "
            },
            {   id:3,
                title:"Computers",
                author:"Navodya",
                content:"Lorem ipsum dolor sit amet consecteturadipisicing n inventore quis esse, voluptatem, "
            }
        ]
    )

    const handleClick = (id)=>{
        const filterdBlogs = blogs.filter((blog)=>blog.id!==id)
        console.log(filterdBlogs)
        setBlogs(filterdBlogs)
    }
    return (
        <div className="blogContainer">
            <div  className="blogHeading">
                <h1>Web Dev Blogs</h1>
            </div>
            <List blogs={blogs} myName="charitha" handleClick={handleClick } />
        </div>
     );
}


 
export default Blogs;