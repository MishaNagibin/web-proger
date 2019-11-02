import Vue from "vue"
import { ActionTree, GetterTree, MutationTree, Module } from "vuex"
import { CATEGORIES_BACKEND } from "@/store/actions";
import { CategoriesBackend } from '@/modeles';
import api from "@/api";

type State = typeof state

const state = {
    categoriesBackend: undefined as CategoriesBackend[] | undefined,
}

const getters: GetterTree<State, any> = {}

const actions: ActionTree<State, any> = {
    [CATEGORIES_BACKEND.GET]: ctx => {
        api.categoriesBackend.get().then(c => {
            ctx.commit(CATEGORIES_BACKEND.GET, c)
        })
    },
};

const mutations: MutationTree<State> = {
    [CATEGORIES_BACKEND.GET]: (s, c: CategoriesBackend[]) => {
        Vue.set(s, "categoriesBackend", c)
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
} as Module<State, any>
