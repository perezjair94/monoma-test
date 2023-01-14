import tw, { styled } from "twin.macro";

const Input = styled.input(({ isSmall }) => [
  tw`border border-gray-400 w-full rounded-md p-2 px-3`,
  isSmall ? "text-sm" : "text-base",
]);

export default Input;
