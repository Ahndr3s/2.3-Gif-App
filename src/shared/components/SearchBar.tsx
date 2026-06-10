import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  placeholder: string;
  onSearch: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar", onSearch }: Props) => {
  const [query, setQuery] = useState("");

  //   Implementacion de Debounce: Timer que dispara la funcion onSeacrh
  //   despues de 0.7seg de inactividad
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(query);
      setQuery("");
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onSearch]);

  const handleQuery = () => {
    onSearch(query);
    setQuery("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleQuery();
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleQuery}>Buscar</button>
    </div>
  );
};
