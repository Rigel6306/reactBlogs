import '../css/nav.css'
const Navigation = () => {
    return ( 
        <div className="navContainer">
           <h1>WebDev Blog</h1>
           <div className="linkContainer">
            <a href="home">Home</a>
            <a href="home">New Blog</a>
            <a href="home">Blog List</a>
           </div>
        </div>
      );
}
 
export default Navigation;