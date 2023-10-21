import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SignUpForm } from '../../SignUpForm/SingUpForm';
import { selectError } from '../../redux/auth/selectors';
import { removeError } from '../../actions';
  
export const SignUpPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    if (error) {
      dispatch(removeError());
    }
  }, []);

  return (
    <div>
      <title>Sign Up</title>
      <SignUpForm />
      {
        error ? <p>{ error }</p> : null
      }
    </div>
  );
};