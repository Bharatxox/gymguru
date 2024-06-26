import { useEffect, useState } from "react";
import { exercises } from "../components";
import ExerciseCard from "../components/Card";
import { useNavigate } from "react-router-dom";

const Exercise = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    exercises()
      .then((data) => {
        setList(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const onExerciseClick = (id) => {
    navigate(`/exercise/${id}`);
  };

  return (
    <div className="w-screen">
      <div className="w-full flex flex-wrap justify-center gap-5 items-center my-5">
        {list.map((data) => (
          <ExerciseCard
            key={data.id}
            exercise={data}
            onClick={onExerciseClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Exercise;
