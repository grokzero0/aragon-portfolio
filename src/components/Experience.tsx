import { Stack, Text, Image, Accordion, Title, Grid } from "@mantine/core";
import { experiences } from "../assets/data";

export default function Experience() {
  return (
    <Stack p="xl">
      <Grid>
        <Grid.Col span={8}>
          <Stack>
            <Title c="violet" style={{ textAlign: "center" }}>
              Hello!
            </Title>
            <Text size="lg">
              I'm a junior at Boston University studying film, television and
              advertising, learning the intersections between both industries
              through intense coursework and pushing my creative limits to
              produce media that resonates with the general public.
            </Text>
            <Text size="lg">
              On weekends, I practice my craft at the studio, focusing on
              lighting plans, camera movements, and framing compositions. I've
              worked on productions by BUTV, Delta Kappa Alpha, and various BU
              student projects, ranging from surrealist short films to
              light-hearted comedies.
            </Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <Image
            radius="md"
            src="https://i.redd.it/pvy1onqm30ma1.png"
            height={300}
          ></Image>
        </Grid.Col>
      </Grid>
      <Title order={2} style={{ textAlign: "center", marginTop: "1rem" }}>
        Experience
      </Title>
      <Accordion multiple={true} bg="forest-green" radius="lg">
        {experiences.map((experience) => (
          <Accordion.Item
            key={experience.name}
            value={experience.name}
            color="violet"
          >
            <Accordion.Control>{experience.name}</Accordion.Control>
            <Accordion.Panel>{experience.description}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Stack>
  );
}
