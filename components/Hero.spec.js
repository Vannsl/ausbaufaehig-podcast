import { shallowMount } from "@vue/test-utils";
import Hero from "./Hero";

describe("Hero", () => {
  const wrapper = shallowMount(Hero);

  it("renders the correct markup", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
