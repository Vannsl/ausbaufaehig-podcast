import { shallowMount } from "@vue/test-utils";
import Footer from "./Footer";

describe("Footer", () => {
  const wrapper = shallowMount(Footer);

  it("renders the correct markup", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
