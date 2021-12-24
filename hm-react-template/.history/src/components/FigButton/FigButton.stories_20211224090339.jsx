import { withDesign } from "storybook-addon-designs";
import FigButton from "./../FigButton/FigButton";

export default {
  title: "Figma/Button",
  component: FigButton,
  decorators: [withDesign],
};

export const Primary = () => <FigButton />;

Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ZeinFhYdWRuVjd9qr68QqB/Untitled?node-id=3%3A6",
  },
};
