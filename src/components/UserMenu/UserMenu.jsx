import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/auth/selectors';
import { logout } from '../redux/auth/operations';
import { Button } from './UserMenu.styled';
export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div>
      <h1>Welcome user:{user.name}</h1>
      <Button type="button" onClick={handleClick}>
        Log Out
      </Button>
    </div>
  );
};