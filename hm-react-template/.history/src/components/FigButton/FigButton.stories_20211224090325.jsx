import { withDesign } from "storybook-addon-designs";
import ButtonFig from "./../FigButton/FigButton";

export default {
  title: "Figma/Button",
  component: ButtonFig,
  decorators: [withDesign],
};

export const Primary = () => <ButtonFig />;

Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ZeinFhYdWRuVjd9qr68QqB/Untitled?node-id=3%3A6",
  },
};
