<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
article,
aside,
blockquote,
body,
button,
dd,
details,
div,
dl,
dt,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
hr,
input,
legend,
li,
menu,
nav,
ol,
p,
section,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
html {
  display: block;
  height: 100%;
  width: 100%;
  font-size: 12px;
  /* overflow: auto; */
}
body {
  height: 100%;
  width: 100%;
  display: block;
}
#app {
  height: 100%;
}
</style>
