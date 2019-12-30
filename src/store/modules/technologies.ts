import Vue from "vue"
import { ActionTree, GetterTree, MutationTree, Module } from "vuex"
import { Technologies } from '@/modeles';
import { TECHNOLOGIES } from "@/store/actions";
import api from "@/api";

type State = typeof state

const state = {
    technologies: undefined as Technologies[] | undefined,
}

const getters: GetterTree<State, any> = {}

const actions: ActionTree<State, any> = {
    [TECHNOLOGIES.GET]: (ctx, technology?: Technologies) => {
        api.technologies.get(technology).then(c => {
            ctx.commit(TECHNOLOGIES.GET, c)
        })
    },
};

const mutations: MutationTree<State> = {
    [TECHNOLOGIES.GET]: (s, c: Technologies[]) => {
        Vue.set(s, "technologies", c)
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
} as Module<State, any>
