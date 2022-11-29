import { useFormikContext } from "formik";

function SubmitButton() {
  const { values, submitForm } = useFormikContext();
  return (
    <button
      className="px-12 py-2 justify-center w-full bg-[#00963f]"
      onClick={(e) => {e.preventDefault(); submitForm()}}
    >
      Join the community
    </button>
  );
}

export default SubmitButton;
