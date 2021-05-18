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
}
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
  background-color: rgb(54, 82, 105);
  width: 150px;
  color: white;
}
.text {
  margin: 0 0;
}
.tittle-of-album {
  background-color: rgb(197, 211, 216);
  color: rgb(5, 93, 116);
  font-weight: bold;
  font-size: 20px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
