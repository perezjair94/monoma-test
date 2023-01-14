import tw, { styled } from "twin.macro";

const Button = styled.button(({ isPrimary, isSecondary, isFull }) => [
  tw`p-2 rounded-md bg-gray-200 hover:bg-gray-300`,
  isFull && tw`w-full`,
  isPrimary && tw`bg-red-500 text-white hover:bg-red-600`,
]);

export default Button;
