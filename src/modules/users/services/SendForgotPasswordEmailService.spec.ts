import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService';
import AppError from '@shared/errors/AppError';

describe('SendForgotPasswordEmail', () => {
   it('should be able to recover the password using the email', async () => {
        const fakeUsersRepository = new FakeUsersRepository();
        const fakeMailProvider = new FakeMailProvider();

        const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');
        
        const sendForgotPasswordEmailService = new SendForgotPasswordEmailService(fakeUsersRepository, fakeMailProvider);
        
        const user = await fakeUsersRepository.create({
            password: '123456',
            name: 'John Doe',
            email: 'johndoe@example.com',
        });

        await sendForgotPasswordEmailService.execute({
            email: 'johndoe@example.com',
        });

        expect(sendMail).toHaveBeenCalled();
   });
});