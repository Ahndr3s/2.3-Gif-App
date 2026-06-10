import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { SearchBar } from "./shared/components/SearchBar";
import { GifList } from "./gifs/components/GifList";
import { useGifs } from "./counter/hooks/useGifs";

export const GifsApp = () => {
  const { currentGifs, previousSearches, handleSearch, HandleLabelClick } =
    useGifs();

  return (
    <>
      {/* header */}
      <CustomHeader
        title={"Buscador de Gifs"}
        subtitle={"Busca y comparte el gif perfecto"}
      />

      {/* Search */}
      <SearchBar placeholder={"Busca lo que quieras"} onSearch={handleSearch} />

      {/* Previous searches */}
      <PreviousSearches
        title="Previous Searches"
        // searches={["2B", "Rei", "Rogue", "Fischl"]}
        searches={previousSearches}
        onLabelClicked={HandleLabelClick}
      />

      {/* Gifs */}
      <GifList gifs={currentGifs} />
    </>
  );
};
