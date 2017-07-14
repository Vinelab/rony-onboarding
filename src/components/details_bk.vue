<template lang="html">
  <div class="">
    <h1>Details </h1>
    <template v-if='celebrityDetails'>
      <p>ID: {{ celebrityDetails.id }}</p>
      <h2> {{ celebrityDetails.name }} </h2>
      <img :src= 'celebrityDetails.social.accounts.instagram.profile_picture'>
    </template>
    <template v-else>
      loading...
    </template>
  </div>
</template>

<script>
import celebrityStore from '../store/celebrityStore'

export default {
  name: 'details',
  data: () => ({
    celebrityDetails: []
  }),
  created: function () {
    this.getDetails(this.$route.params.id)
  },
  methods: {
    getDetails: function (celebrityId) {
      console.log('getDetails: ' + celebrityId)
      celebrityStore.fetchCelebrityDetails(celebrityId).then(() => {
        this.celebrityDetails = celebrityStore.state.details
        console.log(this.celebrityDetails.id)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="css">
</style>
