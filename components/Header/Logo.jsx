import "twin.macro";

import Link from "next/link";

export default function Logo() {
  return (
    <h2 tw="font-bold text-teal-600 text-lg">
      <Link href="/">
        <span>Monoma</span>
      </Link>
    </h2>
  );
}
