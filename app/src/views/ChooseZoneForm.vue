<template>
  <form class="form">
    <div class="zone-list">
      <div v-for="item in zoneList" :key="item.index">
        <tree-item :item="item" @editElement="selectValue"/>
      </div>
    </div>
    <div class="footer">
      <button class="choose-btn" type="button">
        Выбрать
      </button>
      <button class="cancel-btn" type="button" @click="closePopUp">
        Отменить
      </button>
    </div>
  </form>
</template>

<script>
import TreeItem from "@/components/TreeItem";
import {TreeZoneList} from '@/constants/devices';

export default {
  components: {
    TreeItem,
  },
  data() {
    return {
      zoneList: TreeZoneList,
      
    }
  },
 
  methods: {
    closePopUp() {
      this.$emit('closePopUp');
    },
    selectValue(data) {
      this.closePopUp();
      this.$emit('selectValue', data);
    }
  }
}
</script>

<style scoped lang="scss">


.zone-list {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}

.footer {
  margin-left: 55px;
  display: flex;
}

.choose-btn {
  @include default-button;
  margin-right: 16px;
}

.cancel-btn {
  @include cancel-button;
}
</style>