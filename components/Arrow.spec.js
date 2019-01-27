import { shallowMount } from "@vue/test-utils";
import Arrow from "./Arrow";

describe("Arrow", () => {
  const wrapper = shallowMount(Arrow, {
    propsData: {
      direction: 'up'
    },
  });

  it("renders the correct markup", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
