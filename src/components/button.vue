<template>
  <div class="nav">
    <div class="btn-group">
      <div
        class="btn-item"
        :class="{ btnActive: button.isActive }"
        v-for="button in buttons"
        :key="button.id"
        @click="pushRouter(button)"
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
        {
          key: 1,
          value: "PRINT EDITION",
          name: "print",
          isActive: false,
        },
        {
          key: 2,
          value: "MANAGER",
          name: "manager",
          isActive: true,
        },
        {
          key: 3,
          value: "DIGITAL EDITION",
          name: "digital",
          isActive: false,
        },
      ],
      pages: [
        { key: 1, number: 48, type: "Pages", name: "print", isActive: false },
        { key: 2, number: 26, type: "Sheets", name: "manager", isActive: true },
        {
          key: 3,
          number: 26,
          type: "Screens",
          name: "digital",
          isActive: false,
        },
      ],
    };
  },
  watch: {
    "$route.path"() {
      this.setActiveButton();
    },
  },
  methods: {
    pushRouter(item) {
      this.$router.push(`/${item.name}`);
    },
    setActiveButton() {
      const routeName = this.$route.path.split("/")[1];
      this.buttons.forEach((button) => {
        if (routeName === button.name) {
          button.isActive = true;
        } else {
          button.isActive = false;
        }
      });
      this.pages.forEach((page) => {
        page.isActive = false;
        if (routeName === page.name) {
          page.isActive = true;
        }
      });
    },
  },
  mounted() {
    this.setActiveButton();
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
  background-color: rgb(244, 244, 244);
}
.btn-item {
  width: 135px;
  border: 1px solid rgb(72, 131, 170);
  border-radius: 7px;
  border-top: 2px solid rgb(72, 131, 170);
  border-bottom: 2px solid rgb(72, 131, 170);
  margin: 15px;
  background-color: white;
  color: rgb(171, 193, 205);
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
  color: rgb(171, 193, 205);
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
  background-color: rgb(66, 115, 141);
  color: white;
}
.pageActive {
  font-weight: bold;
  color: rgb(71, 119, 144);
}
</style>
