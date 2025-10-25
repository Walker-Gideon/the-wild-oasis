import FormRow from "/src/ui/FormRow";
import Input from "/src/ui/input";
import Form from "/src/ui/Form";
import Textarea from "../../ui/Textarea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";

export default function CreateCabinForm() {
  return (
    <Form>
      <FormRow label="Cabin name">
        <Input type="text" id="name" />
      </FormRow>

      <FormRow label="Maximum Capacity">
        <Input type="number" id="maxCapacity" />
      </FormRow>

      <FormRow label="Regular Price">
        <Input type="number" id="regularPrice" />
      </FormRow>

      <FormRow label="Discount">
        <Input type="number" id="discount" />
      </FormRow>

      <FormRow label="Description">
        <Textarea type="number" id="description" />
      </FormRow>

      <FormRow label="Cabin Photo">
        <FileInput id="image" type="file" />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create cabin</Button>
      </FormRow>
    </Form>
  );
}
