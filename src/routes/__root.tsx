import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { createRootRoute } from "@tanstack/react-router";
import { theme } from "../theme";
import Main from "../components/Main";

export const Route = createRootRoute({
  component: () => (
    <MantineProvider theme={theme}>
      <Main />
    </MantineProvider>
  ),
});
