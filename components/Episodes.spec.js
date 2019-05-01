import { shallowMount } from "@vue/test-utils";
import Episodes from "./Episodes";

jest.mock('~/static/feed', () => ({
  ...jest.requireActual('~/static/feed'),
  ...require('../mock/feed'),
}));

describe("Episodes", () => {
  const wrapper = shallowMount(Episodes);

  it("renders the correct markup", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
