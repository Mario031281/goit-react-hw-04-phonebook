import { ContactsList } from './ContactsList/ContactsList';
import { FormContact } from './Form/Form';
import initialContacts from '../data/initialContacts.json';
import { Sections } from './Sections/Sections';
import { FilterContact } from './Filter/Filter';

import { GlobalStyle } from './GlobalStyled';
import { useState, useEffect } from 'react';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return initialContacts;
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  //запис контактів в localStorage
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeContact = event => {
    setFilter(event.target.value);
  };

  const handleDelete = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const addContact = newContact => {
    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (!isInContacts) {
      setContacts(prevState => [...prevState, newContact]);
    } else {
      alert(`${newContact.name.toLowerCase()} is already in contacts`);
      return;
    }
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <FormContact onAdd={addContact} />
      <Sections />
      <FilterContact contactFilter={filter} onChangeContact={changeContact} />
      <ContactsList onDelete={handleDelete} contacts={visibleContacts} />
      <GlobalStyle />
    </div>
  );
};
