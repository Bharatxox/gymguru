import axios from "axios";

const instance = axios.create({
  baseURL: "https://exercisedb.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "534014e1dcmsh9d1aee8138689c4p1ef201jsndc017eb2788b",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
  params: { limit: "20" },
});

const exercises = async () => {
  try {
    const resp = await instance.get("/exercises");
    if (resp.status != 200) {
      throw new Error("Failed to fetch the data");
    }
    // console.log(resp);
    return resp.data;
  } catch (e) {
    throw new Error("failed to fetch the data");
  }
};

const exerciseNameById = async (id) => {
  try {
    const resp = await instance.get(`/exercises/exercise/${id}`); // Corrected URL
    if (resp.status != 200) {
      throw new Error("Failed to fetch the data");
    }
    return resp.data;
  } catch (e) {
    throw new Error("failed to fetch the data");
  }
};

const exerciseBodyPartList = async () => {
  try {
    const resp = await instance.get(`/exercises/bodyPartList`);
    if (resp.status != 200) {
      throw new Error("Failed to fetch the data");
    }
    return resp.data;
  } catch (e) {
    throw new Error("failed to fetch the data");
  }
};

const exerciseBodyPartListByName = async (name) => {
  try {
    const resp = await instance.get(`/exercises/bodyPart/${name}`);
    if (resp.status != 200) {
      throw new Error("Failed to fetch the data");
    }
    return resp.data;
  } catch (e) {
    throw new Error("failed to fetch the data");
  }
};
const searchExercise = async (name) => {
  try {
    const resp = await instance.get(`/exercises/name/${name}`);
    if (resp.status != 200) {
      throw new Error("Failed to fetch the data");
    }
    return resp.data;
  } catch (e) {
    throw new Error("failed to fetch the data");
  }
};
export {
  exercises,
  exerciseNameById,
  exerciseBodyPartList,
  exerciseBodyPartListByName,
  searchExercise,
};
