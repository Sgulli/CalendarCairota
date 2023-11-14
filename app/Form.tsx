// GenericForm.tsx
import React, { ReactNode, FormEvent, useState } from "react";

type HTTPMethods = "GET" | "POST" | "PUT" | "DELETE";

interface GenericFormProps<T> {
  onSubmit: (formData: T) => void;
  action: string;
  method?: HTTPMethods;
  children: ReactNode;
}

interface FormElementProps {
  value: string;
  name: string;
  onChange: (value: any) => void;
}

const GenericForm = <T extends Record<string, any>>({
  onSubmit,
  action,
  method = "GET",
  children,
}: GenericFormProps<T>) => {
  const [formData, setFormData] = useState<T>({} as T);

  const handleChange = (fieldName: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);

    onSubmit(formData);
  };

  const addPropsToChildren = (child: React.ReactElement<FormElementProps>) => {
    return React.cloneElement(child, {
      onChange: (value: any) => handleChange(child.props.name, value),
      value: formData[child.props.name] || "",
    });
  };

  return (
    <form action={action} method={method} onSubmit={handleSubmit}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return addPropsToChildren(
            child as React.ReactElement<FormElementProps>
          );
        }
        return child;
      })}
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Calcola
        </button>
      </div>
    </form>
  );
};

export default GenericForm;
