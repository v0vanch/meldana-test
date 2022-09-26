<template>
  <div class="wrapper">
    <LabelComponent v-if="label" :label="label">
      <div class="input-block">
        <input
            class="input"
            type="text"
            :name="name"
            :value="value"
            :placeholder="placeholder"
            @input="$emit('input', $event.target.value)"
        />
      </div>
    </LabelComponent>
  </div>
</template>

<script>
import LabelComponent from "@/components/LabelComponent";

export default {
  name: 'CustomInput',
  props: {
    label: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    value: {
      type: String,
      required: true,
    },
  },
  components: {
    LabelComponent,
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
}

.input {
  padding: 12px 32px 12px 8px;
  width: 100%;
  height: 40px;
  background-color: $white;
  border: 1px solid $grey4;
  border-radius: 4px;

  @include placeholder {
    color: $grey2;
  }
}

.search .input-block {
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 12px;
    right: 8px;
    width: 16px;
    height: 16px;
    @include default-background;
    background-image: url('../assets/icons/search.svg');
  }
}
</style>