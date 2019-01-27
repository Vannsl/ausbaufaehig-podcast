import { shallowMount } from "@vue/test-utils";
import Index from "./index";

describe("Index", () => {
  const wrapper = shallowMount(Index);

  it("renders the correct markup", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("initializes a repeating class list", () => {
    expect(wrapper.vm.classList).toBeDefined();
  });
});
