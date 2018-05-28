<template>
    <div style="height: 2000px;">
        fffffffffffff
    </div>
</template>

<script>
export default {
  mounted() {
    let { username } = this.$route.params;
    //   if (username === 'zaki') {

    //   }else {
    //       this.$router.push('/notfound');
    //   }
    console.log(this.$route.params.username);
  }
};
</script>

<style scoped>
</style>
