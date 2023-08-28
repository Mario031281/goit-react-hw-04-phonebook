import {
  ContactListContainer,
  Item,
  List,
  Button,
} from './ContactsList.styled';
export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ContactListContainer>
        {contacts.map(({ id, name, number }) => (
          <List key={id}>
            <Item>{name}</Item>
            <Item>{number}</Item>
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </List>
        ))}
      </ContactListContainer>
    </div>
  );
};
