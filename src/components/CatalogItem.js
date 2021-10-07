import { useDispatch, useSelector } from "react-redux";
import { addProductToCartRequest } from "../store/modules/cart/actions";
import { useCallback } from "react";

const CatalogItem = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector((state) => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <p>
      {product.title}, <b>{product.price}</b>{" "}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
      {hasFailedStockCheck && "produto sem estoque"}
    </p>
  );
};

export default CatalogItem;
