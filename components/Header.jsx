import DropdownMenu from "./Header/DropdownMenu";
import Logo from "./Header/Logo";

export default function Header() {
  return (
    <div className="flex justify-between">
      <Logo />
      <DropdownMenu />
    </div>
  );
}
