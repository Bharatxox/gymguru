import { useState, useEffect } from "react";
import { exerciseBodyPartList } from "./index";
import Page2Card from "./Page2Card";
import { useNavigate } from "react-router-dom";

const Page2Home = () => {
  const [exerciseList, setExerciseList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputVal, setInputVal] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    exerciseBodyPartList()
      .then((data) => {
        setExerciseList(data);
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

  const onClick = (name) => {
    navigate(`bodyPart/${name}`);
  };

  const handleButton = () => {
    if (inputVal == "") return;
    navigate(`name/${inputVal}`);
  };

  return (
    <div className="flex flex-col items-center">
      <div>
        <h2 className="text-xl font-bold mb-2">Awesome that you should know</h2>
        <div className="flex">
          <input
            type="text"
            className="border border-gray-400 px-4 py-2 mr-2 flex-grow"
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleButton}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1>Exercise List</h1>
        <ul className="flex flex-wrap gap-5  w-full justify-center px-[150px]">
          {exerciseList.map((exercise) => (
            <Page2Card name={exercise} key={exercise} onClick={onClick} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page2Home;
