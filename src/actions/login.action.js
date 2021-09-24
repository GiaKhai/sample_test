import { loginURL, baseURL } from "../constants/backend_url";

export const loginUser = async (body) => {
  const response = await fetch(`${baseURL}${loginURL}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (response.status === 200) {
    const data = await response.json();
    document.cookie = `token=${data.access};path=/;`;
    document.cookie = `refresh=${data.refresh};path=/;`;

    return {
      success: true,
      mess: "Login Success!",
    };
  }
  if (response.status === 401) {
    return {
      success: false,
      mess: "Email or password is invalid. Please check again!",
    };
  }
  return {
    success: false,
    mess: "Login Fail!",
  };
};
