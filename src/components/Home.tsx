import { Text, Paper, Box, Group, Anchor, Title } from "@mantine/core";
import { Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <Box
      display="flex"
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "10rem"
      }}
    >
      <Paper shadow="xl" withBorder p="xl">
        <Title style={{ textAlign: "center" }}>Carlos Aragon Aldana</Title>
        <Text style={{ textAlign: "center" }} my="md">
          Cinematographer. Producer. Writer. 0
        </Text>
        <Group justify="center">
          <Anchor href="mailto:caragon3@bu.edu">
            <Mail />
          </Anchor>
          <Anchor href="tel:857-600-7800">
            <Phone />
          </Anchor>
        </Group>
      </Paper>
    </Box>
  );
}
