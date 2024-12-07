import { Button } from "./components/Button";
import TextAreaInput from "./components/TextAreaInput";
import TextInput from "./components/TextInput";

function App() {
  return (
    <div>
      <h1 className="text-xl">AG Sistemas Challenge</h1>
      <form>
        <TextInput inputLabel="Nome" />
        <TextInput inputLabel="Preço" />
        <TextAreaInput inputLabel="Preço" />
        <Button buttonLabel="Cadastrar produto" />
      </form>
    </div>
  );
}

export default App;
