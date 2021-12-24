import * as ButtonStories from "./Button.stories";

export default {
  title: "SComponent/SButtonGroup",
};

export const Combine = () => {
  return (
    <>
      {...ButtonStories.Primary.args}
      <ButtonStories.Secondary />
    </>
  );
};
