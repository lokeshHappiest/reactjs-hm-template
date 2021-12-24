import * as SButton from "./SButton.stories";
import * as Button from "./Button.stories";

export default {
  title: "ButtonGroup",
};

export const ButtonGroup = () => {
  return (
    <>
      <SButton.Primary />
      <Button.Primary />
    </>
  );
};
