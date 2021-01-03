import { extendTheme } from "@chakra-ui/react";

const sample = "darkviolet";

const colors = {
  primary: {
    100: sample,
    200: sample,
    300: sample,
    400: sample,
    500: sample,
    600: sample,
    700: sample,
    800: sample,
    900: sample,
  },
  color: {
    light: "white",
  },
};

export const theme = extendTheme({ colors });

export default {};
