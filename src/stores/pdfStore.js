import { defineStore } from 'pinia'

export const usePdfStore = defineStore('pdf', {
  state: () => ({
    date: '',
    holders: []
  })
})
