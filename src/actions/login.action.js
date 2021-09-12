export const loginUser = async (body) => {
  const response = await fetch(
    `https://under-army-be.herokuapp.com/api/login/`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  if (response.status === 200) {
    const data = await response.json();
    document.cookie = `token=${data.access}`;
    localStorage.setItem("refresh", data?.refresh);
    localStorage.setItem("token", data?.access);
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
