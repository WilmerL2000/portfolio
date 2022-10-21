import { Project } from '../typings';

export const fetchProjects = async () => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
    const data = await resp.json();
    const projects: Project[] = data.projects;
    return projects;
}