import { Store } from "vuex";
import githubStore from "./modules/github";

export default () => new Store({
  modules: {
    githubStore
  }
});
