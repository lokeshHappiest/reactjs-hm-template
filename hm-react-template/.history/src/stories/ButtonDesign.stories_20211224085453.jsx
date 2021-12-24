import { withDesign } from "storybook-addon-designs";
import ButtonFig from "./ButtonFig";

export default {
  title: "Figma",
  component: ButtonFig,
  decorators: [withDesign],
};

export const myStory = () => <ButtonFig />;

myStory.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ZeinFhYdWRuVjd9qr68QqB/Untitled?node-id=3%3A6",
  },
};
