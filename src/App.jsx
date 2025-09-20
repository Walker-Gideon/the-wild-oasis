import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/input";
import Heading from "./ui/Heading";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Heading as="h1">The Wild Oasis</Heading>
        <Button>New</Button>
        <Input placeholder="type here.." />
      </div>
    </>
  );
}
