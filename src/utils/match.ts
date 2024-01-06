import { parse } from "path";

export const encryptMatch = (id: number): string => {
    return `${process.env.DEFAULT_TOKEN}${id}${process.env.DEFAULT_TOKEN}`;
}

export const descryptMatch = (match: string): number => {
    let idStrig: string = match
        .replace(`${process.env.DEFAULT_TOKEN}`, '')
        .replace(`${process.env.DEFAULT_TOKEN}`, '');
    return parseInt(idStrig);
}