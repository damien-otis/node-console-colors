export default ansiEscapes;
declare namespace ansiEscapes {
    export function cursorTo(x: any, y: any): string;
    export function cursorMove(x: any, y: any): string;
    export function cursorUp(count?: number): string;
    export function cursorDown(count?: number): string;
    export function cursorForward(count?: number): string;
    export function cursorBackward(count?: number): string;
    export let cursorLeft: string;
    export let cursorSavePosition: string;
    export let cursorRestorePosition: string;
    export let cursorGetPosition: string;
    export let cursorNextLine: string;
    export let cursorPrevLine: string;
    export let cursorHide: string;
    export let cursorShow: string;
    export function eraseLines(count: any): string;
    export let eraseEndLine: string;
    export let eraseStartLine: string;
    export let eraseLine: string;
    export let eraseDown: string;
    export let eraseUp: string;
    export let eraseScreen: string;
    export let scrollUp: string;
    export let scrollDown: string;
    export let clearScreen: string;
    export let clearTerminal: string;
    export let enterAlternativeScreen: string;
    export let exitAlternativeScreen: string;
    export { BEL as beep };
    export function link(text: any, url: any): string;
    export function image(buffer: any, options?: {}): string;
    export namespace iTerm {
        function setCwd(cwd?: any): string;
        function annotation(message: any, options?: {}): string;
    }
}
declare const BEL: "\u0007";
