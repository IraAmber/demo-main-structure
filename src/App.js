import NavRoutes from "./Routes";
import NavBar from "./components/NavBar/NavBar";
import { Container, Header, Main } from "./App.styled";

function App() {
  return (
    <div>
      <Header>
        <Container>
          <NavBar />
        </Container>
      </Header>
      <Main>
        <NavRoutes />
      </Main>
      <footer>{/* <Container><Footer /></Container> */}</footer>
    </div>
  );
}

export default App;
