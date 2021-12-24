import * as Button from "./Button.stories";

export default {
  title: "ButtonGroup",
};

export const ButtonGroup = () => {
  return (
    <>
      <Button.Secondary />
      <Button.Primary />
    </>
  );
};
