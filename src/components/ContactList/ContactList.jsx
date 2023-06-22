import { List, Item, Name, Number } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Name>{name}:</Name>
          <Number>{number}</Number>
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
