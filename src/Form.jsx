import {createFormGroup, formGroup} from "solar-forms";
import { createEffect } from "solid-js";
const fg = createFormGroup({
  email: "test@normal.com"
})

const [form, setForm] = fg.value;

const Form = () => {
  return (
    <form use:formGroup={fg}>
      <input type="text" formControlName="email" /> 
    </form>
  )
}

createEffect(() => console.log(form()))

function Normal() {
  return (
    <>
      <Show when={true}>
        <Form /> 
      </Show>
    </>
  );
}
export default Normal;
