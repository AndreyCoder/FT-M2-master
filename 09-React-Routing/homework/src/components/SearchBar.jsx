import React, { useState } from "react";

export default function SearchBar({ onSearch }) {

  const [city, setCity] = useState("");

  const handleInput = (e) => {
    setCity(e.target.value)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={handleInput}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
