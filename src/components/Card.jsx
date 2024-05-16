import PropTypes from "prop-types";

const ExerciseCard = ({ exercise, onClick }) => {
  return (
    <div
      className="bg-white rounded-md shadow-md m-2 p-2 w-"
      onClick={() => onClick(exercise.id)}
    >
      <img src={exercise.gifUrl} alt={exercise.name} className="w-full mb-2" />
      <div className="text-center">
        <h2 className="text-sm font-semibold mb-1">{exercise.name}</h2>
        <div className="bg-blue-200 text-xs text-blue-800 py-1 px-2 rounded-full mb-2">
          {exercise.target}
        </div>
      </div>
    </div>
  );
};
ExerciseCard.propTypes = {
  exercise: PropTypes.object,
  onClick: PropTypes.func,
};
export default ExerciseCard;
