import { PageInfo } from '../typings';

export const fetchPageInfo = async () => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
    const data = await resp.json();
    const pageInfo: PageInfo = data.pageInfo;
    return pageInfo;
}