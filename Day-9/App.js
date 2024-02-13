
import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { LOGO_URL } from "./utils/constants";
import { CDN_URL } from "./utils/constants";
import { SWIGGY_URL } from "./utils/constants";
import Error from "./components/erroe";
import Contact from "./components/contact";
import About from "./components/about";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartPlus } from "@fortawesome/fontawesome-free-solid";

import { Link } from "react-router-dom";
import { LOGO_SWIGGY } from "./utils/constants";


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

const Title = () => (
  <a href="/">
    <img className="logo" src={LOGO_SWIGGY} alt="Food Fire Logo" />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="location">
            <p>Setup your precise location</p><i></i>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>
            {/* <FontAwesomeIcon icon={faCartPlus} /> */}
          </li>
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
              <Link
                to={`/restaurants/${resObj?.info?.id}`}
                key={resObj?.info?.id}
                className="restaurant-link"
              >
                <RestaurantCard resData={resObj} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${SWIGGY_MENU_URL}/${resId}`);
    const jsonData = await data.json();
    setRestaurantInfo(jsonData?.data);
  };

  console.log("restaurantData", restaurantInfo);

  if (restaurantInfo === null) {
    return <Shimmer />;
  }
  const { name, areaName, cuisines, sla, avgRating } =
    restaurantInfo?.cards[0]?.card?.card?.info;
  const itemsCards =
    restaurantInfo?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  console.log("itemsCards", itemsCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <p>{areaName}</p>
      <p>{`${sla?.deliveryTime}mins ${avgRating}stars`}</p>
      <h1>Menu</h1>
      <ul>
        {itemsCards?.map((itemCard) => (
          <li>{itemCard?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
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
      <Outlet />
      <Footer />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/", //root route
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={appRouter}>
    <AppLayout />
  </RouterProvider>
);
