import { ChevronDown, SearchIcon, ShoppingCart, X, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import category from "./category";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const SlideRight = () => setIsOpen(true);
  const SlideLeft = () => setIsOpen(false);
  const [user, setUser] = useState();
  const [srchdwn, setSrchdwn] = useState(true)
  const [searchQuery, setSearchQuery] = useState([
    "mens-shirts",
    "womens-dresses",
    "sneakers-for-men",
    "kids-clothing",
    "accessories-for-women",
    "smartphones",
    "laptops-computers",
    "headphones",
    "smart-watches",
    "home-appliances",
    "furniture",
    "lighting",
    "home-decor",
    "kitchenware",
    "bedding",
    "skincare",
    "makeup-products",
    "haircare",
    "beauty-tools",
    "perfumes",
    "mens-shoes",
    "womens-sneakers",
    "boots-for-women",
    "kids-shoes",
    "sports-footwear",
    "mens-watches",
    "womens-watches",
    "leather-accessories",
    "bags-for-women",
    "travel-accessories",
    "gym-equipment",
    "activewear",
    "yoga-mats",
    "running-shoes",
    "fitness-accessories",
    "handbags",
    "backpacks",
    "suitcases",
    "travel-gear",
    "messenger-bags",
    "educational-toys",
    "fun-toys",
    "baby-products",
    "outdoor-play-equipment",
    "childrens-books",
    "holiday-specials",
    "limited-offers",
    "new-arrivals",
    "trending-now",
    "seasonal-decorations",
    "mens-fragrances",
    "womens-fragrances",
    "perfume-gift-sets",
    "body-sprays",
    "cologne",
    "cookware",
    "utensils",
    "storage-containers",
    "coffee-makers",
    "blenders"
  ]);

  useEffect(() => {
    const profile = localStorage.getItem("Profile");
    if (profile) {
      setUser(JSON.parse(profile));
    }
  }, []);
  const Handlename = (e) => {
    setName(e.target.value);
    setSrchdwn(true)
  };

  const filteredItems = searchQuery.filter((item) =>
    item.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <header className="w-full relative">
      <section className="flex justify-center items-center poppins-regular h-[2vh] bg-[#032a5d] text-blue-200 max-w-[100vw] text-[10px] sm:text-sm">
        Free shipping upto Rs.300
      </section>

      {/* Logo section */}
      <section className="flex justify-between w-full z-50 sticky top-0 left-0 items-center px-2 sm:px-11 bg-[#032a5d] sm:h-[10vh] h-[5vh] ">
        <Link to={"/"}>
          <img className="sm:h-12 h-7 cursor-pointer" src="/logo.jpg" alt="logo" />
        </Link>
        <div className="input w-[40%] h-fit relative flex items-center justify-center">
          <input
            onChange={Handlename}
            className="bg-white  sm:w-[80%] sm:text-[16px] text-[10px] sm:p-3 p-1 poppins-regular focus:outline-none"
            type="text"
            placeholder="Search in Luxora"
          />
          <Link to={`/search/${name}`}>
            <button onClick={()=>setSrchdwn(false)} className="p-1 sm:p-3 flex justify-center items-center cursor-pointer bg-blue-200">
              <SearchIcon className="text-[#032a5d] w-[15px] sm:w-[25px] sm:h-[25px] h-[15px]" />
            </button>
          </Link>

          {/*Input Dropdown*/}
          {name &&srchdwn&& (
            <div className="w-full max-h-[40vh] min-h-fit bg-white absolute left-0 top-[100%] px-2 sm:px-5 ">
              <div className="sm:h-10 h-5 flex items-center justify-between ">
                <span className="sm:text-sm text-[10px] text-gray-400">Related Search</span>
              </div>
              <ul className="sm:py-2 py-1 w-full flex flex-col sm:gap-3 gap-1">
                {name &&
                  filteredItems.map((item, index) => (
                    <Link to={`/search/${item}`}>
                    <li className="text-[12px]" onClick={()=>setSrchdwn(false)} key={index}>{item}</li>
                    </Link>
                  ))}
              </ul>
            </div>
          )}
        </div>
        <div className="h-full gap-2 sm:gap-4 justify-end flex items-center relative">
          <Link to={"/cart"}>
            <ShoppingCart className="text-white cursor-pointer w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]" />
          </Link>
          {!user ? (
            <Link to={"/login"}>
              <button className="border-white border-1 sm:border-2 cursor-pointer text-[10px] sm:text-sm font-regular text-white rounded-sm sm:py-2 py-1 sm:px-3 px-2 hover:bg-blue-700 transition duration-300">
                Login
              </button>
            </Link>
          ) : (
            <div
              onClick={SlideRight}
              className="h-full justify-end flex items-center relative"
            >
              <div className="p-3 bg-blue-500 rounded-full">
                <User className="text-white" />
              </div>
            </div>
          )}

          <div
            className={`h-fit min-h-20 w-[400px] bg-white flex flex-col p-5 items-center justify-center absolute z-50 top-0 right-0 transition-transform
            ${isOpen ? "translate-x-0 block" : "translate-x-full hidden"}`}
          >
            <div className="heading text-2xl w-full relative h-60 z-100 font-semibold flex flex-col gap-2 justify-center items-center">
              <div
                onClick={SlideLeft}
                className=" rounded-full cursor-pointer absolute left-5 top-5"
              >
                <X className=" text-black" />
              </div>
              <div className="p-3 bg-blue-500 rounded-full mt-4">
                <User size={80} className="text-white" />
              </div>
              <div>{user && user[0]}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Drop Down */}
      <section className="sm:h-[4vh] h-[2vh] w-full flex items-center justify-start px-2 gap-2 sm:px-11 sm:gap-15 bg-[#032a5d]">
        {category.map((category, index) => {
          return (
            <div key={index}>
              <ul className="mendropdown relative w-fit h-[2vh] sm:h-[4vh] font-light flex items-center text-white cursor-pointer hover:text-[#d5e5fa] group">
                <li className="Menbutton text-[9px] sm:text-[9px] md:text-[15px]">{category.name}</li>
                <li>
                  <ChevronDown className="sm:w-[15px] sm:h-[15px] w-[8px] h-[8px]"  />
                </li>
                <div className="drop_menu hidden group-hover:block z-40 absolute top-[100%] left-0 w-[200px] h-fit min-h-10 bg-white p-6 text-[#032a5d] shadow transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <ul className="flex flex-col gap-3">
                    {category.subcategories.map((item, index) => (
                      <Link key={index} to={`/search/${item}`}>
                        <li className="text-[10px] sm:text-[17px] p-1">{item}</li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </ul>
            </div>
          );
        })}
      </section>
    </header>
  );
};

export default Navbar;
