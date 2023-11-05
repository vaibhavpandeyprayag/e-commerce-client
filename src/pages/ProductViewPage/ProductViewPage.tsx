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
      <nav className="row" aria-label="breadcrumb">
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
      {Object.keys(product).length > 0 && product && (
        <>
          <div className={`row`}>
            <div className={`col-12 col-md-5`}>
              <div className={`row border border-2`}>
                <div
                  className={`col-12 col-lg-2 d-flex flex-row flex-lg-column justify-content-center align-items-center gap-2 p-2 overflow-scroll ${css.album}`}
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
                <div
                  className={`col-12 col-lg-10 p-0 border border-1 ${css.album}`}
                >
                  <img
                    alt="VIEWER"
                    className={`object-fit-contain w-100 ${css.album}`}
                    src={activeImage.imagePath}
                  />
                </div>
              </div>
            </div>
            <div
              className={`col-12 col-md-7 ${css.highlightSection} overflow-scroll`}
            >
              <div className="row">
                <div className="col-12 col-lg-8 ">
                  <h4 className="text-secondary">{product.name}</h4>
                  <hr />
                  {product.product_type_id === 1 ? (
                    <div className="d-flex">
                      {product.discount != null && (
                        <div className="d-flex align-items-center gap-2">
                          <h2 className="me-2">
                            ₹
                            {product.default_price -
                              (1 / product.discount) * product.default_price}
                          </h2>
                          <h5 className="text-secondary text-decoration-line-through">
                            ₹{product.default_price}
                          </h5>
                          <h6 className="text-success">
                            {product.discount}% off
                          </h6>
                        </div>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                  {product.product_type_id === 1 && (
                    <div className="card rounded-0 border-0 my-4">
                      <div className="card-body p-0">
                        <h6 className="text-uppercase text-secondary">Color</h6>
                        <div className="d-flex align-items-center gap-2">
                          <button
                            className="py-1 px-3 bg-transparent"
                            style={{ color: "red", border: "2px solid red" }}
                          >
                            Red
                          </button>
                          <button
                            className="py-1 px-3 bg-transparent"
                            style={{
                              color: "blue",
                              border: "2px solid blue",
                            }}
                          >
                            Blue
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {product.key_features.length > 0 && (
                    <div className="keyFeaturesSection">
                      <h6 className="text-uppercase text-secondary">
                        Key Features
                      </h6>
                      <ul className="list-unstyled">
                        {product.key_features.map(
                          (feature: string, index: number) => (
                            <li
                              key={`feature${index}`}
                              className="my-1"
                              style={{
                                fontSize: "13px",
                              }}
                            >
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="col-12 col-lg-4 p-0">
                  <div className="border border-1 border-primary p-1 h-100">
                    <button className="btn btn-primary w-100 rounded-0">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
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
        </>
      )}
    </div>
  );
}

export default ProductViewPage;
