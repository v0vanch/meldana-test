<template>
  <div class="select-wrapper" :tabindex="tabindex" @blur="open = false">
  <LabelComponent v-if="label" :label="label" @click="open = !open"/>
    <div class="select" :class="{ open: open }" @click="open = !open">
      <span v-if="defaultValue">
      {{ defaultValue }}
      </span>
      <span v-else>
        {{ selected.label }}
      </span>
    </div>
    <div class="options" :class="{ hidden: !open || hideOptions }">
      <div
          class="option"
          v-for="option of options"
          :key="option.value"
          @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
import LabelComponent from "@/components/LabelComponent";

export default {
  props: {
    hideOptions: {
      type: Boolean,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    options: {
      type: Array,
      required: true,
    },
    defaultValue: {
      type: String,
      required: false,
      default: null,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  components: {
    LabelComponent,
  },
  data() {
    return {
      selected: this.default
          ? this.default
          : this.options.length > 0
              ? this.options[0]
              : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);

  },
};
</script>

<style scoped lang="scss">
.select-wrapper {
  position: relative;
  width: 100%;
}

.select {
  position: relative;
  background-color: $white;
  border-radius: 4px;
  border: 1px solid $grey4;
  padding: 12px 32px 12px 8px;
  cursor: pointer;
  user-select: none;
  height: 40px;

  &:after {
    content: "";
    position: absolute;
    top: 12px;
    right: 8px;
    width: 16px;
    height: 16px;
    @include default-background;
    background-image: url('../assets/icons/select/arrow-down.svg');
  }

  &.open {
    &:after {
      transform: rotateX(180deg);
    }
  }
}

.list-icon .select {
  &:after {
    background-image: url('../assets/icons/select/list.svg');
  }

  &.open {
    &:after {
      transform: none;
    }
  }
}

.options {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 1;
  overflow: hidden;
  box-shadow: 0px 4px 20px $black-02;
  border-radius: 4px;
  background-color: $white;

  &.hidden {
    display: none;
  }
}

.option {
  padding: 8px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: $grey4;
  }
}
</style>
