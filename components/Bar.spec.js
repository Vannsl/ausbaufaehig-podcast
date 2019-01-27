import { shallowMount } from "@vue/test-utils";
import Bar from "./Bar";

describe("Bar", () => {
  const wrapper = shallowMount(Bar);

  it("renders the correct markup", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
