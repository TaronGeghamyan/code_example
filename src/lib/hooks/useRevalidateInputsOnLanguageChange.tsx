import { useEffect } from 'react';
import { FormInstance } from 'antd';

function useRevalidateInputsOnLanguageChange(form: FormInstance, locale: string) {
  useEffect(() => {
    const errorFields = form.getFieldsError();
    const defaultErrors: string[] = [];

    const erroredFieldNames = errorFields.reduce((prev: string[], current: any) => {
      if (current.errors.length > 0) {
        prev.push(current.name[0]);
      }
      return prev;
    }, defaultErrors);

    if (erroredFieldNames.length > 0) {
      form.validateFields(erroredFieldNames);
    }
  }, [form, locale]);
}

export default useRevalidateInputsOnLanguageChange;
