import User from 'App/Models/User';
import test from 'japa';
import supertest from 'supertest';

test('it should return JWT token when session created', async (assert) => {
  const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`
  const user = await User.create({
    name: "Luis",
    email: "luisopentec@gmail.com",
    password: "1234"
  });
  //(await supertest(BASE_URL).post('/')).body(user).expect(200);
  const response = await supertest(BASE_URL).post('/').send(user);

  console.log(response);


});

