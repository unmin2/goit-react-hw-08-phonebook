import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/operations';
import {Form , Input , Label , Button} from './LoginForm.styled'
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    dispatch(login({ password, email }));
  };
  return (
    <div>
      <h3>Log in to see your contacts</h3>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email
          <Input type="email" name="email" />{' '}
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Button>LogIn</Button>
      </Form>
    </div>
  );
};