import { ApplicationDataService } from '../api/services';

export const state = () => ({
    skills: []
});

export const mutations = {
    SET_SKILLS: (state, value) => {
        state.skills = value;
    },
    CLEAR_APPLICATION_DATA: (state) => {
        state.skills = [];
    }
};

export const actions = {
    async getApplicationData ({ commit, dispatch }) {
        dispatch('getSkills');
    },
    async getSkills ({ commit, dispatch }, request) {
        return ApplicationDataService.getSkills().then(response => {
            dispatch('setSkills', response);
        });
    },
    setSkills: ({ commit }, value) => {
        commit('SET_SKILLS', value);
        localStorage.setItem('skills', JSON.stringify(value));
    },
    clearApplicationData: ({ commit }) => {
        commit('CLEAR_APPLICATION_DATA');
        localStorage.removeItem('skills');
    }
};

export const getters = {
    skills (state) {
        var skills = state.skills;

        if (skills.length === 0 && localStorage.getItem('skills')) {
            skills = JSON.parse(localStorage.getItem('skills'));
        }

        return skills;
    }
};