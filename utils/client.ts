import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "cd31ny79",
  dataset: "production",
  apiVersion: "2022-11-24",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
