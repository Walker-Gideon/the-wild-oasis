import FormRow from "/src/ui/FormRow";
import Input from "/src/ui/input";
import Form from "/src/ui/Form";

export default function CreateCabinForm() {
  return (
    <Form>
      <FormRow label="Cabin name">
        <Input type="text" id="name" />
      </FormRow>
    </Form>
  );
}
