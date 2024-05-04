export class Validate {
    static email(mail: string) {
        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(mail)) {
            return true;
        }
        return false;
    }
    static password(val: string) {
        return val.length >= 6;
    }
}
