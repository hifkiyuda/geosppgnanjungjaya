import Link from "next/link";
import { Container } from "../ds";
import { Logo } from "../Logo";
import { ThemeToggle } from "../ThemeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <Container className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-zinc-600 dark:text-zinc-400 hover:text-foreground dark:hover:text-foreground"
            >
              Geospasial
            </Link>
            <Link
              href="/menu"
              className="text-zinc-600 dark:text-zinc-400 hover:text-foreground dark:hover:text-foreground"
            >
              Menu
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};
