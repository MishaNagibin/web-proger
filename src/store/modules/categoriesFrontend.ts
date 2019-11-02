import Vue from "vue"
import { ActionTree, GetterTree, MutationTree, Module } from "vuex"
import { CATEGORIES_FRONTEND } from "@/store/actions";
import { CategoriesFrontend } from '@/modeles';
import api from "@/api";

type State = typeof state

const state = {
    categoriesFrontend: undefined as CategoriesFrontend[] | undefined,
}

const getters: GetterTree<State, any> = {}

const actions: ActionTree<State, any> = {
    [CATEGORIES_FRONTEND.GET]: ctx => {
        api.categoriesFrontend.get().then(c => {
            ctx.commit(CATEGORIES_FRONTEND.GET, c)
        })
    },
};

const mutations: MutationTree<State> = {
    [CATEGORIES_FRONTEND.GET]: (s, c: CategoriesFrontend[]) => {
        Vue.set(s, "categoriesFrontend", c)
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
} as Module<State, any>
