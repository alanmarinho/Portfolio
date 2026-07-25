import { ThemeToggle } from "@components/ThemeToggle";
import { useData } from "@context/data";
import {headerLinks} from "@/utils/data"

export default function Layout({children,}: {children: React.ReactNode;}) {
    const { theme } = useData();

  function scrollToSection(selector?: string) {
    if (!selector) return;

    const section = document.querySelector(selector);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <img
            src={theme === "dark" ? "/logo_white.svg" : "/logo_black.svg"}
            alt="Logo"
            className="h-10 w-10 hover:cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          <nav className="hidden items-center gap-6 md:flex">
            {headerLinks.map((link) => (
              <button
                key={link.text}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:cursor-pointer"
                onClick={() => scrollToSection(link.scrollTo)}
              >
                {link.text}
              </button>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        {children}
      </main>
    </div>
  );
}