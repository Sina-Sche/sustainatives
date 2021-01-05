import useStorage from "./useStorage";
import Swal from "sweetalert2";
import { getProductById } from "../utils/api";

const useFavorites = () => {
  const [favorites, setFavorites] = useStorage("favorites", []);

  const toggleFavorite = async (favorite) => {
    const isFavorite = favorites.includes(favorite);
    let newFavorites;

    const filterFavorites = () => {
      newFavorites = favorites.filter(
        (existingFavorite) => existingFavorite !== favorite
      );
      return newFavorites;
    };

    const confirmDelete = async (favorite) => {
      const product = await getProductById(favorite);
      const productName = product.display_title;
      console.log(productName);
      const result = await Swal.fire({
        title: `Remove ${productName} from your Favorites?`,
        background: "var(--primary-color)",
        width: "75%",
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: "var(--secondary-color)",
        cancelButtonColor: "var(--secondary-color)",
        confirmButtonText: "Yes, remove.",
        cancelButtonText: "No, go back.",
      });
      return result;
    };

    if (isFavorite) {
      const id = favorite;
      const result = await confirmDelete(id);
      if (result.isConfirmed) {
        newFavorites = filterFavorites();
        setFavorites(newFavorites);
      }
    } else {
      newFavorites = [...favorites, favorite];
      setFavorites(newFavorites);
    }
  };
  return { favorites, setFavorites, toggleFavorite };
};

export default useFavorites;
