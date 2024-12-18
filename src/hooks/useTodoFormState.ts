import { useState } from "react";

const useFormState = () => {
  const [formState, setFormState] = useState({
    input: "",
    dueDate: null as Date | null,
  });

  const resetForm = () => setFormState({ input: "", dueDate: null });

  return { formState, setFormState, resetForm };
};

export default useFormState;
