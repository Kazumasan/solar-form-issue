import {createFormGroup, formGroup} from "solar-forms";

function Normal() {
  const fg = createFormGroup({
    email: "test@normal.com"
  })
  return (
    <>
      <Show when={true}>
        <form use:formGroup={fg}>
          <input type="text" formControlName="email" /> 
        </form>
      </Show>
    </>
  );
}
export default Normal;
