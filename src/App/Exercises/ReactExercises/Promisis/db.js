import { createRandomCompany, createRandomUser } from './utils';

export const compannys = Array(5)
  .fill()
  .map((el) => createRandomCompany());

export const employes = Array(25)
  .fill()
  .map((el) =>
    createRandomUser(
      compannys[Math.floor(Math.random() * compannys.length)].companyId
    )
  );
