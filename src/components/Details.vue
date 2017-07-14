<template lang="html">
  <div class="">
    <h1>Details </h1>
    <template v-if='celebrityDetails'>
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
          <div class="mdl-card md-shadow--6dp details-card">
            <div class="mdl-card__title">
              <h2 class="mdl-card__title-text">{{ celebrityDetails.name }}</h2>
            </div>
            <div class="mdl-card__supporting-text">
              ID: {{ celebrityDetails.id }}
            </div>
            <div class="mdl-card__actions mdl-card--border">
              <a href="/" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Home
              </a>
            </div>
          </div>
        </div>
      </div>
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
.mdl-card{
  background-color: lightgrey;
}
.details-card.mdl-card{
  width: 600px;

}
.details-card > .mdl-card__title{
  color: #fff;
  height: 100px;
  background-color: grey;
}
</style>
