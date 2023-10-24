export class Log {
    static sucess(message: string) {
        console.log(`%c${message}`, `color: green; font-weight: bold;`);
    }

    static danger (message: string) {
        console.log(`%c${message}, color: red; font-weight: bold;`);
    }

    static warning (message: string) {
        console.log(`%c${message}, color: yellow; font-weight: bold;`);
    }
}