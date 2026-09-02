import Link from "next/link";
import { Container } from "../ds";
import { ThemeToggle } from "../ThemeToggle";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <Container className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-8 w-full">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex flex-col -space-y-1">
              <span className="font-light text-sm text-zinc-600 dark:text-zinc-400">
                SPPG Garut Kersamanah
              </span>
              <span className="font-semibold text-lg text-zinc-800 dark:text-zinc-200">
                Nanjungjaya 1
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-6 lg:space-x-8">
            <Link
              href="https://www.bgn.go.id/radar-mbg/?provinsi=32&kabko=32.05&kecamatan=32.05.13&kelurahan=32.05.13.2002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-light flex items-center gap-1"
            >
              Menu Hari Ini <ArrowTopRightIcon className="h-4 w-4" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};
