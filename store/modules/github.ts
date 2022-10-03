import { getReposRequest } from "~/services/ApiGithub";
import { ActionContext } from "vuex/types";

const state = {
    repoList: []
};

type State = typeof state;


const mutations = {
    setRepoList(state: State, list: []) {
        state.repoList = list;
    }
}
const actions = {
    repoListRequestAction: async ({ commit }: ActionContext<State, State>) => {
        const results = await getReposRequest();
        if (results.kind === 'ok')
            commit("setRepoList", results.data);
    }
}
const getters = {
    getRepoList: (state: State) => state.repoList
}
export default {
    state: () => state,
    mutations,
    actions,
    getters

}
