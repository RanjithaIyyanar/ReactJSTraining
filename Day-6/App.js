import { useState } from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "./utils/constants";
import { resList } from "./utils/mockData";

// const Header = () => {
//    return (
//        <div className="header">
//                <img
//            src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
//            alt="logo" width={100} height={100} />          

//            <ul className="nav-Items">
//                <li>About Us</li>
//                <li>Contact</li>
//            </ul>
//        </div>
      
//    )
// }

// const RestaurantCard = (props) => {
//     const { resData } = props;
//     const { name, cuisines, cloudinaryImageId, costForTwo, sla, avgRating } =
//       resData?.info;
//     return (
//       <div className="res-card">
//         <img
//           className="res-logo"
//           src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
//           alt="res-logo"
//         />
//         <h3>{name}</h3>
//         <h4>{cuisines?.join(",")}</h4>
//         <h4>{avgRating}</h4>
//         <h4>{costForTwo}</h4>
//         <h4>{sla?.deliveryTime} mins</h4>
//         {/* <h4>{resData?.info?.avgRating}</h4>
//         <h4>{resData?.info?.costForTwo}</h4>
//         <h4>{resData?.info?.sla?.deliveryTime} mins</h4>{" "} */}
//       </div>
//     );
//   };


// const Body = () => {
//     return (
//       <div className="body">
//         <div className="search">Search</div>
//         <div className="res-container">
//           {resList.map((resObj) => (
//             <RestaurantCard resData={resObj} />
//           ))}
//         </div>
//       </div>
//     );
//   };

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png" 
          width="200"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, costForTwo, sla, avgRating } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`${CDN_URL}/${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};



const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  let listOfRestaurantsJS = [
    {
      info: {
        id: "523613",
        name: "Burger King",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.3,
        sla: {
          deliveryTime: 40,
        },
      },
    },
    {
      info: {
        id: "523612",
        name: "KFC",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 3.3,
        sla: {
          deliveryTime: 40,
        },
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //  filter logic here
            // listOfRestaurants = listOfRestaurants.filter(
            //   (res) => res.info.avgRating > 4
            // );
            // console.log("listOfRestaurants", listOfRestaurants);
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info?.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resObj) => (
          <RestaurantCard resData={resObj} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
    return (
      <div className="app">
        <Header /> 
        <Body />
      </div>
    );
  };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
