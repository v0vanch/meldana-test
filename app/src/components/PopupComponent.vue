<template>
  <div class="wrapper" :class="{ visible: visibility }" @click="closePopUp">
    <div class="popup" :style="widthPopUp">
      <div class="header">
        <div class="title">
          {{ title }}
        </div>
        <!-- <button
            class="close-btn"
            @click="onClose()"
        /> -->
      </div>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visibility: {
      type: Boolean,
      required: true,
      default: false,
    },
    onClose: {
      type: Function,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    width: {
      type: String,
      default: "640",
    },
  },
  computed: {
    widthPopUp() {
      return {
        'width': this.width + "px"
      }
    }
  },
  methods: {
    closePopUp(event) {
      if(event.target.className == "wrapper visible") this.onClose()    
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  padding: 58px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: $black-06;

  &.visible {
    display: flex;
  }
}

.popup {
  padding: 32px;
  // width: $size;
  background-color: $white;
  box-shadow: 0px 4px 20px $black-02;
  border-radius: 16px;
}

.header {
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
}

.close-btn {
  width: 24px;
  height: 24px;
  @include default-background;
  background-image: url('../assets/icons/popup/close.svg');
}

</style>
