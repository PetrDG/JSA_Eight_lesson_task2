import ErrorRepository from '../app.js';

test.each([
    [32700, 'Parse error'],
    [32600, 'Invalid Request'],
    [32601, 'Method not found'],
    [32602, 'Invalid params'],
    [32603, 'Internal error'],
    [32000, 'Server error'],
])('Get error message', (code, expectedMessage) => {
    const errorHandler = new ErrorRepository();
    expect(errorHandler.translate(code)).toEqual(expectedMessage)
});

test('Get error message by invalid code', () => {
    const errorHandler = new ErrorRepository();
    expect(() => errorHandler.translate(12345)).toThrow('Unknown error');
});
