import vjs from "validate.js";

export type FieldType = 'title' | 'text'

type Constraint = {
  field: FieldType;
  value: string | number | string[] | number[];
};

export type FieldConstraint = Partial<Record<FieldType, string[]>>;

const VContraints = {
  title: {
    presence: {
      allowEmpty: false,
      message: "^Title cannot be empty!",
    },
    length: {
      minimum: 5,
      maximum: 100,
      tooShort: "^Title must be between 5-100 characters!",
      tooLong: "^Title must be between 5-100 characters!",
    },
    format: {
      pattern: "[a-zA-Z0-9_ ]+",
      flags: "i",
      message: "^ Title can only contain a-z, 0-9 and underscore",
    },
  },
  text: {
    length: {
      maximum: 300,
      tooLong: "^Text must be not exceed 300 characters!",
    }
  },

};



export const validateFields = (toValidate: Constraint[]): FieldConstraint => {
  let _values = {};
  let _contraints = {};

  toValidate.forEach((el) => {
    _values = {
      ..._values,

      [el.field]: el.value,
    };
    _contraints = {
      ..._contraints,
      [el.field]: VContraints[el.field],
    };
  });

  return vjs(_values, _contraints);
};
