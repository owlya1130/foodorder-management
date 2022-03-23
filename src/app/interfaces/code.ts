import { CodeType } from "./code-type";

export interface Code {
  uid: string | null;
  type: CodeType | null;
  name: string;
}
