import { useDispatch } from 'react-redux';
import { signup } from '../redux/auth/operations';
import { FormLogin , Input , Label , Button} from './SingUpForm.styled'

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    console.log({ name, email, password }, 'signupform');

    dispatch(signup({ name, email, password }));
  };
  return (
    <FormLogin onSubmit={handleSubmit}>
      <Label>
        Username
        <Input type="text" name="username" />{' '}
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />{' '}
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Sign up</Button>
    </FormLogin>
  );
};