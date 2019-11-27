import { shallowMount } from "@vue/test-utils";
import App from "@/app/javascript/app.vue";
import { createRenderer } from "vue-server-renderer";

describe("app", () => {
    it("success matches snapshot", () => {
      const renderer = createRenderer();
			const wrapper = shallowMount(App);
      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err);
        expect(str).toMatchSnapshot();
      });
    });
});
