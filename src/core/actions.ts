"use server";

export const register = async (
  name: string | null,
  email: string | null,
  password?: string | null
) => {
  try {
    if (!email || !password || !name)
      throw new Error("Email, password and name are required");

    console.log("register", { email, password, name });

    const response = await fetch(process.env.URL + "/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });

    if (!response.ok) {
      const data = await response.json();

      throw new Error(data.error);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("error", error);
    throw new Error("User registration failed");
  }
};
