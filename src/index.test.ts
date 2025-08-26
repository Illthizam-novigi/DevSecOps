import { describe, expect, test } from "@jest/globals";

function greet(name: string): string {
  return `Hello, ${name}! 👋`;
}

describe("greet", () => {
  test("should greet properly", () => {
    expect(greet("Test")).toBe("Hello, Test! 👋");
  });
});
