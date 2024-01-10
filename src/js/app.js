export default class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [32700, 'Parse error'],
            [32600, 'Invalid Request'],
            [32601, 'Method not found'],
            [32602, 'Invalid params'],
            [32603, 'Internal error'],
            [32000, 'Server error'],
        ]);
    }

    translate(code) {
        if (!this.errors.has(code)) {
            throw new Error('Unknown error');
        } else {
            return this.errors.get(code);
        }
    }
}

