export function deltaE(rgbA: any, rgbB: any): number;
/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from https://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Object}          The RGB representation
 */
export function HSLtoRGB(h: number, s: number, l: number): any;
export function RGBtoHSL(r: any, g: any, b: any): {
    h: number;
    s: number;
    l: number;
};
