import { Helmet } from 'react-helmet';
import { Text, Title, Wrapper } from './HomePage.styled';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Wrapper>
        <Title>Phone Book</Title>
        <Text>Welcome to your contacts' book for every day!</Text>
      </Wrapper>
    </>
  );
}
