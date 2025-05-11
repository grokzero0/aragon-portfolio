import "@mantine/core/styles.css";
import { AppShell, MantineProvider } from "@mantine/core";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/Navbar";
import { theme } from "../theme";

export const Route = createRootRoute({
  component: () => (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 70 }}>
        <Navbar></Navbar>
        <AppShell.Main bg="grape">
          <Outlet />
          <TanStackRouterDevtools />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  ),
});
