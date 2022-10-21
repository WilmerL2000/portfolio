import { Social } from '../typings';

export const fetchSocials = async () => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
    const data = await resp.json();
    const socials: Social[] = data.socials;
    return socials;
}