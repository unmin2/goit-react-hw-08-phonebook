import { NavLink } from 'react-router-dom';
import { NavigationStyled , Button} from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationStyled>
      <NavLink to="/contacts"><><Button>Contacts</Button></></NavLink>
      <NavLink to="/"><><Button>Log in</Button></></NavLink>
    </NavigationStyled>
  );
};