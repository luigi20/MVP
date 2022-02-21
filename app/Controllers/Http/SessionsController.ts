import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class SessionsController {

  async store({ request, response, auth }: HttpContextContract) {
    const { email, password } = request.only([
      'email',
      'password'
    ]);
    const token = await auth.attempt(email, password);
    console.log(token);
    return token;
  }
}
