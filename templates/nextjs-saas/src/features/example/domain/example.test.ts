import { describe, expect, it } from "vitest";

import { canActivateExample, type ExampleEntity } from "./example";

describe("canActivateExample", () => {
  it("allows draft examples to be activated", () => {
    const example: ExampleEntity = {
      id: "example-1",
      name: "Example",
      status: "draft",
    };

    expect(canActivateExample(example)).toBe(true);
  });

  it("does not allow active examples to be activated again", () => {
    const example: ExampleEntity = {
      id: "example-2",
      name: "Example",
      status: "active",
    };

    expect(canActivateExample(example)).toBe(false);
  });
});
