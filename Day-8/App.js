import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "./utils/constants";
import { SWIGGY_URL } from "./utils/constants";

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
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getData = async () => {
    try {
      const data = await fetch(SWIGGY_URL);
      const json = await data.json();
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error("err", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // Conditional rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      {listOfRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body">
          <div className="filter">
            <div className="search">
              <input
                type="text"
                className="search-box"
                value={searchText}
                // e is a callback method
                onChange={(e) => setSearchText(e?.target?.value)}
              />
              <button
                onClick={() => {
                  // filter the cards
                  setFilteredRestaurants(
                    listOfRestaurants.filter((res) =>
                      res.info?.name
                        ?.toLowerCase()
                        .includes(searchText.toLowerCase())
                    )
                  );
                }}
              >
                Search
              </button>
            </div>
            <button
              className="filter-btn"
              onClick={() => {
                setListOfRestaurants(
                  listOfRestaurants.filter((res) => res.info?.avgRating > 4)
                );
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
          <div className="res-container">
            {filteredRestaurants.map((resObj) => (
              <RestaurantCard resData={resObj} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
    </div>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href="" target="_blank">
        Priya Sharma
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Food<span>App</span>
      </strong>
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
