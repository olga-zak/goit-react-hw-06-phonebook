import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { GlobalStyles } from './GlobalStyles';
import { Header, SecondaryHeader } from './App.styled';

export const App = () => {
  return (
    <>
      <Header>Phonebook</Header>
      <ContactForm />
      <SecondaryHeader>Contacts</SecondaryHeader>
      <Filter />
      <ContactList />
      <GlobalStyles />
    </>
  );
};
