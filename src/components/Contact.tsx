import {
  Button,
  Group,
  Stack,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Contact() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });
  return (
    <Stack justify="center" p="xl">
      <Title style={{ textAlign: "center" }}>Contact Me!</Title>
      <form
        onSubmit={form.onSubmit((values) => console.log(values))}
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "7rem",
          paddingRight: "7rem",
        }}
      >
        <TextInput
          label="Name"
          placeholder="Your Name"
          required
          key={form.key("name")}
          {...form.getInputProps("name")}
          size="md"
        ></TextInput>
        <TextInput
          label="Email Address"
          placeholder="Your Email Address"
          required
          type="email"
          key={form.key("email")}
          size="md"
          {...form.getInputProps("email")}
        ></TextInput>

        <TextInput
          label="Phone Number (optional)"
          placeholder="Your Phone Number"
          type="tel"
          key={form.key("phone")}
          size="md"
          {...form.getInputProps("phone")}
        ></TextInput>
        <TextInput
          label="Subject"
          placeholder="Subject"
          required
          key={form.key("subject")}
          size="md"
          {...form.getInputProps("subject")}
        ></TextInput>
        <Textarea
          label="Message"
          required
          placeholder="Message"
          key={form.key("message")}
          size="md"
          autosize
          minRows={7}
          maxRows={10}
          {...form.getInputProps("message")}
        />
        <Group justify="center" mt="md">
          <Button type="submit" w="100%" size="md">
            Send
          </Button>
        </Group>
      </form>
    </Stack>
  );
}
