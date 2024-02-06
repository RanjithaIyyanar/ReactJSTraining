import logo from './logo.svg';
import './App.css';

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
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
const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

export default App;
