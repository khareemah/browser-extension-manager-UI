import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui";

export function ToggleBtn({
  setTheme,
  theme,
}: {
  theme?: string;
  setTheme: (theme: string) => void;
}) {
  return (
    <Button
      variant="ghost"
      className="size-12 inline-flex items-center justify-center bg-[#EEEEF0] dark:bg-[#2F354B] rounded-lg hover:bg-[#EEEEF0]/90 dark:hover:bg-[#2F354B]/90 transition-colors text-[16px]"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="size-6" fill="white" />
      ) : (
        <Moon className="size-6" stroke="black" />
      )}
    </Button>
  );
}
