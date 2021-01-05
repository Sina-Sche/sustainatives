import InfoBox from "./InfoBox";

const SearchResult = ({ filterData, toggleFavorite, favorites }) => {
  return filterData.map((product) => {
    return (
      <InfoBox
        key={product._id}
        size={"small"}
        {...product}
        onClick={() => toggleFavorite(product.id)}
        isFavorite={favorites.includes(product.id)}
      />
    );
  });
};

export default SearchResult;
