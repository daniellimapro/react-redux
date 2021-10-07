import { useEffect, useState } from "react";
import api from "../services/api";

const Catalog = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <>
      <h1>Catalog</h1>
      {catalog.map((product) => (
        <p key={product.id}>
          {product.title}, <b>{product.price}</b>{" "}
          <button type="button">Comprar</button>
        </p>
      ))}
    </>
  );
};

export default Catalog;
