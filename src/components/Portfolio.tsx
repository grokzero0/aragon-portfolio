import { Grid } from "@mantine/core";
import { portfolioItems } from "../assets/data";
import ReactPlayer from "react-player";
import HoverImage from "./HoverImage";

export default function Portfolio() {
  return (
    <Grid grow p="xl" gutter="0">
      {portfolioItems.map(
        (item) =>
          item.images &&
          item.images.map((image) => (
            <Grid.Col span={4}>
              <HoverImage image={image} name={item.name}></HoverImage>
            </Grid.Col>
          ))
      )}
      {portfolioItems.map(
        (item) =>
          item.video && (
            <Grid.Col span={4}>
              <ReactPlayer url={item.video} width="100%"></ReactPlayer>
            </Grid.Col>
          )
      )}
    </Grid>
  );
}
