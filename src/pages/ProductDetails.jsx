import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getProductById } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = getProductById(id);


    if (!foundProduct) {
      navigate("/");
      return;
    }
    setProduct(foundProduct);
  }, [id, navigate]);
  if (!product) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-content">
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-price">${product.price}</p>
            <p>{product.description}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>);
}