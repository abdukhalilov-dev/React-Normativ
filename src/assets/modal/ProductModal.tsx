import React from "react";
import "./ProductModal.css";

interface Product {
  id: string;
  name: string;
  currentPrice: string;
  originalPrice: string;
  image: string;
  ratingImage: string;
  ratingCount: string;
  discount: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal__overlay" onClick={handleBackdropClick}>
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>✖</button>

        <div className="modal__image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="modal__info">
          <h2>{product.name}</h2>
          <p className="current__price">{product.currentPrice}</p>
          <p className="original__price">{product.originalPrice}</p>
          <p className="rating">⭐ {product.ratingCount}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
