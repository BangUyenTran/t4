<template>
  <div class="digital">
    <div class="section" v-for="item in data" :key="item.id">
      <div class="left">
        <div class="color-icon">
          <font-awesome-icon
            icon="circle"
            :style="{ color: item.color }"
          ></font-awesome-icon>
        </div>
        <div class="caret">
          <font-awesome-icon icon="caret-right"></font-awesome-icon>
        </div>
        <div class="content">{{ item.content }}</div>
      </div>

      <div class="right">
        <div class="bar">
          <div
            class="bar-span bar1"
            :style="{
              'background-image': `linear-gradient(to right,${item.color} 15%,rgb(211,211,211) 15%)`,
            }"
          ></div>
          <div class="bar-span bar2"></div>
          <div class="bar-span bar3"></div>
        </div>
        <div class="day">{{ item.day }}</div>
        <div class="icon">
          <font-awesome-icon
            class="dot-icon"
            icon="ellipsis-h"
          ></font-awesome-icon>
        </div>
      </div>
    </div>
    <div class="btn">
      <div class="btn-expand">Expand All Sections</div>
      <div class="btn-add">
        <font-awesome-icon icon="plus-circle" />
        Add a Section
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "DigitalEdition",
  computed: {
    data: function () {
      return store.state.data;
    },
  },
  methods: {
    getDataStore() {
      store.dispatch("getData");
    },
  },
  mounted() {
    this.getDataStore();
  },
};
</script>

<style scope>
.digital {
  background-color: rgb(244, 244, 244);
  padding: 10px 15px;
}
.section {
  background-color: white;
  margin: 10px;
  padding: 15px 5px;
  display: flex;
  justify-content: space-between;
}
.left {
  display: flex;
  margin: 0 25px;
  justify-content: center;
  align-items: center;
}
.right {
  display: flex;
  justify-content: center;
  align-items: center;
}
.color-icon {
  margin: 0 5px;
}
.caret {
  margin: 0 5px;
  font-size: 20px;
}
.content {
  margin: 0 2px;
}
.bar {
  width: 180px;
  height: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  margin: 0 10px;
}
.bar-span {
  background-color: rgb(211, 211, 211);
  width: 60px;
  height: 100%;
}
.bar2 {
  margin: 0 2px;
}
.day {
  margin: 0 5px;
}
.icon {
  border-radius: 50%;
  border: 1px solid rgb(148, 147, 147);
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(148, 147, 147);
}
.btn {
  display: flex;
}
.btn-expand {
  width: 155px;
  border: 1px solid rgb(66, 115, 141);
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
}
.btn-add {
  width: 155px;
  border-radius: 5px;
  background-color: rgb(66, 115, 141);
  margin: 10px;
  padding: 5px;
  color: white;
}
</style>