import Vue from "vue"
import { ActionTree, GetterTree, MutationTree, Module } from "vuex"
import { Categories } from '@/modeles';
import { CATEGORIES } from "@/store/actions";
import api from "@/api";

type State = typeof state

const state = {
    categories: undefined as Categories[] | undefined,
}

const getters: GetterTree<State, any> = {}

const actions: ActionTree<State, any> = {
    [CATEGORIES.GET]: ctx => {
        api.categories.get().then(c => {
            ctx.commit(CATEGORIES.GET, c)
        })
    },
};

const mutations: MutationTree<State> = {
    [CATEGORIES.GET]: (s, c: Categories[]) => {
        Vue.set(s, "categories", c)
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
} as Module<State, any>
