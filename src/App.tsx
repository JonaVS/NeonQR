import { Container } from "@chakra-ui/react";
import QRBuilder from "./components/QRBuilder/QRBuilder";

function App() {
  return (
    <Container maxW="container.lg" paddingX={5}>
      <QRBuilder/>
    </Container>
  );
}

export default App;
