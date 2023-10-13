import SearchBar from "./Searchbar";
import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
export default function HeaderBottom() {
  return (
    <div className="bg-white text-black pt-8">
      <div className="ml-20 pl-4 flex flex-row">
        <span className="pr-20">
          <h1>ROCHEL HAIR</h1>
        </span>
        <SearchBar />
        <h3 className="flex flex-row ml-auto pr-20">
          <TfiLocationPin className="mr-2" />
          Moscou
          <span className="ml-5 pl-5 flex flex-row">
            8-800-777-49-67
            <span className="flex flex-row ml-4 pl-4">
              <AiOutlineHeart className="mr-4" />
              <BsCart3 />
              <h4 className="flex flex-col ml-2">
                0 ₽.
                <span className="text-yellow-300">panier</span>
              </h4>
            </span>
          </span>
        </h3>
      </div>
    </div>
  );
}
