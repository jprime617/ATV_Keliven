const getUser = require('./user');
const addUser = require('./user');
const activeUsers = require('./user');


test('adicionar usuario', () => {
    expect(addUser(5,'cleber', true)).toBe(1)
});

test('encontrar nome do user pelo id', () => {
    expect(getUser(1)).toBe(1, true, 1)
});

test('contar os ativos', () => {
    expect(activeUsers().toBe(1))
})