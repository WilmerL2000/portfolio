import { Social } from '../typings';
import { sanityClient } from '../sanity';
import { groq } from "next-sanity";

export const fetchSocials = async () => {
    const query = groq`*[_type == "social"]`;

    const resp = await sanityClient.fetch(query);
    const socials: Social[] = resp;
    return socials;
}