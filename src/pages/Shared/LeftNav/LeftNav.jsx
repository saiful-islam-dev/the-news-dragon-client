import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://the-dragon-server-saiful264.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(categories);
  return (
    <div>
      <h2>This is right Nav</h2>
      <div className="ps-4">
        {categories.map((categorie) => (
          <p key={categorie.id}>
            <Link
              to={`/category/${categorie.id}`}
              className="text-decoration-none text-black"
            >
              {categorie.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
