import './index.css'
import book from "../Assets/Screenshot from 2024-07-09 11-09-18 1.png";
import { Link } from "react-router-dom";
import uber from "../Assets/Group 1.png";
import magezi from "../Assets/Group 5.png"

// import { useState } from "react";
// import Blogstwo from "../Blogstwo";
 

const Blogs = () => {
  // const [showDetails, setShowDetails] = useState(false);

  // const handleClick = () => {
  //   setShowDetails(true); 
  // };
  return (
    <div>
     
      
      <div className="blogs-section">
       <h1 id='blogs'>Blogs</h1>
        <h4 id='Read'>Read, get enlighted and learn</h4>
      </div>
      <div className="blog-details">
      <div className="blogs">
      <div>
      <img src={book} alt="Trevor Noah" className="books" />
      </div>
      <div className="book-section">
        <h4>Born A Crime</h4>
        <p>
          A book on the life of Trevor Noah
          <br />
          outlines,family,apartheid,love,
          <br />
          abuse,poverty and strength
        </p>
       
      </div>
      <div>
     {/* <button id="button" onClick={handleClick}>Read</button>{showDetails && <Blogstwo/>} */}
     <button className="buttons-one"><Link to="/Blogstwo">Read More</Link></button>
     </div>
     </div>
     
     
      <div className="blogs-one">
      <div>
      <img src={uber} alt="Trevor Noah" className="books" />
      </div>
      <div className="book-section">
        <h4>A case study on Uber</h4>
        <p>
          Uber has revolutionized mobility
          <br />
          by connecting riders wuth drivers
          <br />
          through a smartphone app
        </p>
       
      </div>
      <div>
     <button className="buttons-two">Read More</button>
     </div>
     
     </div>
     <div className="blogs-two">
      <div>
      <img src={magezi} alt="Magezi Group" className="books" />
      </div>
      <div className="book-section">
        <h4>A Description about Magezi</h4>
        <p>
          The name Magezi is inspired
          <br />
          by Luganda language from Uganda
          <br />
          which means wisdom
        </p>
       
      </div>
      <div>
     <button className="buttons-three">Read More</button>
     </div>
     
     </div>
     </div>
     </div>
    
  );
};
export default Blogs;