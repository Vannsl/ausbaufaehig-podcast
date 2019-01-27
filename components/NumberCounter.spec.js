import { shallowMount } from "@vue/test-utils";
import NumberCounter from "./NumberCounter";

describe("Logo", () => {
  const wrapper = shallowMount(NumberCounter);

  it("renders the correct markup", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
