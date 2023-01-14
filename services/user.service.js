import { login } from "@/utils/auth";

export const authentication = async (payload) => {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const { token, user, message } = await response.json();
    if (!token) {
      return {
        success: false,
        message,
      };
    }
    login(token, user);
    return {
      success: true,
      message,
    };
  } catch (error) {
    console.log(error);
  }
};
