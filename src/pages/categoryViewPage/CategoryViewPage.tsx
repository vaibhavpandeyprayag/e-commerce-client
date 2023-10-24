import { useEffect, useState } from "react";
import css from "./CategoryViewPage.module.css";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

function CategoryViewPage() {
  const [category, setCategory] = useState({ id: -1, name: "" });
  const params = useParams();

  useEffect(() => {
    setCategory({ id: params.id as any, name: params.name as any });
  }, []);
  return (
    <div>
      {category.id}
      {category.name}
    </div>
  );
}

export default CategoryViewPage;
