import {useState} from 'react'

const List = ({blogs, myName, handleClick}) => {



    return ( 

<>
    {blogs.map((blog,index)=>{
            return(
            <div className="blogBody" key={blog.id}>
                <div className="title"> {blog.title} <h3></h3> </div>
                <div className="author"> <h4>{blog.author}</h4> </div>
                <div className="content">
                    <p>{blog.content}</p>
                </div>
                <button onClick={()=>{handleClick(blog.id)}} >Change Author</button>
            </div>

            )
      })}
</>
     );
}
 
export default List;