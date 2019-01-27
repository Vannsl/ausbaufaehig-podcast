import { shallowMount } from "@vue/test-utils";
import About from "./About";

describe("About", () => {
  const wrapper = shallowMount(About);

  it("renders the correct markup", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
