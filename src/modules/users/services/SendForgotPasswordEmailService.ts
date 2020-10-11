import IUsersRepository from '../repositories/IUsersRepository';
import { injectable, inject }from 'tsyringe';

interface IRequest {
    email: string;
}

@injectable()
class SendForgotPasswordEmailService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    public async execute(data: IRequest): Promise<void> {}
}

export default SendForgotPasswordEmailService;