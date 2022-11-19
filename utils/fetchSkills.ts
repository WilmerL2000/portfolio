import { Skill } from '../typings.d';
import { sanityClient } from '../sanity';
import { groq } from "next-sanity";

export const fetchSkills = async () => {
    const query = groq`*[_type == "skill"]`

    const resp = await sanityClient.fetch(query);
    const skills: Skill[] = resp;
    return skills;
}