const handleNewsletter = async (formData) => {
  const apiUrl =
    process.env.NEXT_PUBLIC_ENV === "production"
      ? "https://perfectprerolls.com/api"
      : "http://localhost:3000/api";

  const response = await fetch(`${apiUrl}/newsletter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  console.log("RESPONSE:", response);
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    console.log(data);
  }
};

export default handleNewsletter;
