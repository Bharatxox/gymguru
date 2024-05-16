import { useEffect, useState } from "react";
import { exerciseBodyPartListByName } from "../components/index";
import { useParams } from "react-router-dom";
import ExerciseCard from "../components/Card";
import { useNavigate } from "react-router-dom";

const ExerciseByBodypartName = () => {
  const [data, setData] = useState([]);
  const { BodyPart } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    exerciseBodyPartListByName(BodyPart)
      .then((value) => {
        setData(value);
        console.error(value);
      })
      .catch(console.log);
  }, [BodyPart]);
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

export default ExerciseByBodypartName;
