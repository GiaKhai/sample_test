import { resetPasswordURL, baseURL } from "../constants/backend_url";

export const resetPassword = async (body) => {
  const response = await fetch(`${baseURL}${resetPasswordURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: body,
      redirect_url: "http://localhost:3000/password-reset/",
    }),
  });

  try {
    const data = await response.json();
    console.log(data);
    // if (response.status === 200) {
    //   return {
    //     success: true,
    //     message: data.success,
    //   };
    // }

    // if (response.status === 400)
    //   return {
    //     success: false,
    //     message: data.error,
    //   };
    // return {
    //   success: false,
    //   message: "Fail",
    // };
  } catch (error) {}
};
