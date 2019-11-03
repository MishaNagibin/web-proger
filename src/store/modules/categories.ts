import Vue from "vue"
import { ActionTree, GetterTree, MutationTree, Module } from "vuex"
import { CATEGORIES } from "@/store/actions";
import { Subcategories } from '@/modeles';
import api from "@/api";

type State = typeof state

const state = {
    categories: undefined as Subcategories[] | undefined,
}

const getters: GetterTree<State, any> = {}

const actions: ActionTree<State, any> = {
    [CATEGORIES.GET]: (ctx, name: string) => {
        api.categories.get(name).then(c => {
            ctx.commit(CATEGORIES.GET, c)
        })
    },
};

const mutations: MutationTree<State> = {
    [CATEGORIES.GET]: (s, c: Subcategories[]) => {
        Vue.set(s, "categories", c)
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
} as Module<State, any>
