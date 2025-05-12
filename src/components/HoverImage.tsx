import { AspectRatio, Image, Text } from "@mantine/core";
import styles from "../element.module.css";
export default function HoverImage({
  image,
  name,
}: {
  image: string;
  name: string;
}) {
  return (
    <AspectRatio ratio={16 / 9} mx="auto" className={styles.img_wrap}>
      <Image h="auto" src={image}></Image>
      <Text size="lg" className={styles.img_description}>
        {name}
      </Text>
    </AspectRatio>
  );
}
