import { ContactsList } from './ContactsList/ContactsList';
import { FormContact } from './Form/Form';
import initialContacts from '../data/initialContacts.json';
import { Sections } from './Sections/Sections';
import { FilterContact } from './Filter/Filter';
import { Component } from 'react';
import { GlobalStyle } from './GlobalStyled';

export class App extends Component {
  // state = {
  //   contacts: initialContacts,
  //   filter: '',
  };
  // componentDidMount() {
  //   const savedContacts = localStorage.getItem('contacts');
  //   if (savedContacts !== null) {
  //     this.setState({
  //       contacts: JSON.parse(savedContacts),
  //     });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  }
  // changeContact = event => {
  //   this.setState({ filter: event.target.value });
  // };
  // handleDelete = contactId => {
  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.filter(
  //         contact => contact.id !== contactId
  //       ),
  //     };
  //   });
  // };

  // addContact = newContact => {
  //   const isInContacts = this.state.contacts.some(
  //     contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //   );

  //   if (!isInContacts) {
  //     this.setState(prevState => {
  //       return {
  //         contacts: [...prevState.contacts, newContact],
  //       };
  //     });
  //   } else {
  //     alert(`${newContact.name} is already in contacts`);
  //     return;
  //   }
  // };

  render() {
    const { filter } = this.state;
    // const visibleContacts = this.state.contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(filter.toLowerCase())
    // );

    // return (
    //   <div>
    //     <FormContact onAdd={this.addContact} />
    //     <Sections />
    //     <FilterContact
    //       contactFilter={filter}
    //       onChangeContact={this.changeContact}
    //     />
    //     <ContactsList onDelete={this.handleDelete} contacts={visibleContacts} />
    //     <GlobalStyle />
    //   </div>
    );
  }
}
