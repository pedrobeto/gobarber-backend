import { Request, Response } from 'express';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UserMap from "@modules/users/mappers/UserMap";
import { container } from 'tsyringe';

export default class SessionsController {
    public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticateUser.execute({
        email,
        password    });
    
    const mappedUser = UserMap.toDTO(user);

    return response.json({ mappedUser, token });
    }
}