import React, { useEffect, useState } from "react";
import CategoryProductCard from "../../components/CategoryProductCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Location from "../../components/Location";
import { navigation } from "../../config";
import { styles } from "./styles";
import data from "../../data.json";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import FeatureProductCard from "../../components/FeatureProductCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/slices/cartSlice";
import Modal from "../../components/Modal";
import Cart from "../checkout/Cart";
import { openModal } from "../../redux/slices/modalSlice";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<any>({});
  const [otherProducts, setOtherProducts] = useState<any>([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.value);
  const toggleModal = useSelector((state: RootState) => state.modal.value);
  const displayCartModal =
    Boolean(toggleModal) === true && Boolean(cart.length > 0) === true;
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(openModal());
  };

  useEffect(() => {
    const currentElement = data.find((element) => element.slug === id);
    const currentOtherProducts = product?.others?.map((secondElement: any) =>
      data.filter((element) => element.slug === secondElement.slug)
    );
    setOtherProducts(currentOtherProducts);
    setProduct(currentElement);
  }, [id, product]);

  return (
    <>
      <div className={styles.productHeader}>
        <div className={styles.productHeaderContainer}>
          <Header navigation={navigation} />
        </div>
      </div>

      <div className={styles.productBodyContainer(toggleModal)}>
        <div className={styles.productBody}>
          <button
            onClick={() => navigate(-1)}
            type="button"
            className={styles.productGoBack}
          >
            Go Back
          </button>
          <div className={styles.productMain}>
            <div className={styles.productMainImage}>
              <img src={product?.image?.desktop} alt="product" />
            </div>
            <div className={styles.productMainText}>
              {product?.new && (
                <p className={styles.productMainTextCaption}>NEW PRODUCT</p>
              )}
              <h4 className={styles.productMainTextHeading}>{product?.name}</h4>
              <p className={styles.productMainTextParagraph}>
                {product?.description}
              </p>
              <p className={styles.productMainTextPrice}>${product?.price}</p>
              <div className={styles.productMainTextQuantityContainer}>
                <div className={styles.productMainTextQuantity}>
                  <button
                    className={styles.productMainTextQuantityMinus}
                    type="button"
                    onClick={() => dispatch(decreaseQuantity(product))}
                  >
                    -
                  </button>
                  <p className={styles.productMainTextQuantityContent}>
                    {product?.quantity}
                  </p>
                  <button
                    type="button"
                    onClick={() => dispatch(increaseQuantity(product))}
                    className={styles.productMainTextQuantityPlus}
                  >
                    +
                  </button>
                </div>
                <Button
                  handleClick={handleAddToCart}
                  type="button"
                  label="Add To Cart"
                  variant="primary"
                />
              </div>
            </div>
          </div>
          <div className={styles.productFeatures}>
            <div className={styles.productFeaturesText}>
              <h4 className={styles.productTextHeading}>features</h4>
              <p className={styles.productFeaturesTextParagraph}>
                {product?.features}
              </p>
            </div>
            <div className={styles.productFeaturesList}>
              <h4 className={styles.productTextHeading}>in the box</h4>
              <div className={styles.productFeaturesListContainer}>
                {product?.includes?.map((element: any, index: number) => {
                  return (
                    <p
                      className={styles.productFeaturesListItem}
                      key={index + 1}
                    >
                      <span className={styles.productFeaturesListItemQuantity}>
                        {element?.quantity}x
                      </span>
                      <span className={styles.productFeaturesListItemContent}>
                        {element?.item}
                      </span>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.productGallery}>
            <div className={styles.productGalleryColumn}>
              <div>
                <img
                  src={product?.gallery?.first?.desktop}
                  alt="galleryFirst"
                />
              </div>
              <div>
                <img
                  src={product?.gallery?.second?.desktop}
                  alt="gallerySecond"
                />
              </div>
            </div>
            <div>
              <img src={product?.gallery?.third?.desktop} alt="galleryThird" />
            </div>
          </div>
          <div className={styles.productOthersContainer}>
            <h4 className={styles.productTextHeading}>You may also like</h4>
            <div className={styles.productOthers}>
              {otherProducts?.flat()?.map?.((element: any, index: number) => {
                return (
                  <FeatureProductCard
                    key={index + 1}
                    title={element?.name}
                    image={element?.image?.desktop}
                    slug={`/${element?.category}/${element?.slug}`}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.productCategory}>
            <CategoryProductCard
              image={
                "/images/shared/desktop/image-category-thumbnail-headphones.png"
              }
              title={"headphones"}
            />
            <CategoryProductCard
              image={
                "/images/shared/desktop/image-category-thumbnail-speakers.png"
              }
              title={"speakers"}
            />
            <CategoryProductCard
              image={
                "/images/shared/desktop/image-category-thumbnail-earphones.png"
              }
              title={"earphones"}
            />
          </div>
          <Location />
        </div>
        <Footer />

        {displayCartModal && (
          <Modal>
            <Cart cart={cart} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default Product;
