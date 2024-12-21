export const ansiSpecial: ({
    name: string;
    ansi: string;
    about: string;
} | {
    name: string;
    ansi: string;
    about?: undefined;
})[];
export const colorNamesBasic: ({
    fg: number;
    bg: number;
    name: string;
    list_bg: string;
    rgb: {
        r: number;
        g: number;
        b: number;
    };
    set?: undefined;
} | {
    name: string;
    fg: number;
    bg: number;
    set: boolean;
    rgb: {
        r: number;
        g: number;
        b: number;
    };
    list_bg?: undefined;
} | {
    name: string;
    fg: number;
    bg: number;
    rgb: {
        r: number;
        g: number;
        b: number;
    };
    list_bg?: undefined;
    set?: undefined;
})[];
export const colorNames256: ({
    fg: number;
    bg: number;
    name: string;
    list_bg: string;
    rgb: {
        r: number;
        g: number;
        b: number;
    };
    set?: undefined;
} | {
    name: string;
    fg: number;
    bg: number;
    set: boolean;
    rgb: {
        r: number;
        g: number;
        b: number;
    };
    list_bg?: undefined;
} | {
    name: string;
    fg: number;
    bg: number;
    rgb: {
        r: number;
        g: number;
        b: number;
    };
    list_bg?: undefined;
    set?: undefined;
} | {
    name: string;
    rgb: {
        r: number;
        g: number;
        b: number;
    };
    system: boolean;
} | {
    name: string;
    rgb: {
        r: number;
        g: number;
        b: number;
    };
    system?: undefined;
})[];
export const moreColorNames: {
    name: string;
    rgb: {
        r: number;
        g: number;
        b: number;
    };
}[];
