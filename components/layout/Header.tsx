import Link from "next/link";
import { Container } from "../ds";
import { ThemeToggle } from "../ThemeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <Container className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-8 w-full">
          {/* <div className="flex items-center gap-4">
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
          </div> */}
          <Link href="/" className="flex flex-col -space-y-1">
            <span className="font-light text-sm text-zinc-600 dark:text-zinc-400">
              SPPG Garut Kersamanah
            </span>
            <span className="font-semibold text-xl text-zinc-800 dark:text-zinc-200">
              Nanjungjaya 1
            </span>
          </Link>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};
