import { Input } from 'antd';

const InputComponent = ({ value, onChange, disabled, placeholder, addonAfter, className }) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`${className}`}
      placeholder={placeholder}
      addonAfter={addonAfter}
    />
  );
};

export default InputComponent;