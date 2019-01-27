import { shallowMount } from "@vue/test-utils";
import IconCounter from "./IconCounter";

describe("IconCounter", () => {
  const wrapper = shallowMount(IconCounter);

  it("renders the correct markup", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
