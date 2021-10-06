import { useSelector } from "react-redux";

const Catalog = () => {
  const cart = useSelector((state) => state);
  console.log(cart);

  return <h1>Redux</h1>;
};

export default Catalog;
