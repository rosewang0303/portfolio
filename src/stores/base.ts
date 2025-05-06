import { defineStore } from 'pinia';

export const useBaseStore = defineStore('base', {
  state: () => ({
    hasLoaded: false,
  }),
  actions: {
    setHasLoaded(hasLoaded: boolean) {
      this.hasLoaded = hasLoaded;
    },
  },
});
