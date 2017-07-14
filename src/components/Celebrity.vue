<template lang="html">
  <div class="celebrities">
    <h1>Celebrities </h1>
    <template v-if="this.celebrities.length > 0">
    <div v-for="celebrity in celebrities" class="mdl-card mdl-shadow--4dp celebrity-item">
      <div class="mdl-card celebrity-info">
        <div class="mdl-card__title info-title">
          <router-link :to="{ name: 'Details', params: { id: celebrity.id } }">
            <h2 class="mdl-card__title-text">{{ celebrity.name }}</h2>
          </router-link>
        </div>
        <div class="mdl-card__supporting-text info-content">
          ID: {{ celebrity.id }}
        </div>
        <div class="mdl-card__supporting-text info-content">
          status: {{ celebrity.registration_status }}
        </div>
      </div>

      <div class="md-card celebrity-accounts">
        <div class="mdl-card__title accounts-title">
          <h2 class="mdl-card__title-text">Accounts</h2>
        </div>
        <div class="accounts-listing">
          <div v-if='celebrity.social.accounts.facebook' class="account-info" >
            <div class="account-logo">
              <img alt="follow me on facebook" src="//login.create.net/images/icons/user/facebook_40x40.png" border=0>
            </div>
            <div class="user_name">
              <p>{{ celebrity.social.accounts.facebook.name }}</p>
            </div>
          </div>
          <div class="account-info" v-if='celebrity.social.accounts.instagram'>
            <div class="account-logo">
              <img alt="follow me on instagram" src="https://c866088.ssl.cf3.rackcdn.com/assets/instagram40x40.png" border=0>
            </div>
            <div class="user_name">
              <p>{{ celebrity.social.accounts.instagram.username }}</p>
            </div>
          </div>
          <div class="account-info" v-if='celebrity.social.accounts.youtube'>
            <div class="account-logo">
              <img alt="follow me on youtube" src="https://c866088.ssl.cf3.rackcdn.com/assets/youtube40x40.png" border=0>
            </div>
            <div class="user_name">
              <p>{{ celebrity.social.accounts.youtube.name }}</p>
            </div>
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
  celebrityStore,
  name: 'celebrity',
  data: () => ({
    celebrities: []
  }),
  created: function () {
    this.getCelebrities()
  },
  methods: {
    getCelebrities: function () {
      // console.log('getCelebrities')
      celebrityStore.fetchCelebrities().then(() => {
        this.celebrities = celebrityStore.state.celebrities
        console.log(this.celebrities)
      })
    }
  }
}
</script>

<style scoped>
  h1{
    width: 100%;
  }
  .mdl-card{
    background-color: lightgrey;
  }
  .celebrity-item{
    display: flex;
    justify-content:center;
    box-sizing: border-box;
    flex-basis: 80%;
    flex-flow: row;

    height: 200px;
    margin-bottom: 20px;
    /*background-color: rgba(56, 82, 85, 0.8);*/
  }
  a{
    font-style: normal;
    text-decoration: none;
  }
  a:hover{
    color: rgb(75,75,75);
  }
  .celebrities{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  .celebrity-info{
    flex-basis: 49%;
    box-sizing: border-box;
  }
  .info-title{
    justify-content: center;
  }
  .celebrity-accounts{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    flex-basis: 48%;
    /*box-sizing: border-box;*/
  }
  .accounts-title{
    margin-top: auto;
    justify-content: center;
    height: 35px;
    width: 100%;
  }
  .accounts-listing{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    height: 55%;
  }
  .account-info{
    display: flex;
    flex-flow: row wrap;
    align-items: baseline;
    justify-content: space-around;
    min-width: 50px;
    }
    .account-logo{
      margin-top: 10px;
      width: 100%;
    }
</style>
