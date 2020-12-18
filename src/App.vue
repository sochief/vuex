<template>
  <div class="container text-center pt-5">
    <h1>{{ title }}</h1>
    <hr />
    <app-counter :counter="counter"></app-counter>
    <app-second-counter></app-second-counter>
    <hr />
    <app-actions @counterUpdated="counter += $event"></app-actions>
  </div>
</template>

<script>
import Actions from "./Actions";
import Counter from "./Counter";
import SecondCounter from "./SecondCounter";

export default {
  components: {
    appCounter: Counter,
    appActions: Actions,
    appSecondCounter: SecondCounter,
  },
  computed: {
    title() {
      return this.$store.getters.title;
    },
  },
};
</script>

<style>
</style>
