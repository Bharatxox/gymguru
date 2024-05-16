import { useEffect, useState } from "react";
import { searchExercise } from "../components/index";
import { useParams } from "react-router-dom";
import ExerciseCard from "../components/Card";
import { useNavigate } from "react-router-dom";

const SearchExercise = () => {
  const [data, setData] = useState([]);
  const { Name } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    searchExercise(Name)
      .then((value) => {
        setData(value);
        console.error(value);
      })
      .catch(console.log);
  }, [Name]);
  console.log(data);

  const onExerciseClick = (id) => {
    navigate(`/exercise/${id}`);
  };

  return (
    <div>
      {data.map((data) => (
        <ExerciseCard key={data.id} exercise={data} onClick={onExerciseClick} />
      ))}
    </div>
  );
};

export default SearchExercise;
