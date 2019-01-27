import { shallowMount } from "@vue/test-utils";
import Episode from "./Episode";

describe("Episode", () => {
  const wrapper = shallowMount(Episode);

  it("renders the correct markup", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
