import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import {createClient} from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pfjvqqcl"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "b2bportal"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
