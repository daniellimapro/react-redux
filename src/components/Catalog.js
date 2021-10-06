import { useSelector } from "react-redux";

const Catalog = () => {
  const catalog = useSelector((state) => state);

  return <h1>{catalog.name}</h1>;
};

export default Catalog;
