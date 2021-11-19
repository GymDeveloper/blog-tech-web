import axios from "../index";

// body: email, password
export const login = async (body) => {
	try {
	  const response = await axios.post("/auth/login", body);
	  return response.data;
	  
	} catch (error) {
	  return error.message;
	}
  };
  