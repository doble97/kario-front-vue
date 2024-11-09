import { describe, test } from "vitest";
import { mount } from "@vue/test-utils";
import InputComponent from "../../../../src/modules/common/components/InputComponent.vue";

describe("<InputComponent />", () => {
  test("should match snapshot", () => {
    const wrapper = mount(InputComponent, {
      props: {
        placeholder: "Insert your name",
        type: "text",
        value: "Jorge",
        name: "name",
      },
    });
    console.log("test--->", wrapper.html());
  });
});
