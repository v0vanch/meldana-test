<template>
  <PageContentWrapper>
    <div class="devices-wrapper">
      <PageTitle title="Устройства" />
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
      <div class="control-panel">
        <button class="add-device-btn" @click="addPopupVisibility = true">
          Добавить устройство
        </button>
        <button
          class="list-view-btn"
          :class="{ active: devicesView === 'list' }"
          @click="devicesView = 'list'"
        />
        <button
          class="tree-view-btn"
          :class="{ active: devicesView === 'tree' }"
          @click="devicesView = 'tree'"
        />
      </div>

      <div class="device-tree-list" v-if="devicesView === 'tree'">
        <div v-for="item in treeList" :key="item.index">
          <tree-item
            :item="item"
            @elementRemoveToCatalog="showDeletPopUp"
            @editElement="showEditPopUp"
          />
        </div>
      </div>
      <div class="device-list" v-if="devicesView === 'list'">
        <div class="device-head">
          <span class="device-head__type">Тип устройства</span>
          <span class="device-head__zone">Зона</span>
          <span class="device-head__point">Точка доступа</span>
          <span class="device-head__ip">IP-адрес</span>
          <span class="device-head__port">Порт</span>
          <span class="device-head__state">Cостояние</span>
        </div>
        <div
          class="device-item"
          v-for="(device, index) in list"
          :key="device.index"
           
        >
        <div class="device-wrap" @click="editDevices(device)">
          <div class="device-type">
            {{ device.type }}
          </div>
          <div class="device-zone">
            {{ device.zone }}
          </div>
          <div class="device-point">
            {{ device.accessPoint }}
          </div>
          <div class="device-ip">
            {{ device.IPAddress }}
          </div>
          <div class="device-port">
            {{ device.port }}
          </div>
          <div
            class="device-state"
            :style="{
              color: device.state.color,
            }"
          >
            {{ device.state.text }}
          </div>
          <button class="device-edit-btn" />
        </div>

          <button class="device-remove-btn" @click="showDeletPopUp(index)" />
        </div>
      </div>
    </div>
  </PageContentWrapper>
  <PopupComponent
    title="Добавить устройство"
    :visibility="addPopupVisibility"
    :onClose="closeAddPopup"
  >
    <AddDeviceForm 
    @closePopUp="closeAddPopup"
    @addDevice="addDevice"
    
    />
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
    :visibility="deletElement"
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
import AddDeviceForm from "@/views/AddDeviceForm";
import EditDeviceForm from "@/views/EditDeviceForm";
import DeletDeviceForm from "@/views/DeletDeviceForm";
import TreeItem from "@/components/TreeItem";
import ChooseZoneForm from "@/views/ChooseZoneForm";
import {
  DeviceList,
  TreeDeviceList,
  TreeZoneList,
  TypeOptions,
  ZoneOptions,
} from "@/constants/devices";

export default {
  name: "DevicesView",
  components: {
    TreeItem,
    AddDeviceForm,
    EditDeviceForm,
    PageContentWrapper,
    SelectComponent,
    PageTitle,
    InputComponent,
    PopupComponent,
    ChooseZoneForm,
    DeletDeviceForm,
  },
  data() {
    return {
      list: DeviceList,
      treeList: TreeDeviceList,
      zoneList: TreeZoneList,
      typeOptions: TypeOptions,
      zoneOptions: ZoneOptions,
      devicesView: "list",
      addPopupVisibility: false,
      zonePopupVisibility: false,
      editPopupVisibility: false,
      deletElement: false,
      editDeviceData: {},
      deletDeviceData: {},
    };
  },
  methods: {
    addDevice(data) {
      data.id = this.list.length + 2
      this.list.push(data);
      console.log(this.list);
    },

    showEditPopUp(data) {
      this.editDeviceData = data;
      this.editPopupVisibility = true;
      console.log(data);
    },

    editDevices(data) {
      this.editDeviceData = data;
      this.editPopupVisibility = true;
      // console.log(this.editDeviceData);
    },

    showDeletPopUp(data) {
      console.log(data);
      this.deletDeviceData = data;
      this.deletElement = true;
    },

    closeAddPopup() {
      this.addPopupVisibility = false;
      this.editPopupVisibility = false;
      this.deletElement = false;
    },
    closeZonePopup() {
      this.zonePopupVisibility = false;
    },

    deletElementDevices(data) {
      this.deletElement = false;

      if (this.devicesView == "list") {
        this.list.splice(data, 1);
      } else {
        removeElObject(this.treeList);
      }

      function removeElObject(obj) {
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
.device-head {
  display: flex;
  // justify-content: space-between;
  color: #828282;
  font-size: 12px;
  padding-bottom: 8px;
}

.device-head > span {
  padding-left: 16px;
}

.device-head__type {
  margin-right: 32px;
  width: 208px;
}

.device-head__zone {
  margin-right: 32px;
  width: 92px;
}

.device-head__point {
  margin-right: 32px;
  width: 95px;
}

.device-head__ip {
  margin-right: 32px;
  width: 90px;
}

.device-head__port {
  margin-right: 32px;
  width: 32px;
}

.device-head__state {
  margin-right: 32px;
  width: 90px;
}

.devices-wrapper {
  padding: 32px;
  border-radius: 4px;
  background-color: $white;
}

.filter-panel {
  margin-top: 24px;
  margin-bottom: 32px;
  display: flex;
}

.filter-item {
  margin-right: 24px;
  width: 222px;
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
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: $grey1;

    & .device-edit-btn,
    & .device-remove-btn {
      display: block;
    }
  }
}

.device-wrap {
  display: flex;
  width: 97%;
  align-items: center;
  align-content: center;
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
