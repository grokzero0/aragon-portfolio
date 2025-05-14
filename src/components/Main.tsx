import { AppShell, NavLink, Text } from "@mantine/core";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useDisclosure } from "@mantine/hooks";
import { ChevronRight } from "lucide-react";

export default function Main() {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: true },
        width: 300,
      }}
    >
      <Navbar opened={opened} toggle={toggle}></Navbar>
      <AppShell.Navbar bg="pastel-green.2">
        <NavLink
          autoContrast
          label={<Text size="xl">Home</Text>}
          href="/"
          rightSection={<ChevronRight />}
          active={location.pathname === "/"}
          color="violet"
          variant="light"
        />
        <NavLink
          autoContrast
          label={<Text size="xl">Portfolio</Text>}
          href="/portfolio"
          rightSection={<ChevronRight />}
          active={location.pathname === "/portfolio"}
          color="violet"
          variant="light"
        />
        <NavLink
          autoContrast
          label={<Text size="xl">Experience</Text>}
          href="/experience"
          rightSection={<ChevronRight />}
          active={location.pathname === "/experience"}
          color="violet"
          variant="light"
        />
        <NavLink
          autoContrast
          label={<Text size="xl">Contact</Text>}
          href="/contact"
          rightSection={<ChevronRight />}
          active={location.pathname === "/contact"}
          color="violet"
          variant="light"
        />
      </AppShell.Navbar>
      <AppShell.Main bg="pastel-green.2">
        <Outlet />
        <TanStackRouterDevtools />
      </AppShell.Main>
    </AppShell>
  );
}
