const {hash} = require('./index')

// sha256 test
test('sha256 hash of Hello World', () => {
    expect(hash('Hello World', 'sha256', 'hex')).toEqual("a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e")
})

// sha512 test

test('sha512 hash of Hello World', () => {
    expect(hash('Hello World', 'sha512', 'hex')).toEqual("2c74fd17edafd80e8447b0d46741ee243b7eb74dd2149a0ab1b9246fb30382f27e853d8585719e0e67cbda0daa8f51671064615d645ae27acb15bfb1447f459b")
})