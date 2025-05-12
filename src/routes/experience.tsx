import { createFileRoute } from "@tanstack/react-router";
import Experience from "../components/Experience";

export const Route = createFileRoute("/experience")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Experience />;
}
