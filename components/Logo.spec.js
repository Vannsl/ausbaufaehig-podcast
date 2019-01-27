import { shallowMount } from "@vue/test-utils";
import Logo from "./Logo";

describe("Logo", () => {
  const wrapper = shallowMount(Logo);

  it("renders the correct markup", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
