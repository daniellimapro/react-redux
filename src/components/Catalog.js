import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import api from "../services/api";
import { addProductToCart } from "../store/modules/cart/actions";

const Catalog = () => {
  const [catalog, setCatalog] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  const handleAddProductToCart = useCallback(
    (product) => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );

  return (
    <>
      <h1>Catalog</h1>
      {catalog.map((product) => (
        <p key={product.id}>
          {product.title}, <b>{product.price}</b>{" "}
          <button type="button" onClick={() => handleAddProductToCart(product)}>
            Comprar
          </button>
        </p>
      ))}
    </>
  );
};

export default Catalog;
