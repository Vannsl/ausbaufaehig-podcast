import { shallowMount } from "@vue/test-utils";
import Social from "./Social";

describe("Logo", () => {
  const wrapper = shallowMount(Social);

  it("renders the correct markup", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
