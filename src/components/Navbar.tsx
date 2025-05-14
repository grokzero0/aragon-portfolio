import { Anchor, AppShell, Burger, Group, Title } from "@mantine/core";

export default function Navbar({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) {
  // const { colorScheme, setColorScheme } = useMantineColorScheme();
  // const computedColorScheme = useComputedColorScheme();
  return (
    <AppShell.Header bg="pastel-green.3">
      <Group h="100%" justify="space-between" px="md">
        <Group h="100%">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Anchor href="/">
            <Title order={2}>Carlos Aragon Aldana</Title>
          </Anchor>
        </Group>
        <Group h="100%" visibleFrom="sm">
          <Group>
            <Anchor href="/">Home</Anchor>
            <Anchor href="/portfolio">Portfolio</Anchor>
            <Anchor href="/experience">Experience</Anchor>
            <Anchor href="/contact">Contact</Anchor>
          </Group>
          {/* <ActionIcon
            size="xl"
            onClick={() =>
              setColorScheme(colorScheme === "light" ? "dark" : "light")
            }
            variant="default"
            aria-label="Toggle color scheme"
          >
            {colorScheme === "dark" ? <Sun /> : <Moon />}
          </ActionIcon> */}
        </Group>
      </Group>
    </AppShell.Header>
  );
}
