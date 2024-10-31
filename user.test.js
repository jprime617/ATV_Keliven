const { addUser, getUser, getTotalActiveUsers } = require('./user');

beforeEach(() => {
  users = [];
});

test('Adicionar um usuário e verificar se ele foi adicionado', () => {
  const user = { id: 1, name: 'Alice', active: true };
  addUser(user);
  expect(getUser(1)).toEqual(user);
});

test('Verificar o total de usuários ativos', () => {
  addUser({ id: 1, name: 'Alice', active: true });
  addUser({ id: 2, name: 'Bob', active: false });
  addUser({ id: 3, name: 'Charlie', active: true });

  expect(getTotalActiveUsers()).toBe(2);
});
