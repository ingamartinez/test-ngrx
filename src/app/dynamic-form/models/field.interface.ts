export interface Validator {
  name: string;
  validator: any;
  message: string;
}
export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  type: string;
  value?: any;
  disabled?: boolean;
  validations?: Validator[];
  dependency?: Dependency[];
  extraFields?: FieldConfig[];
}
export interface Dependency {
  type?: TypeDependency;
  id?: string;
  endpoint?: string;
}

export enum TypeDependency {
  LoadService = 'loadService',
  HideShow = 'hideShow'
}
