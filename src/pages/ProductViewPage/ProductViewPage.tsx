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
    <div>
      <nav className="bg-success-subtle" aria-label="breadcrumb">
        <ol className="breadcrumb m-0 p-2">
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
      <div className="d-flex flex-column flex-md-row bg-primary-subtle">
        <div
          className={`albumSection ${css.albumWidth} d-flex flex-column h-100 flex-md-row bg-danger-subtle`}
        >
          <div
            className={`thumbnailSection ${css.thumbnailColumnWidth} d-flex flex-md-column justify-content-center p-1 ps-md-3 pt-md-3 gap-2`}
          >
            <ImageThumbnail
              id={0}
              imagePath="https://m.media-amazon.com/images/I/61VC4kJtDAL._SL1500_.jpg"
              setImage={setActiveImage}
              classes={`${
                activeImage.id === 1
                  ? "border border-3 border-dark"
                  : "border border-dark"
              }`}
            />
            <ImageThumbnail
              id={1}
              imagePath="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/c/2/m/4xl-db1024-3bros-original-imagt7byhztkj3u9.jpeg?q=70"
              setImage={setActiveImage}
              classes={`${
                activeImage.id === 1
                  ? "border border-3 border-dark"
                  : "border border-dark"
              }`}
            />
            <ImageThumbnail
              id={2}
              imagePath="https://rukminim2.flixcart.com/image/832/832/l2z26q80/t-shirt/j/7/e/m-mss22pn052a-metronaut-original-image79jzvnbqdxs.jpeg?q=70"
              setImage={setActiveImage}
              classes={`${
                activeImage.id === 1
                  ? "border border-3 border-dark"
                  : "border border-dark"
              }`}
            />
            <ImageThumbnail
              id={3}
              imagePath="https://m.media-amazon.com/images/I/91TbbTMbmgL._SL1500_.jpg"
              setImage={setActiveImage}
              classes={`${
                activeImage.id === 1
                  ? "border border-3 border-dark"
                  : "border border-dark"
              }`}
            />
          </div>
          <div
            className={`${css.photoSection} d-flex align-items-start align-md-items-center`}
          >
            <img
              className="w-100 object-fit-contain"
              src={activeImage.imagePath}
            />
          </div>
        </div>
        <div className="highlightSection">Hello</div>
      </div>
    </div>
  );
}

export default ProductViewPage;
