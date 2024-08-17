import React from "react";
import Input from "../atom/Input";
import Button from "../atom/Button";
import { FiSearch } from "react-icons/fi";

function Search(props) {
  const { onSubmit = () => {}, onChange = () => {} } = props;
  return (
    <form onSubmit={onSubmit} action="submit" className="flex gap-4">
      <Input onChange={onChange} placeholder="Masukkan Movie" />
      <Button
        type="submit"
        className="hidden sm:block bg-blue-500 hover:bg-blue-700 text-white "
      >
        Search
      </Button>
      <Button
        type="submit"
        className="block sm:hidden bg-blue-500 hover:bg-blue-700 text-white "
      >
        <FiSearch />
      </Button>
    </form>
  );
}

export default Search;
