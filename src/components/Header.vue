<template>
  <div class="header">
    <div class="exit-btn">
      <font-awesome-icon icon="long-arrow-alt-left" />
      <div class="text">Exit Yearbook Builder</div>
    </div>
    <div class="tittle-of-album">SMS Yearbook 2021</div>
    <div class="help-btn">
      <font-awesome-icon icon="question-circle" />
      <div class="text">Help</div>
    </div>
  </div>
</template> 
<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.exit-btn,
.help-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(66, 115, 141);
  width: 100px;
  color: white;
}
.text {
  margin: 0 0;
}
.tittle-of-album {
  background-color: rgb(195, 210, 217);
  color: rgb(72, 131, 170);
  font-size: 20px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
