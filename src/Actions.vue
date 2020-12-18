<template>
  <div>
    <button class="btn btn-success" @click="updateCounter(1)">Add</button>
    <button class="btn btn-danger" @click="updateCounter(-q)">Substract</button>
  </div>
</template>


<script>
export default {
  methods: {
    updateCounter(val) {
      //   this.$emit("counterUpdated", val);
      //   this.$store.commit("changeCounter", val);
      this.$store.dispatch("asynchChangeCounter", {
        counterValue: val,
        timeoutDelay: 200,
      });
    },
  },
};
</script>

<style scoped></style>