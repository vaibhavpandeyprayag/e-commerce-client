import { useParams } from "react-router-dom";
import css from "./ProductViewPage.module.css";
import { useEffect, useState } from "react";
import { APIResponse, BASE_URL } from "../../sharedExports";
import ImageThumbnail from "../../components/ImageThumbnail";

function ProductViewPage() {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState<any>({});
  const [activeImage, setActiveImage] = useState<any>({});

  useEffect(() => {
    fetch(`${BASE_URL}/product/${productId}`).then(async (httpRes) => {
      const res: APIResponse = await httpRes.json();
      if (httpRes.status === 200) {
        console.log(res.data);
        setProduct(res.data);
      } else {
        console.log("Product fetch error");
      }
    });
  }, [productId]);
  return (
    <div className="container-fluid">
      <nav className="row bg-success-subtle" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Library</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
      <div className={`row bg-danger-subtle`}>
        <div className={`col-12 col-md-5 bg-danger`}>
          <div className={`row align-items-lg-center`}>
            <div
              className={`col-12 col-lg-2 d-flex flex-row flex-lg-column justify-content-center align-items-center gap-2 p-2 overflow-scroll ${css.thumbnailColumn} bg-secondary`}
            >
              <ImageThumbnail
                id={0}
                imagePath="https://m.media-amazon.com/images/I/61VC4kJtDAL._SL1500_.jpg"
                setImage={setActiveImage}
                classes={`${
                  activeImage.id === 1
                    ? "border border-3 border-dark"
                    : "border border-3 border-light"
                }`}
              />
              <ImageThumbnail
                id={1}
                imagePath="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/c/2/m/4xl-db1024-3bros-original-imagt7byhztkj3u9.jpeg?q=70"
                setImage={setActiveImage}
                classes={`${
                  activeImage.id === 1
                    ? "border border-3 border-dark"
                    : "border border-3 border-light"
                }`}
              />
              <ImageThumbnail
                id={0}
                imagePath="https://m.media-amazon.com/images/I/61VC4kJtDAL._SL1500_.jpg"
                setImage={setActiveImage}
                classes={`${
                  activeImage.id === 1
                    ? "border border-3 border-dark"
                    : "border border-3 border-light"
                }`}
              />
              <ImageThumbnail
                id={3}
                imagePath="https://m.media-amazon.com/images/I/91TbbTMbmgL._SL1500_.jpg"
                setImage={setActiveImage}
                classes={`${
                  activeImage.id === 1
                    ? "border border-3 border-dark"
                    : "border border-3 border-light"
                }`}
              />
              <ImageThumbnail
                id={0}
                imagePath="https://m.media-amazon.com/images/I/61VC4kJtDAL._SL1500_.jpg"
                setImage={setActiveImage}
                classes={`${
                  activeImage.id === 1
                    ? "border border-3 border-dark"
                    : "border border-3 border-light"
                }`}
              />
              <ImageThumbnail
                id={1}
                imagePath="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/c/2/m/4xl-db1024-3bros-original-imagt7byhztkj3u9.jpeg?q=70"
                setImage={setActiveImage}
                classes={`${
                  activeImage.id === 1
                    ? "border border-3 border-dark"
                    : "border border-3 border-light"
                }`}
              />
              <ImageThumbnail
                id={0}
                imagePath="https://m.media-amazon.com/images/I/61VC4kJtDAL._SL1500_.jpg"
                setImage={setActiveImage}
                classes={`${
                  activeImage.id === 1
                    ? "border border-3 border-dark"
                    : "border border-3 border-light"
                }`}
              />
              <ImageThumbnail
                id={1}
                imagePath="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/c/2/m/4xl-db1024-3bros-original-imagt7byhztkj3u9.jpeg?q=70"
                setImage={setActiveImage}
                classes={`${
                  activeImage.id === 1
                    ? "border border-3 border-dark"
                    : "border border-3 border-light"
                }`}
              />
              <ImageThumbnail
                id={3}
                imagePath="https://m.media-amazon.com/images/I/91TbbTMbmgL._SL1500_.jpg"
                setImage={setActiveImage}
                classes={`${
                  activeImage.id === 1
                    ? "border border-3 border-dark"
                    : "border border-3 border-light"
                }`}
              />
              <ImageThumbnail
                id={2}
                imagePath="https://rukminim2.flixcart.com/image/832/832/l2z26q80/t-shirt/j/7/e/m-mss22pn052a-metronaut-original-image79jzvnbqdxs.jpeg?q=70"
                setImage={setActiveImage}
                classes={`${
                  activeImage.id === 1
                    ? "border border-3 border-dark"
                    : "border border-3 border-light"
                }`}
              />
              <ImageThumbnail
                id={3}
                imagePath="https://m.media-amazon.com/images/I/91TbbTMbmgL._SL1500_.jpg"
                setImage={setActiveImage}
                classes={`${
                  activeImage.id === 1
                    ? "border border-3 border-dark"
                    : "border border-3 border-light"
                }`}
              />
              <ImageThumbnail
                id={0}
                imagePath="https://m.media-amazon.com/images/I/61VC4kJtDAL._SL1500_.jpg"
                setImage={setActiveImage}
                classes={`${
                  activeImage.id === 1
                    ? "border border-3 border-dark"
                    : "border border-3 border-light"
                }`}
              />
              <ImageThumbnail
                id={1}
                imagePath="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/c/2/m/4xl-db1024-3bros-original-imagt7byhztkj3u9.jpeg?q=70"
                setImage={setActiveImage}
                classes={`${
                  activeImage.id === 1
                    ? "border border-3 border-dark"
                    : "border border-3 border-light"
                }`}
              />
              <ImageThumbnail
                id={0}
                imagePath="https://m.media-amazon.com/images/I/61VC4kJtDAL._SL1500_.jpg"
                setImage={setActiveImage}
                classes={`${
                  activeImage.id === 1
                    ? "border border-3 border-dark"
                    : "border border-3 border-light"
                }`}
              />
              <ImageThumbnail
                id={3}
                imagePath="https://m.media-amazon.com/images/I/91TbbTMbmgL._SL1500_.jpg"
                setImage={setActiveImage}
                classes={`${
                  activeImage.id === 1
                    ? "border border-3 border-dark"
                    : "border border-3 border-light"
                }`}
              />
            </div>
            <div className={`col-12 col-lg-10 p-0 ${css.thumbnailColumn}`}>
              <img
                className={`object-fit-contain w-100 ${css.thumbnailColumn}`}
                src={activeImage.imagePath}
              />
            </div>
          </div>
        </div>
        <div
          className={`col-12 col-md-7 ${css.highlightSection} overflow-scroll`}
        >
          <h1>HELLO</h1>
          <h1>HELLO</h1>
          <h1>HELLO</h1>
          <h1>HELLO</h1>
          <h1>HELLO</h1>
          <h1>HELLO</h1>
          <h1>HELLO</h1>
          <h1>HELLO</h1>
          <h1>HELLO</h1>
          <h1>HELLO</h1>
          <h1>HELLO</h1>
          <h1>HELLO</h1>
          <h1>HELLO</h1>
          <h1>HELLO</h1>
          <h1>HELLO</h1>
          <h1>HELLO</h1>
          <h1>HELLO</h1>
          <h1>HELLO</h1>
        </div>
      </div>

      <h1>HELLO</h1>
      <h1>HELLO</h1>
      <h1>HELLO</h1>
      <h1>HELLO</h1>
      <h1>HELLO</h1>
      <h1>HELLO</h1>
      <h1>HELLO</h1>
      <h1>HELLO</h1>
      <h1>HELLO</h1>
      <h1>HELLO</h1>
      <h1>HELLO</h1>
      <h1>HELLO</h1>
      <h1>HELLO</h1>
    </div>
  );
}

export default ProductViewPage;
