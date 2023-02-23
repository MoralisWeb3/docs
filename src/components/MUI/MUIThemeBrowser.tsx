import React, { useEffect, Dispatch, SetStateAction } from "react";
import { PaletteMode } from "@mui/material";

interface MUIThemeBrowserProps {
  setTheme: Dispatch<SetStateAction<PaletteMode>>;
}

const MUIThemeBrowser = (props: MUIThemeBrowserProps) => {
  const { setTheme } = props ?? {};

  function checkTheme() {
    const localTheme = localStorage.getItem("theme") as PaletteMode;

    if (localTheme) setTheme(localTheme);
  }

  // For initialization
  useEffect(checkTheme, []);

  // For real-time updates
  useEffect(() => {
    window.addEventListener("storage", checkTheme);

    return () => {
      window.removeEventListener("storage", checkTheme);
    };
  }, []);

  return <></>;
};

export default MUIThemeBrowser;
