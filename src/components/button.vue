<template>
  <div class="nav">
    <div class="btn-group">
      <div
        class="btn-item"
        :class="{ btnActive: button.isActive }"
        v-for="button in buttons"
        :key="button.id"
        @click.prevent="changeStyle(button)"
      >
        {{ button.value }}
      </div>
    </div>
    <div class="pages-group">
      <div
        class="page-item"
        :class="{ pageActive: page.isActive }"
        v-for="page in pages"
        :key="page.key"
      >
        {{ page.number }} {{ page.type }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ButtonItem",
  data() {
    return {
      buttons: [
        { key: 1, value: "PRINT EDITION", isActive: false },
        { key: 2, value: "MANAGER", isActive: false },
        { key: 3, value: "DIGITAL EDITION", isActive: false },
      ],
      pages: [
        { key: 1, number: 48, type: "pages", isActive: false },
        { key: 2, number: 26, type: "sheets", isActive: false },
        { key: 3, number: 26, type: "screens", isActive: false },
      ],
    };
  },
  methods: {
    changeStyle: function (item) {
      this.changeActiveBtn();
      item.isActive = !item.isActive;
      this.changeActivePage();
    },
    changeActiveBtn: function () {
      this.buttons.forEach((button) => {
        button.isActive = false;
      });
    },
    changeActivePage: function () {
      console.log(this.buttons[2].isActive);
      const keyBtn = this.buttons.find((button) => button.isActive).key;

      this.pages.forEach(
        (page) =>
          (page.isActive = page.key === keyBtn ? !page.isActive : page.isActive)
      );
    },
  },
};
</script>
<style scoped>
.nav {
  display: flex;
  flex-direction: column;
}
.btn-group {
  display: flex;
  justify-content: center;
  border-top: 1px solid rgb(160, 157, 157);
}
.pages-group {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(160, 157, 157);
  border-top: 1px solid rgb(160, 157, 157);
  line-height: 30px;
  background-color: rgb(245, 240, 240);
}
.btn-item {
  width: 135px;
  border: 1px solid rgb(10, 76, 114);
  border-radius: 7px;
  border-top: 2px solid rgb(10, 76, 114);
  border-bottom: 2px solid rgb(10, 76, 114);
  margin: 15px;
  background-color: white;
  font-size: 14px;
  line-height: 30px;
  position: relative;
}
.btn-item:not(:last-child)::before {
  content: "";
  position: absolute;
  right: -15px;
  top: 50%;
  transform: translate(0, -50%);
  min-height: 28px;
  border-right: 1px solid rgb(160, 157, 157);
}
.page-item {
  width: 135px;
  margin: 0px 15px;
  position: relative;
  color: rgb(54, 82, 105);
}
.page-item:not(:last-child)::before {
  content: "";
  position: absolute;
  right: -15px;
  top: 50%;
  transform: translate(0, -50%);
  min-height: 14px;
  border-right: 1px solid rgb(160, 157, 157);
}
.btnActive {
  background-color: rgb(54, 82, 105);
  color: white;
}
.pageActive {
  text-decoration: underline;
}
</style>
