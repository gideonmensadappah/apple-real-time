import Content from "./components/Content";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Wrapper>
      <Wrapper.Container>
        <Header />
        <Content />
      </Wrapper.Container>
    </Wrapper>
  );
}

export default App;
