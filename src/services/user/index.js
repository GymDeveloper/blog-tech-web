import axios from "../index";

export const list = async () => {
  try {
    const response = await axios.get("/user/users");
	return response.data;
	
  } catch (error) {
    return error.message;
  }
};
