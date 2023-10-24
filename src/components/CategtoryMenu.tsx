import { Link } from "react-router-dom";
import css from "./CategoryMenu.module.css";

function CategoryMenu({
  id,
  name,
  title,
  subcategories,
  classes,
}: {
  id: number;
  name: string;
  title: string;
  subcategories?: any[];
  classes?: string;
}) {
  return (
    <div className={`${css.pseudoIdParent} h-100`}>
      <Link
        to={id !== -1 ? `/category/${id}` : `/`}
        className={`${id !== -1 ? "" : ""}  ${css.xPaddingCustom} ${
          css.pseudoIdNeighbour1
        } d-flex h-100 justify-content-center align-items-center fw-bold text-decoration-none text-uppercase ${classes}`}
      >
        {title}
      </Link>
      {id != -1 && (
        <div
          className={`${css.pseudoIdNeighbour2} bg-white position-fixed start-0 end-0 py-4 justify-content-center`}
        >
          <ul className="list-unstyled z-1 text-center">
            {subcategories &&
              subcategories.map((subcategory) => (
                <li key={subcategory.id}>
                  <Link
                    to={`/subcategory/${subcategory.id}`}
                    className={`d-inline-flex align-items-baseline text-decoration-none p-1 fw-semibold `}
                  >
                    {subcategory.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CategoryMenu;
