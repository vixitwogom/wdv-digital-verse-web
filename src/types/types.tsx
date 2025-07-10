// types.ts
export type FieldType = "text" | "email" | "tel" | "textarea" | "select";

export interface Option {
  label: string;
  value: string;
}

export interface FieldConfig {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  options?: Option[]; // Only for select fields
}
