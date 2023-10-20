import { ContactForm } from '../../ContactForm/ContactForm';
import { ContactList } from '../../ContactList/ContactList';
import { Filter } from '../../Filter/Filter';
import { Container } from './ContactsPage.styled';
export const ContactsPage = () => {
  return (
    <Container>
      <h1> Phonebook</h1>
      <ContactForm />
      <h1> Contacts</h1>
      <Filter />
      {/* {isLoading && !error && <div> Loading... </div>} */}
      <ContactList />
    </Container>
  );
};