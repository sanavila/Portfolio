<template>
    <aside>
    <ol v-if="!isLoad">
        <li v-for="(repo, index) of repoList" :key="`repo_${index}`">
            {{ repo.name }}
        </li>
    </ol>
    <section v-else>
        <span>Carregando Repositórios</span>
    </section>
    </aside>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

    export default {
        name: "Repositories",
        data() {
            return {
                isLoad: false,
            }
        },
        computed: {
            ...mapGetters({
                repoList: "getRepoList"
            })
        },
        methods: {
            ...mapActions({
                listRequest: "repoListRequestAction"
            }),
            async loadRepoList () {
                this.isLoad = true;
                await this.listRequest();
                this.isLoad = false;
            }
        },
        beforeMount() {
            this.loadRepoList();    
        }
    }
</script>