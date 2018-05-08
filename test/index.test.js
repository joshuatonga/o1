import log from "../src";

describe("log", () => {
  it("returns one line log", () => {
    const obj = {
      hello: "world",
      hi: "doge"
    };
    expect(log(obj)).toBe("hello: world, hi: doge");
  });
  it("returns empty string if args is undefined", () => {
    expect(log()).toBe("");
  });
});
