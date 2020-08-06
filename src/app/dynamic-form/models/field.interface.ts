export interface Validator {
  name: string;
  validator: any;
  message: string;
  callback?: any;
}
export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  type: string;
  value?: any;
  maxLength?: number;
  validations?: Validator[];
  dependency?: Dependency[];
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
