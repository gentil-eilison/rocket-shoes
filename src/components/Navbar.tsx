import tennisShoe from "../assets/logo.svg";
import shoppingBag from "../assets/icon-bag.svg";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-center p-4 absolute w-full gap-32">
      <img src={tennisShoe} alt="A red tennis shoe" />

      <ul className="list-none flex flex-row gap-24 font-bold items-center">
        <li className="hover:cursor-pointer">HOMEM</li>
        <li className="hover:cursor-pointer">MULHER</li>
        <li className="hover:cursor-pointer">CRIANÇA</li>
        <li className="hover:cursor-pointer">CUSTOMIZAR</li>
      </ul>

      <div className="flex flex-row justify-between">
        <input
        className="w-48 p-2 focus:outline-none"
          type="search"
          name="tennisQuery"
          id="tennisquery"
          placeholder="Pesquisar"
          aria-label="Search box for querying tennis"
          results={0}
        />

        <a href="#">
          <img src={shoppingBag} alt="A dark shopping bag" className="ml-5"/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
