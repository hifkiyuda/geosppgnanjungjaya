import { Container } from "../ds";
import { Logo } from "../Logo";
import { ThemeToggle } from "../ThemeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <Container className="flex items-center justify-between">
        <Logo />
        <div>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};
