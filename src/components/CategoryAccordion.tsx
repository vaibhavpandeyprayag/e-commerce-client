import { Link } from "react-router-dom";
import css from "./CategoryAccordion.module.css";

function CategoryAccordion({
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
    <div className="accordion-item d-flex flex-column align-items-center">
      <div className="d-inline-flex align-items-center w-auto">
        <Link
          className="accordion-header p-3 fw-bold text-uppercase text-decoration-none flex-grow-1"
          to={""}
        >
          {title}
        </Link>
        <button
          className="accordion-button collapsed w-auto border rounded-circle p-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded="true"
          aria-controls={`collapse${id}`}
        ></button>
      </div>
      <div
        id={`collapse${id}`}
        className="accordion-collapse collapse w-100"
        data-bs-parent="#accordionMenu"
      >
        <div className="accordion-body ">Subcategoroes</div>
      </div>
    </div>
  );
}

export default CategoryAccordion;
