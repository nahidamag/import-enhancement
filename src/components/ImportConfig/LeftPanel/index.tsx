import React from 'react';
import FieldForm from './FieldForm';
import { IField } from '../../../interfaces/IDataStructure';

interface IProps {
  fields: IField[];
  onSubmit: (data: any) => void;
}

const LeftPanel: React.FC<IProps> = ({ fields, onSubmit }) => {
  return <FieldForm fields={fields} onSubmit={onSubmit} />;
};

export default LeftPanel;
