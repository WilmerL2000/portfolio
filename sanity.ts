import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

/* Setting up the config for the sanity client. */
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};

/* Creating a client for the sanity database. */
export const sanityClient = createClient(config);

/**
 * It takes a source object and returns a URL
 * @param {any} source - The image source. This can be either a string or an object.
 */
export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
