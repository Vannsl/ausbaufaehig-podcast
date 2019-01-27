import { shallowMount } from "@vue/test-utils";
import Episodes from "./Episodes";

describe("Episodes", () => {
  const wrapper = shallowMount(Episodes);

  it("renders the correct markup", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
