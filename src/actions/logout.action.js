import { logoutURL, baseURL } from "../constants/backend_url";

export const logoutUser = async (body) => {
  const response = await fetch(`${baseURL}${logoutURL}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "content-type": "application/json",
    },
    body: JSON.stringify({
      refresh: body,
    }),
  });
  if (response.status === 204) {
    return {
      success: true,
      message: "Logout Success!",
    };
  }
  return {
    success: false,
    message: "Logout False!",
  };
};
