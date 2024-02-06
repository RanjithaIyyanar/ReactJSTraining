import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
   return (
       <div className="header">
               <img
           src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
           alt="logo" width={100} height={100} />          

           <ul className="nav-Items">
               <li>About Us</li>
               <li>Contact</li>
           </ul>
       </div>
      
   )
}

const RestaurantCard = () =>{
   return (
       <div>
           <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ygwskis4ogmqgafbusb1"
           alt="" />
           <p>Shree Mithai</p>
           <p>4.6</p>
           <p>Desserts</p>
       </div>
   )
}

const Body = () =>{
   return (
   <div className="body">
       <div className="search">Search :</div>
       <div className="res-container">
           <RestaurantCard/>
       </div>
   </div>
   );
}

const AppLayout = () => {
   return (
   <div className = "container">
       <Header/>
       <Body/>
   </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

