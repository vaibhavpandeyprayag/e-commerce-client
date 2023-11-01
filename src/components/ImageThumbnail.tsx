import { useEffect, useState } from "react";
import css from "./ImageThumbnail.module.css";

function ImageThumbnail({
  id,
  imagePath,
  setImage,
  classes,
}: {
  id: number;
  imagePath: string;
  setImage: Function;
  classes?: string;
}) {
  useEffect(() => {
    console.log("ImageThumbnail rendered.");
  }, []);

  return (
    <img
      id={id.toString()}
      className={`${classes}`}
      style={{ padding: "2px", width: "3.2rem", height: "3.5rem" }}
      src={imagePath}
      onMouseOver={() => setImage({ id: id, imagePath: imagePath })}
      onClick={() => setImage({ id: id, imagePath: imagePath })}
    />
  );
}

export default ImageThumbnail;
