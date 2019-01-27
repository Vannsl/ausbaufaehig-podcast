import { shallowMount } from "@vue/test-utils";
import Counter from "./Counter";

describe("Counter", () => {
  const wrapper = shallowMount(Counter);

  it("renders the correct markup", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
