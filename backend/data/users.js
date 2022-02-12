import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Muskaan Singhvi',
    email: 'muskaan.singhvi_ug23@ashoka.edu.in',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },

  {
    name: 'Aryan Nair',
    email: 'aryan.nair_ug23@ashoka.edu.in',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },

  {
    name: 'Mahiya Agrawal',
    email: 'mahiya.agrawal_ug23@ashoka.edu.in',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
]

export default users
