import { Input, Label } from './Filter.styled';
import { setFilter } from '../redux/contacts/filterSlice';
import { useDispatch, useSelector } from 'react-redux'; 
import { selectFilter } from '../redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch(); 
  const filter = useSelector(selectFilter); 

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value.trim()))} 
      />
    </Label>
  );
};
