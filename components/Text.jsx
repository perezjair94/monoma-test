import tw, { styled } from "twin.macro";

const Text = styled.h2(({ type, isPrimary }) => [
  tw`font-semibold mb-3`,
  isPrimary && tw`text-teal-500`,
  type === "title" ? tw`text-2xl` : tw`text-xl`,
]);

export default Text;
