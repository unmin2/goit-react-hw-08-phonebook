import { ContactForm } from '../../ContactForm/ContactForm';
import { ContactList } from '../../ContactList/ContactList';
import { Filter } from '../../Filter/Filter';
import { Container } from './ContactsPage.styled';
import { AiFillPhone } from 'react-icons/ai';
export const ContactsPage = () => {
  return (
    <Container>
     <h1> <AiFillPhone size={30} color="pink" /> Phonebook <AiFillPhone size={30} color="pink" /></h1>
      <ContactForm />
      <h1> Contacts</h1>
      <Filter />
      {/* {isLoading && !error && <div> Loading... </div>} */}
      <ContactList />
    </Container>
  );
};