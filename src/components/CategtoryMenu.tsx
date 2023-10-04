import { Link } from "react-router-dom";
import css from "./CategoryMenu.module.css";

function CategoryMenu({
  id,
  name,
  title,
  classes,
}: {
  id: number;
  name: string;
  title: string;
  classes?: string;
}) {
  return (
    <Link
      to={id !== -1 ? `/categories/${id}/${name}` : `/`}
      className={`${id !== -1 ? css.hoverClass : css.homeClass}  ${
        css.xPaddingCustom
      } d-inline-block py-2 fw-bold text-decoration-none text-center text-uppercase ${classes}`}
    >
      {title}
    </Link>
  );
}

export default CategoryMenu;
