"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setDarkTheme,
  setLightTheme,
  setCustomTheme,
} from "@/lib/redux/slices/themeSlice";

export default function ThemeProvider({ children }) {
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") dispatch(setDarkTheme());
    else if (theme === "custom") {
      const custom = JSON.parse(localStorage.getItem("customTheme"));
      if (custom) dispatch(setCustomTheme(custom));
    } else {
      dispatch(setLightTheme());
    }

    setMounted(true);
  }, [dispatch]);

  if (!mounted) return null; // ⬅ prevents mismatch

  return children;
}
