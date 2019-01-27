import { shallowMount } from "@vue/test-utils";
import Episode from "./Episode";

describe("Episodeu", () => {
  const wrapper = shallowMount(Episode, {
    propsData: {
      item: {}
    }
  });

  it("renders the correct markup", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
