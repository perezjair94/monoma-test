import tw, { styled } from "twin.macro";

const AlertMessage = styled.span(({ type }) => [
  tw`text-gray-600`,
  type === "danger" && tw`text-red-500`,
]);

export default AlertMessage;
