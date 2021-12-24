import { withDesign } from "storybook-addon-designs";
import { Button } from "./Button";

export default {
  title: "My stories",
  component: Button,
  decorators: [withDesign],
};

export const myStory = () => <Button>Hello, World!</Button>;

myStory.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ZeinFhYdWRuVjd9qr68QqB/Untitled?node-id=2%3A5",
  },
};
