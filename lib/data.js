import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";

// Navigation
const menuItems = [
  { page: "Home", path: "/" },
  { page: "Services", path: "/services" },
  { page: "About Us", path: "/about" },
  { page: "Newsletter", path: "/newsletter" },
  { page: "Contact", path: "/contact" },
];

// Home
const words = [
  { text: "ANY SIZE", delay: 0.5 },
  { text: "ANY SHAPE", delay: 1 },
  { text: "ANY WHERE", delay: 1.5 },
];

// Packing Machine
const cards = [
  {
    title: "Versatile",
    body: "Adjust results with this multifunctional machine; it packages any size or shape pre-roll, offering adaptability and varied functions",
    icon: faPuzzlePiece,
  },
  {
    title: "Portable",
    body: "Compact and sleek, our machine takes up no more space than a laptop, providing you with convenience, layout flexibility, and cost-effectiveness",
    icon: faSuitcaseRolling,
  },
  {
    title: "User Friendly",
    body: "Operation is intuitive, requiring minimal to no training, making it accessible and user-friendly for everyone",
    icon: faThumbsUp,
  },
  {
    title: "Highly Efficient",
    body: "Produces perfectly packed pre-rolls quickly and easily",
    icon: faBoltLightning,
  },
];

module.exports = { words, menuItems, cards };
