import type { UseFormRegister } from 'react-hook-form';

type Props = {
  name: string;
  errors: boolean;
  label?: string;
  max?: number;
  maxLength?: number;
  min?: number;
  minLength?: number;
  pattern?: RegExp;
  placeholder?: string;
  register: UseFormRegister<any>;
  required?: boolean;
  type?: 'text' | 'number';
  variant?: 'textarea' | 'input';
};

const classes = {
  input:
    'bg-gray-500 p-6 rounded-2xl placeholder-gray-700 text-xl outline-blue-500 max-h-52 resize-none',
  label: 'flex flex-col gap-2 text-2xl w-full',
};

const Input = ({
  name,
  errors,
  label,
  max,
  maxLength,
  min,
  minLength,
  pattern,
  placeholder,
  register,
  required,
  type = 'text',
  variant = 'input',
}: Props) => {
  const className =
    classes.input + (errors ? ' border-2 border-red-500 outline-red-500' : '');
  const attr = {
    ...register(name, {
      max,
      maxLength,
      min,
      minLength,
      pattern,
      required: required && 'Это поле обязательно',
    }),
    className,
    maxLength,
    placeholder,
  };

  return (
    <label className={classes.label}>
      <span>
        {label}
        {required && <span className="text-blue-500">*</span>}
      </span>

      {variant === 'input' && (
        <input
          {...attr}
          type={type}
        />
      )}

      {variant === 'textarea' && <textarea {...attr} />}
    </label>
  );
};

export default Input;
