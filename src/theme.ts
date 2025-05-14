import {
  Card,
  Container,
  createTheme,
  Paper,
  rem,
  Select,
} from "@mantine/core";
import type { MantineThemeOverride } from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
};

export const theme: MantineThemeOverride = createTheme({
  /** Put your mantine theme override here */
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  primaryColor: "violet",
  spacing: {
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
  },
  colors: {
    "charcoal-grey": [
      "#f4f5f5",
      "#e8e8e8",
      "#cecece",
      "#b3b3b3",
      "#9c9c9c",
      "#8d8d8d",
      "#868686",
      "#737373",
      "#666767",
      "#3c4142",
    ],
    coral: [
      "#ffe9ea",
      "#fed3d3",
      "#f6a5a5",
      "#f18181",
      "#ea4b4a",
      "#e73130",
      "#e62222",
      "#cd1416",
      "#b70c12",
      "#a1000c",
    ],
    "pastel-green": [
      "#e9fdeb",
      "#d7f6da",
      "#adebb3",
      "#84e08d",
      "#60d76b",
      "#49d155",
      "#3ccf49",
      "#2cb63a",
      "#22a231",
      "#108c25",
    ],
    "forest-green": [
      "#f1f9f3",
      "#e2f0e6",
      "#bfe0c8",
      "#9ad0a8",
      "#7bc28d",
      "#67b97c",
      "#5cb573",
      "#4c9f61",
      "#418e55",
      "#2e6f40",
    ],
    "deep-blue": [
      "#ecefff",
      "#d5dafb",
      "#a9b1f1",
      "#7a87e9",
      "#5362e1",
      "#3a4bdd",
      "#2c40dc",
      "#1f32c4",
      "#182cb0",
      "#0a259c",
    ],
    peach: [
      "#fff3e3",
      "#ffe5cd",
      "#ffd3ac",
      "#fead66",
      "#fe9539",
      "#fe851d",
      "#fe7d0d",
      "#e36b00",
      "#cb5e00",
      "#b14f00",
    ],
    lavender: [
      "#eaeaff",
      "#d3d3ff",
      "#9c9cfd",
      "#6665fc",
      "#3b37fb",
      "#221bfb",
      "#160dfc",
      "#0902e1",
      "#0000c9",
      "#0000b1",
    ],
    "ctp-base": [
      "#f2f3f7",
      "#e3e3e8",
      "#c3c5d1",
      "#a2a5bb",
      "#868aa8",
      "#74789d",
      "#6a7099",
      "#595f85",
      "#4f5478",
      "#24273a",
    ],
  },
  fontFamily:
    "Atkinson Hyperlegible, system-ui, Avenir, Helvetica, Arial, sans-serif",
  fontFamilyMonospace:
    "Atkinson Hyperlegible Mono, ui-monospace, Monaco, Courier, monospace",
  components: {
    /** Put your mantine component override here */
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "xl",
        radius: "md",
        withBorder: true,
      },
    }),

    Card: Card.extend({
      defaultProps: {
        p: "xl",
        shadow: "xl",
        radius: "var(--mantine-radius-default)",
        withBorder: true,
      },
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: "right",
      },
    }),
  },
  other: {
    style: "mantine",
  },
});
