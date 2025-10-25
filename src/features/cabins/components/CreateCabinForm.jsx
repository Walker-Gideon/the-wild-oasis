import { useForm } from "react-hook-form";

import FileInput from "/src/ui/FileInput";
import Textarea from "/src/ui/Textarea";
import FormRow from "/src/ui/FormRow";
import Button from "/src/ui/Button";
import Input from "/src/ui/input";
import Form from "/src/ui/Form";

export default function CreateCabinForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin name">
        <Input type="text" id="name" {...register("name")} />
      </FormRow>

      <FormRow label="Maximum Capacity">
        <Input type="number" id="maxCapacity" {...register("maxCapacity")} />
      </FormRow>

      <FormRow label="Regular Price">
        <Input type="number" id="regularPrice" {...register("regularPrice")} />
      </FormRow>

      <FormRow label="Discount">
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount")}
        />
      </FormRow>

      <FormRow label="Description">
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description")}
        />
      </FormRow>

      <FormRow label="Cabin Photo">
        <FileInput id="image" type="file" accept="image/*" />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Add cabin</Button>
      </FormRow>
    </Form>
  );
}
