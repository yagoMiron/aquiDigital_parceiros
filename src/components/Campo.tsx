import { FunctionComponent } from "react";

interface CampoProps {
  title: string;
  type: "text" | "email" | "tel" | "password";
  placeholder: string;
  length: number;
  required: boolean;
}

const Campo: FunctionComponent<CampoProps> = ({
  title,
  type,
  placeholder,
  length,
  required,
}) => {
  const nome = title.toLowerCase().replace(" ", "_");

  return (
    <div className="flex flex-col w-full">
      <label className="text-left mx-1.5" htmlFor={nome}>
        {title}:
      </label>
      <input
        className="w-full rounded-md border border-blue-950 text-blue-950 text-base py-2.5 px-4"
        type={type}
        name={nome}
        id={nome}
        placeholder={placeholder}
        maxLength={length}
        required={required}
      />
    </div>
  );
};

export default Campo;
