import { useState, useEffect } from "react";
import { exerciseNameById } from "../components";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const ExercisePage = () => {
  const [page, setPage] = useState([]);
  const { Id } = useParams();

  useEffect(() => {
    exerciseNameById(Id)
      .then((data) => setPage(data))
      .catch(console.log);
  }, []);
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <img src={page.gifUrl} alt={page.name} className="w-full mb-4" />
      <h2 className="text-xl font-bold mb-2">{page.name}</h2>
      <div className="mb-2">
        <p>
          <span className="font-semibold">Body Part:</span> {page.bodyPart}
        </p>
        <p>
          <span className="font-semibold">Equipment:</span> {page.equipment}
        </p>
        <p>
          <span className="font-semibold">Target:</span> {page.target}
        </p>
        {page.secondaryMuscles && (
          <p>
            <span className="font-semibold">Secondary Muscles:</span>{" "}
            {page.secondaryMuscles.join(",")}
          </p>
        )}
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
        {page.instructions && (
          <ol className="list-decimal pl-4">
            {page.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};
export default ExercisePage;
