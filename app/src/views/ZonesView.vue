<template>
  <PageContentWrapper>
    <div class="devices-wrapper">
      <PageTitle title="Структурная схема. Зоны" />
      <div class="filter-panel">
        <div class="filter-item">
          <InputComponent
            label="Поиск"
            name="search"
            value=""
            placeholder="Поиск"
            class="search"
          />
        </div>
        <div class="filter-item">
          <SelectComponent :options="orgOptions" label="Организации" />
        </div>
        <div class="filter-item">
          <SelectComponent
            :options="zoneOptions"
            label="Зона"
            class="list-icon"
            :hide-options="true"
            @click="zonePopupVisibility = true"
          />
        </div>
        <div class="filter-item">
          <SelectComponent :options="typeOptions" label="Тип устройства" />
        </div>
      </div>

      <div class="device-tree-list">
        <div v-for="item in treeList" :key="item.index">
          <tree-item-zones
            :item="item"
            @elementRemoveToCatalog="showDeletPopUp"
            @editElement="showEditPopUp"
          />
        </div>
      </div>
    </div>
  </PageContentWrapper>
  <PopupComponent
    title="Добавить устройство"
    :visibility="addPopupVisibility"
    :onClose="closeAddPopup"
  >
    <AddDeviceForm @closePopUp="closeAddPopup" />
  </PopupComponent>
  <PopupComponent
    title="Выбор зоны"
    :visibility="zonePopupVisibility"
    :onClose="closeZonePopup"
  >
    <ChooseZoneForm @closePopUp="closeZonePopup" />
  </PopupComponent>

  <PopupComponent
    title="Редактировать устройство"
    :visibility="editPopupVisibility"
    :onClose="closeAddPopup"
  >
    <EditDeviceForm
      @closePopUp="closeAddPopup"
      :editDeviceData="editDeviceData"
    />
  </PopupComponent>

  <PopupComponent
    title="Удалить элемент"
    :visibility="deletPopupVisibility"
    :onClose="closeAddPopup"
    :width="300"
  >
    <DeletDeviceForm
      @closePopUp="closeAddPopup"
      @deletElementDevices="deletElementDevices"
      :deletDeviceData="deletDeviceData"
    />
  </PopupComponent>
</template>

<script>
import PageContentWrapper from "@/components/PageContentWrapper.vue";
import SelectComponent from "@/components/SelectComponent.vue";
import InputComponent from "@/components/InputComponent";
import PageTitle from "@/components/PageTitle.vue";
import PopupComponent from "@/components/PopupComponent";
import TreeItemZones from "@/components/TreeItemZones";
import ChooseZoneForm from "@/views/ChooseZoneForm";
import DeletDeviceForm from "@/views/DeletDeviceForm";
import EditDeviceForm from "@/views/EditDeviceForm";
import {
  DeviceList,
  TreeDeviceList,
  TreeZoneList,
  TypeOptions,
  ZoneOptions,
  OrgOptions,
} from "@/constants/devices";

export default {
  name: "DevicesView",
  components: {
    TreeItemZones,
    PageContentWrapper,
    SelectComponent,
    PageTitle,
    EditDeviceForm,
    InputComponent,
    PopupComponent,
    ChooseZoneForm,
    DeletDeviceForm,
  },
  data() {
    return {
      treeList: TreeDeviceList,
      zoneList: TreeZoneList,
      typeOptions: TypeOptions,
      orgOptions: OrgOptions,
      zoneOptions: ZoneOptions,
      devicesView: "list",
      addPopupVisibility: false,
      zonePopupVisibility: false,
      deletPopupVisibility: false,
      editPopupVisibility: false,
      editDeviceData: {},
      deletDeviceData: {},
    };
  },

 

  methods: {
    showDeletPopUp(data) {
      this.deletDeviceData = data;
      this.deletPopupVisibility = true;
    },

    showEditPopUp(data) {
      this.editDeviceData = data;
      this.editPopupVisibility = true;
      console.log(data);
    },


    closeAddPopup() {
      this.deletPopupVisibility = false;
      this.addPopupVisibility = false;
      this.editPopupVisibility = false;
    },
    closeZonePopup() {
      this.zonePopupVisibility = false;
    },

    deletElementDevices(data) {
      this.deletPopupVisibility = false;  

      removeElObject(this.treeList);

       function removeElObject (obj) {
        reomveEl(obj);
        function reomveEl(ob) {
          for (var item in ob) {
            if (typeof ob[item] === "object") {
              reomveEl(ob[item]);
              if (ob[item].id == data.id) {      
                     ob.splice(item, 1);
               }
            }
          }
        }
      }


    },
  },
};
</script>

<style scoped lang="scss">
.devices-wrapper {
  padding: 32px;
  border-radius: 4px;
  background-color: $white;
}

.filter-panel {
  margin-top: 24px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
}

.filter-item {
  margin-right: 24px;
  width: calc(25% - 24px);
  min-width: 222px;
}

.control-panel {
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  padding-right: 8px;
}

.add-device-btn {
  position: relative;
  padding: 10px 16px 10px 48px;
  height: 40px;
  border-radius: 4px;
  background-color: $mint;
  color: $white;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  &:before {
    content: "";
    position: absolute;
    top: 12px;
    left: 16px;
    width: 16px;
    height: 16px;
    @include default-background;
    background-image: url("../assets/icons/buttons/plus.svg");
  }
}

.list-view-btn,
.tree-view-btn {
  width: 32px;
  height: 32px;
  @include default-background;
  background-size: 16px;

  &.active {
    background-color: $grey1;
    border-radius: 4px;
  }
}

.list-view-btn {
  margin-left: auto;
  background-image: url("../assets/icons/buttons/list-view.svg");

  &.active {
    background-image: url("../assets/icons/buttons/list-view-active.svg");
  }
}

.tree-view-btn {
  background-image: url("../assets/icons/buttons/tree-view.svg");

  &.active {
    background-image: url("../assets/icons/buttons/tree-view-active.svg");
  }
}

.device-tree-list {
  padding-top: 6px;
}

.device-item {
  min-height: 50px;
  padding: 15px 16px;
  border-top: 1px solid $grey3;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: $grey1;

    & .device-edit-btn,
    & .device-remove-btn {
      display: block;
    }
  }
}

.device-type {
  margin-right: 32px;
  width: 208px;
}

.device-zone {
  margin-right: 32px;
  width: 92px;
}

.device-point {
  margin-right: 32px;
  width: 95px;
}

.device-ip {
  margin-right: 32px;
  width: 90px;
}

.device-port {
  margin-right: 32px;
  width: 32px;
}

.device-state {
  margin-right: 32px;
  width: 90px;
}

.device-edit-btn {
  display: none;
  margin: -4px 12px -4px auto;
  width: 24px;
  height: 24px;
  @include default-background;
  background-image: url("../assets/icons/devices/edit.svg");
  background-size: 16px 16px;
}

.device-remove-btn {
  display: none;
  margin: -4px 0;
  width: 24px;
  height: 24px;
  @include default-background;
  background-image: url("../assets/icons/devices/trash.svg");
  background-size: 16px 16px;
}
</style>
