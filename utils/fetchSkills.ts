import { Skill } from '../typings.d';

export const fetchSkills = async () => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
    const data = await resp.json();
    const skills: Skill[] = data.skills;
    return skills;
}