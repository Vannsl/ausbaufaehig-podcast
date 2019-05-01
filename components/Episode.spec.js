import { shallowMount } from "@vue/test-utils";
import item from "../mock/item";
import Episode from "./Episode";

describe("Episode", () => {
  const wrapper = shallowMount(Episode, {
    propsData: {
      episode: item
    }
  });

  it("renders the correct markup", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
