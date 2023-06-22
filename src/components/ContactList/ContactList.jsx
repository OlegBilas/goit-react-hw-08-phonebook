import { List, Item, Name, Number } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ id, name, phone }) => (
        <Item key={id}>
          <Name>{name}:</Name>
          <Number>{phone}</Number>
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
