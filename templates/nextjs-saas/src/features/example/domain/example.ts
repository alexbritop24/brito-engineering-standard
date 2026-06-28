export type ExampleStatus = "draft" | "active" | "archived";

export type ExampleEntity = {
  id: string;
  name: string;
  status: ExampleStatus;
};

export function canActivateExample(example: ExampleEntity): boolean {
  return example.status === "draft";
}
