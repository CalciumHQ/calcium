import UserDAO from '../api/user/dao/user-dao';

let user = {
  email: 'simon@calcium.engineering',
  password: UserDAO['generateHash']('password'),
  firstName: 'Simon',
  lastName: 'Robb'
};
UserDAO['createUser'](user);