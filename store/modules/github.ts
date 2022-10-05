import { getReposRequest } from "~/services/ApiGithub";
import { ActionContext } from "vuex/types";
import { Repositorie } from "../types/github-types";

const state = {
    repoList: [] as Repositorie[]
};

type State = typeof state;


const mutations = {
    setRepoList(state: State, list: Repositorie[]) {
        state.repoList = list.sort((first, second) => (new Date(second.updated_at)).getTime() - (new Date(first.updated_at)).getTime());
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
