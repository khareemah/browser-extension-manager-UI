"use client";

import { Logo } from "@/icons";
import { ToggleBtn } from "./ToggleBtn";
import { useTheme } from "next-themes";

export default function Nav() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-full rounded-lg bg-[#fcfdff] flex items-center justify-between gap-4 py-2 px-4 border border-border  dark:bg-[#1f2535] dark:border-[#040918]">
      <Logo fill={theme === "dark" ? "#fff" : "#091540"} />
      <ToggleBtn setTheme={setTheme} theme={theme} />
    </div>
  );
}
