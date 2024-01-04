import { createClient } from "@sanity/client";

export default createClient({
  projectId: "5pm7w7vm",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-04",
});
