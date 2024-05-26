import { Select } from 'antd';

const SelectComponent: React.FC = () => {
  return (
    <Select
      size='large'
      defaultValue='option1'
      style={{ width: 120 }}
      options={[
        { value: 'option1', label: 'option1' },
        { value: 'option2', label: 'option2' },
        { value: 'option3', label: 'option3' },
      ]}
    />
  );
};

export default SelectComponent;
