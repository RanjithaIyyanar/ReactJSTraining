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

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, cloudinaryImageId, costForTwo, sla, avgRating } =
      resData?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="res-logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines?.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} mins</h4>
        {/* <h4>{resData?.info?.avgRating}</h4>
        <h4>{resData?.info?.costForTwo}</h4>
        <h4>{resData?.info?.sla?.deliveryTime} mins</h4>{" "} */}
      </div>
    );
  };

  const resList = [
    {
      info: {
        id: "523613",
        name: "Burger King",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        locality: "Lulu Mall",
        areaName: "LuLu Mall",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.3,
        parentId: "166",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 40,
          lastMileTravel: 3.6,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "3.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-27 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-ce70cd13-b2b2-4df6-ac35-7f65ac4e02a0",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/burger-king-lulu-mall-thiruvananthapuram-523613",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "429782",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Lulu Mall",
        areaName: "Kumarapuram",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.3,
        parentId: "721",
        avgRatingString: "4.3",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 38,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-27 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-ce70cd13-b2b2-4df6-ac35-7f65ac4e02a0",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/pizza-hut-lulu-mall-kumarapuram-thiruvananthapuram-429782",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "454138",
        name: "Starbucks Coffee",
        cloudinaryImageId: "182191ab163770437b62861a6f987709",
        locality: "Kochuveli",
        areaName: "Kumarapuram",
        costForTwo: "₹400 for two",
        cuisines: [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream",
        ],
        avgRating: 4.4,
        parentId: "195515",
        avgRatingString: "4.4",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-27 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-ce70cd13-b2b2-4df6-ac35-7f65ac4e02a0",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/starbucks-coffee-kochuveli-kumarapuram-thiruvananthapuram-454138",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "433683",
        name: "7th Heaven",
        cloudinaryImageId: "ki0t9puuayllkatgp4pb",
        locality: "Janatha Business Centre",
        areaName: "Kazhakkoottam",
        costForTwo: "₹200 for two",
        cuisines: ["Desserts", "Burgers", "Ice Cream", "Pizzas"],
        avgRating: 4.2,
        veg: true,
        parentId: "19",
        avgRatingString: "4.2",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 58,
          lastMileTravel: 10.1,
          serviceability: "SERVICEABLE",
          slaString: "55-60 mins",
          lastMileTravelString: "10.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-27 21:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-ce70cd13-b2b2-4df6-ac35-7f65ac4e02a0",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/7th-heaven-janatha-business-centre-kazhakkoottam-thiruvananthapuram-433683",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "751799",
        name: "Crumbs",
        cloudinaryImageId: "80d3024589ed6aefeb518b810af4d4cd",
        locality: "Venpalavattom",
        areaName: "Technopark",
        costForTwo: "₹200 for two",
        cuisines: ["Bakery", "Desserts"],
        veg: true,
        parentId: "66374",
        avgRatingString: "NEW",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 0.3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "0.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-27 19:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-ce70cd13-b2b2-4df6-ac35-7f65ac4e02a0",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/crumbs-venpalavattom-technopark-thiruvananthapuram-751799",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
  ];

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {resList.map((resObj) => (
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
