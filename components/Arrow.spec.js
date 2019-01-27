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

  describe("when the direction is up", () => {
    it("sets the margin top to 7px", () => {
      expect(wrapper.vm.marginTop).toBe("7px");
    });
  });

  describe("when the direction is any other than up", () => {
    beforeEach(() => {
      wrapper.setProps({
        direction: "down",
      });
    });

    it("sets the margin top to 7px", () => {
      expect(wrapper.vm.marginTop).toBe("");
    });
  });
});
