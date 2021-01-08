import { ReactComponent as Bamboo } from "../assets/icons/bamboo.svg";
import { ReactComponent as Travel } from "../assets/icons/travel.svg";
import { ReactComponent as Bathroom } from "../assets/icons/bathroom.svg";
import { ReactComponent as Gifts } from "../assets/icons/gift.svg";
import { ReactComponent as House } from "../assets/icons/household.svg";
import { ReactComponent as Ocean } from "../assets/icons/ocean.svg";
import { ReactComponent as Reuse } from "../assets/icons/reuse.svg";
import { ReactComponent as Tree } from "../assets/icons/tree.svg";
import Placeholder from "../assets/images/reduce.jpg";

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
    icon: createCategoryIcon(Bamboo),
    label: "Bamboo",
    description:
      "There are several reasons, why products made out of bamboo count as sustainable:t is antibacterial, hypo-allergic, protective. Keeps gems and bacteria away. Also bamboo fiber protects against UV.One of the fastest growing plants. Matured without the help of insects or fertilizers. No chemicals attached! Another quality of bamboo products is that they are lasting! You will be enjoying them for long.",
    img: Placeholder,
    alt: "Bamboo",
  },
  travel: { icon: createCategoryIcon(Travel), label: "To go", alt: "Travel" },
  bathroom: { icon: createCategoryIcon(Bathroom), label: "Bathroom" },
  gifts: { icon: createCategoryIcon(Gifts), label: "Gifts" },
  household: { icon: createCategoryIcon(House), label: "Household" },
  ocean: { icon: createCategoryIcon(Ocean), label: "Save our oceans" },
  reuse: { icon: createCategoryIcon(Reuse), label: "Reuse(d)" },
  tree: { icon: createCategoryIcon(Tree), label: "Plant a tree" },
};

export default icons;
