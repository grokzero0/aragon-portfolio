import { Anchor, AppShell, Burger, Group, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Navbar() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell.Header>
      <Group h="100%" justify="space-between" px="md">
        <Group h="100%">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title order={2}>Carlos Aragon Aldana</Title>
        </Group>
        <Group h="100%">
          <Anchor href="/">Home</Anchor>
          <Anchor href="/portfolio">Portfolio</Anchor>
          <Anchor href="/experience">Experience</Anchor>
          <Anchor href="/contact">Contact</Anchor>
        </Group>
      </Group>
    </AppShell.Header>
  );
}
