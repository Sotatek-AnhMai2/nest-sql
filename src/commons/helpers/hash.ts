import * as bcrypt from 'bcrypt';

export const hashPassword = (password: string) => {
  const saltOrRounds = 10;
  return bcrypt.hash(password, saltOrRounds);
};
