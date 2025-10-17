import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);

  // Load user from localStorage on first mount
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (email, password) => {
    //  Replace with actual API later
    const fakeUser = { email, name: "Demo User" };
    setUser(fakeUser);
    localStorage.setItem("user", JSON.stringify(fakeUser));
  };

  const register = (name, email, password) => {
    //Replace with actual API later
    const fakeUser = { email, name };
    setUser(fakeUser);
    localStorage.setItem("user", JSON.stringify(fakeUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return { user, login, register, logout };
}
