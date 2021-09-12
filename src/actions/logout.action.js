export const logoutUser = async (body) => {
  const response = await fetch(
    `https://under-army-be.herokuapp.com/api/logout/`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "content-type": "application/json",
      },
      body: JSON.stringify({
        refresh: body,
      }),
    }
  );
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
