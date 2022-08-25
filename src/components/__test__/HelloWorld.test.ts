import { describe, test, vi, expect } from "vitest";
import { render } from "@testing-library/vue";
import { useRoute } from "vue-router";

import HelloWorld from "../HelloWorld.vue";
import { logPath } from "../helper";

vi.mock("vue-router", () => ({
  useRoute: vi.fn(() => ({
    path: "mocked",
  })),
}));

vi.mock("../helper", () => ({
  logPath: vi.fn(),
}));

describe("HelloWorld.vue", () => {
  test("renders without error", () => {
    render(HelloWorld);
    expect(vi.mocked(useRoute)).toHaveBeenCalledOnce();
    expect(vi.mocked(logPath)).toHaveBeenCalledWith("mocked");
  });
});
