import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/modules/cart/actions";
import { useCallback } from "react";

const CatalogItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <p>
      {product.title}, <b>{product.price}</b>{" "}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </p>
  );
};

export default CatalogItem;
