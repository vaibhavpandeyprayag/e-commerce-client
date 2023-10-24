import { Link } from "react-router-dom";
import css from "./CategoryAccordion.module.css";

function CategoryAccordion({
  id,
  name,
  title,
  subcategories,
  classes,
}: {
  id: number;
  name: string;
  title: string;
  subcategories: any[];
  classes?: string;
}) {
  return (
    <div className="accordion-item d-flex flex-column align-items-center">
      <div className="position-relative w-100">
        <Link
          className="position-absolute my-3 ps-3 accordion-header fw-bold text-uppercase text-decoration-none"
          to={""}
        >
          {title}
          <div
            className="bg-primary rounded-1"
            style={{ height: "2px", width: "120%" }}
          ></div>
        </Link>
        <div
          className={`d-flex justify-content-end align-items-center w-100 p-2 `}
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded="true"
          aria-controls={`collapse${id}`}
        >
          <button
            className={`accordion-button collapsed w-auto border-0 rounded-circle p-2 me-2 `}
          ></button>
        </div>
      </div>
      <div
        id={`collapse${id}`}
        className="accordion-collapse collapse w-100"
        data-bs-parent="#accordionMenu"
      >
        <ul className="accordion-body m-0 p-0 list-unstyled">
          {subcategories &&
            subcategories.map((subcategory) => (
              <li key={subcategory.id}>
                <Link
                  to={"/subcategories/"}
                  className={`d-flex align-items-baseline ps-5 py-1 text-decoration-none fw-semibold `}
                >
                  {subcategory.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoryAccordion;
