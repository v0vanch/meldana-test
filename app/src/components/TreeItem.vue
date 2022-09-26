<template>
  <div class="item" :class="{ collapsed, childless }">
    <div class="parent" :class="{ device: item.isDevice }">
      
      <button class="toggle-btn" @click.prevent="collapsed = !collapsed" />
      <div class="parent-wrap" @click="editElement(item)">
      <div class="icon" :class="{ [item.type]: item.type }" />
      <div
        class="label"
        :class="{ root: item.root, company: item.type === 'company' }"
      >
        {{ `${item.label} ${item.IPAddress ? `(${item.IPAddress})` : ""}` }}
        {{}}
        <span
          class="state"
          :style="{
            color: item.state.color,
          }"
          v-if="item.isDevice"
        >
          {{ item.state.text }}
        </span>
      </div>
      <button
        class="edit-btn"
        
        v-if="item.isDevice"
      />
    </div>
      <button 
        class="remove-btn" 
        @click="elementRemoveToCatalog(item)" 
        v-if="item.isDevice" 
      />
    </div>

    <div
      class="children"
      :class="{ collapsed }"
      v-for="children in item.children"
      :key="children.index"
    >
      <tree-item 
        :item="children" 
        @editElement="editElement"
        @elementRemoveToCatalog="elementRemoveToCatalog"
        />
    </div>
  </div>
</template>

<script>
import TreeItem from "./TreeItem";

export default {
  components: {
    TreeItem,
  },
  props: {
    item: {
      required: true,
    },
  },
  computed: {
    childless() {
      return !this.item.children?.length;
    },
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    elementRemoveToCatalog(data) {
      this.$emit("elementRemoveToCatalog", data);
    },
    editElement(data) {
      this.$emit("editElement", data);
    },
  },
};
</script>

<style scoped lang="scss">
.parent {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.parent-wrap {
  display: flex;
  align-items: center
}

.childless .parent {
  margin-bottom: 0;
  margin-left: 24px;
  padding: 8px;
  height: 32px;
  cursor: pointer;

  &:hover {
    background: $grey1;
    border-radius: 4px;

    & .edit-btn,
    & .remove-btn {
      display: block;
    }
  }

  &.device {
    padding-right: 12px;
  }
}

.toggle-btn {
  margin-right: 8px;
  width: 24px;
  height: 24px;
  @include default-background;
  background-image: url("../assets/icons/tree/arrow-down.svg");
}

.collapsed .toggle-btn {
  transform: rotateX(180deg);
}

.childless .toggle-btn {
  display: none;
}

.icon {
  margin-right: 8px;
  width: 16px;
  height: 16px;
  @include default-background;

  &.company {
    background-image: url("../assets/icons/tree/company.svg");
  }

  &.folder {
    background-image: url("../assets/icons/tree/folder.svg");
  }

  &.lock {
    background-image: url("../assets/icons/tree/lock.svg");
  }

  &.controller {
    background-image: url("../assets/icons/tree/controller.svg");
  }

  &.camera {
    background-image: url("../assets/icons/tree/camera.svg");
  }
}

.label {
  &.root {
    font-size: 16px;
    line-height: 19px;
  }
  &.company {
    font-weight: 700;
  }
}

.state {
  margin-left: 5px;
  margin-right: 24px;
}

.edit-btn {
  display: none;
  margin-right: 8px;
  width: 24px;
  height: 24px;
  @include default-background;
  background-image: url("../assets/icons/devices/edit.svg");
  background-size: 16px 16px;
}

.remove-btn {
  display: none;
  margin: -4px 0;
  width: 24px;
  height: 24px;
  @include default-background;
  background-image: url("../assets/icons/devices/trash.svg");
  background-size: 16px 16px;
}

.children {
  margin-left: 28px;
  display: flex;
}

.collapsed .children {
  display: none;
}
</style>
