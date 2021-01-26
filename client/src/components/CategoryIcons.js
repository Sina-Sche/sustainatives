import { ReactComponent as Bamboo } from "../assets/icons/bamboo.svg";
import { ReactComponent as Travel } from "../assets/icons/travel.svg";
import { ReactComponent as Bathroom } from "../assets/icons/bathroom.svg";
import { ReactComponent as Gifts } from "../assets/icons/gift.svg";
import { ReactComponent as House } from "../assets/icons/household.svg";
import { ReactComponent as Ocean } from "../assets/icons/ocean.svg";
import { ReactComponent as Reuse } from "../assets/icons/reuse.svg";
import { ReactComponent as Tree } from "../assets/icons/tree.svg";
import BambooImg from "../assets/images/bamboo.jpg";
import TravelImg from "../assets/images/togo.jpg";
import BathroomImg from "../assets/images/bathroom.jpg";
import GiftImg from "../assets/images/gift.jpg";
import HouseholdImg from "../assets/images/household.jpg";
import OceanImg from "../assets/images/ocean.jpg";
import ReduceImg from "../assets/images/reduce.jpg";
import TreeImg from "../assets/images/tree.jpg";
import styled from "styled-components/macro";

const createCategoryIcon = (Icon) => styled(Icon)`
  width: 50px;
  height: 50px;
  fill: ${(props) =>
    props.$active ? "var(--icon-active-color)" : "var(--icon-inactive-color)"};
  + p {
    text-align: center;
    font-size: 0.8rem;
    margin: 2px;
    color: ${(props) =>
      props.$active
        ? "var(--icon-active-color)"
        : "var(--icon-inactive-color)"};
    font-weight: ${(props) => (props.$active ? "bold" : "none")};
  }
`;

const icons = {
  bamboo: {
    id: 1,
    icon: createCategoryIcon(Bamboo),
    label: "Bamboo",
    description:
      "There are several reasons, why products made out of bamboo count as sustainable: it is antibacterial, hypo-allergic, protective. Keeps gems and bacteria away. Also bamboo fiber protects against UV.One of the fastest growing plants. Matured without the help of insects or fertilizers. No chemicals attached! Another quality of bamboo products is that they are lasting! You will be enjoying them for long.",
    img: BambooImg,
    alt: "Bamboo",
  },
  travel: {
    id: 2,
    icon: createCategoryIcon(Travel),
    description:
      "All items that you can easily put into your backpack/purse fall into this category. They are sustainable alternatives for all the single-use plastics, etc.",
    img: TravelImg,
    label: "To go",
    alt: "Travel",
  },
  bathroom: {
    id: 3,
    icon: createCategoryIcon(Bathroom),
    description:
      "Especially in the bathroom, there are so many sources of microplastics, that can be avoided. Find sustainable products for your everyday hygiene and make the world a better place one small step at a time",
    img: BathroomImg,
    label: "Bathroom",
  },
  gifts: {
    id: 4,
    icon: createCategoryIcon(Gifts),
    description:
      "Need a gift for someone and not sure what to give them? Just filter through our diverse gift ideas and find something that is not only good for the person you want to gift it to, but also makes a small postive impact on our planet!",
    img: GiftImg,
    label: "Gifts",
  },
  household: {
    id: 5,
    icon: createCategoryIcon(House),
    description:
      "So many of our everyday products, that we use in our households could be replaced by sustainable alternatives. By reducing microplastics and avoiding chemicals, we can have a very positive impact on our environment.",
    img: HouseholdImg,
    label: "Household",
  },
  ocean: {
    id: 6,
    icon: createCategoryIcon(Ocean),
    description:
      "Do you have a specific interest in saving our oceans? We have a wide range of products that specifically support projects with the mission to clean and protect the oceans.",
    img: OceanImg,
    label: "Save our oceans",
  },
  reuse: {
    id: 7,
    icon: createCategoryIcon(Reuse),
    description:
      "This category has two different meanings: 1. Avoid single-use plastics and instead pick your favorite bottle, coffeecup, etc. here! 2. We also list all products within this category that are made from recycled materials, such as backpacks made out of ocean plastics, bracelets made out of ghost nets,etc...",
    img: ReduceImg,
    label: "Reuse(d)",
  },
  tree: {
    id: 8,
    icon: createCategoryIcon(Tree),
    description:
      "This has become a pretty common practice with sustainable companies. If you are specifically looking to plant a tree with the purchase of your product, then choose this category.",
    img: TreeImg,
    label: "Plant a tree",
  },
};

export default icons;
