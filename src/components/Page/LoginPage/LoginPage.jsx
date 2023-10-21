import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginForm } from '../../LoginForm/LoginForm';
import { selectError } from '../../redux/auth/selectors';
import { removeError } from '../../actions';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    if (error) {
      dispatch(removeError());
    }
  }, []);
  
  return (
    <div>
      <LoginForm />
      <p>
        Haven't got an acount yet?
        {<Link to="/signup"> Sign up</Link>} now!
      </p>
      {
        error ? <p>{ error }</p> : null
      }
    </div>
  );
};