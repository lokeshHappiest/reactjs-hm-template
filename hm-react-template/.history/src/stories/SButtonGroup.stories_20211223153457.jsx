import SButtonGroup from "../components/SButtonGroup";
import * as ButtonStories from "./Button.stories";

export default {
  title: "SComponent/SButtonGroup",
  component: SButtonGroup,
};

export const Combine = () => {
  return (
    <>
      <ButtonStories.Primary />
      <ButtonStories.Secondary />
    </>
  );
};
