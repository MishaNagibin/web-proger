import Vue from "vue"
import { ActionTree, GetterTree, MutationTree, Module } from "vuex"
import { Courses } from '@/modeles';
import { COURSES } from "@/store/actions";
import api from "@/api";

type State = typeof state

const state = {
    courses: undefined as Courses[] | undefined,
}

const getters: GetterTree<State, any> = {}

const actions: ActionTree<State, any> = {
    [COURSES.GET]: (ctx, course?: Courses) => {
        api.courses.get(course).then(c => {
            ctx.commit(COURSES.GET, c)
        })
    },
};

const mutations: MutationTree<State> = {
    [COURSES.GET]: (s, c: Courses[]) => {
        Vue.set(s, "courses", c)
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
} as Module<State, any>
