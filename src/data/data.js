import grocery from "../assets/category/grocery.jpg";
import kitchen from "../assets/category/kitchen.jpg";
import office from "../assets/category/office.jpg";
import cleaning from "../assets/category/cleaning.jpg";
//
import oxiclean from "../assets/products/oxiclean.jpg";
import libman from "../assets/products/libman.jpg";
import newmans from "../assets/products/newmans.jpg";
import nivea from "../assets/products/nivea.jpg";
import glad from "../assets/products/glad.jpg";

export const explore = {
  categoryHeadline: "Search by category",
  categories: [
    {
      title: "Grocery",
      image: grocery
    },
    {
      title: "Office Supplies",
      image: office
    },
    {
      title: "Kitchen Items",
      image: kitchen
    },
    {
      title: "Cleaning Supplies",
      image: cleaning
    }
  ]
};
export const trendingItems = {
  headline: "Trending Products",
  items: [
    {
      name: 'Libman 990 Big Wonder Twist Mop 50"',
      image: libman,
      lowestPrice: "$13.99",
      size: '50"'
    },
    {
      name: "Oxi Clean Versatile Stain Remover - 11.6 lbs",
      image: oxiclean,
      lowestPrice: "$14.99",
      size: "11.6 lbs"
    },
    {
      name: "Glad Febreze freshness Tall Kitchen Drawstring Bags - 140 ct",
      image: glad,
      lowestPrice: "$15.99",
      size: "140 ct"
    },
    {
      name: "Newman's Own Balsamic Vinaigrette - 16oz bottle",
      image: newmans,
      lowestPrice: "$1.99",
      size: "16 oz"
    },
    {
      name: "Nivea Extended Moisture Body Lotion - 16.9 fl oz",
      image: nivea,
      lowestPrice: "$8.99",
      size: "16.9 fl oz"
    }
  ]
};
