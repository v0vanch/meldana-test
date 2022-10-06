<template>
  <form class="form">
    <div class="content">
      <div class="section">
        <div class="row">

          <InputComponent
              label="IP адрес устройства"
              name="ip"
              :value="IPAddress"
              @input="inputIp"
          />
        </div>
        <div class="row">
          <div class="half-column">
            <InputComponent
                label="Порт устройства"
                name="port"
                :value="port"
                @input="inputPort"
            />
          </div>
          <div class="half-column">
            <SelectComponent
                :options="typeOptions"
                :defaultValue="label"
                @input="inputType"
                label="Тип устройства"
            />
          </div>
        </div>
      </div>

      <div class="section">
        <div class="row">
          <div class="half-column">
            <SelectComponent
                :options="zoneOptions"
                label="Точка"
                class="list-icon"
                :defaultValue="zone"
                :hide-options="true"
                @click="zonePopupVisibility = true"
            />
          </div>
        </div>
      </div>

      <div class="section">
        <div class="row">
          <div class="half-column">
            <InputComponent
                label="Логин"
                name="port"
                :value="login"
                placeholder="Введите логин"
                @input="inputLogin"
            />
          </div>
          <div class="half-column">
            <InputComponent
                label="Пароль"
                name="port"
                type="password"
                :value="passwd"
                placeholder="Введите пароль"
                @input="inputPort"
            />
          </div>
        </div>
        <div class="row">
          <InputComponent
              label="Секретный ключ (токен)"
              name="token"
              :value="token"
              placeholder="Введите секретный ключ (токен)"
              @input="inputToken"
          />
        </div>
      </div>
    </div>
    <div class="footer">
      <button class="add-btn" type="button" @click="editDevice">
        Сохранить
      </button>
      <button class="cancel-btn" type="button" @click="closePopUp">
        Отменить
      </button>
    </div>
  </form>
  <PopupComponent
      title="Выбор зоны"
      :visibility="zonePopupVisibility"
      :onClose="closeZonePopup"
  >
    <ChooseZoneForm @closePopUp="closeZonePopup" @selectValue="inputZone" />
  </PopupComponent>
</template>

<script>
import InputComponent from "@/components/InputComponent";
import SelectComponent from "@/components/SelectComponent.vue";
import PopupComponent from "@/components/PopupComponent";
import ChooseZoneForm from "@/views/ChooseZoneForm";
import {TypeOptions, ZoneOptions} from '@/constants/devices';

export default {

  props: { 
    onClose: {
      type: Function,
      required: true,
    },
    editDeviceData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    InputComponent,
    SelectComponent,
    PopupComponent,
    ChooseZoneForm,
  },
  data() {
    return {
      typeOptions: TypeOptions,
      zoneOptions: ZoneOptions,
      zonePopupVisibility: false,
      IPAddress: "",
      port: "",
      zone: "",
      zoneId: 0,
      type: "",
      label: "",
      accessPoint: "Точка доступа",
      state: 'disconnected',
      login: "",
      passwd: "",
      token: "",
    }
  },
  watch: {
    editDeviceData(newVal) {
      this.IPAddress = newVal.IPAddress;
      this.port = newVal.port;
      this.zone = newVal.zone;
      this.zoneId = newVal.zoneId;
      this.type = newVal.type;
      this.label = newVal.label;
      this.accessPoint = newVal.accessPoint;
      this.state = newVal.state;
      this.login = newVal.login;
      this.passwd = newVal.passwd;
      this.token = newVal.token;
    }
  },
  methods: {
    closeZonePopup() {
      this.zonePopupVisibility = false
    },
    closePopUp() {
      this.$emit('closePopUp');
    },
    inputIp(data) {
      if (typeof data == "string") {
        this.IPAddress = data;
      }
    },

    inputPort(data) {
      if (typeof data == "string") {
        this.port = data;
      }
    },

    inputZone(data) {
      this.zone = data.label;
      this.zoneId = data.id;
    },

    inputType(data) {
      if (typeof data == "object") {
        this.type = data.value;
        this.label = data.label;
      }
    },

    inputLogin(data) {
      if (typeof data == "string") {
        this.login = data;
      }
    },

    inputPasswd(data) {
      if (typeof data == "string") {
        this.passwd = data;
      }
    },

    inputToken(data) {
      if (typeof data == "string") {
        this.token = data;
      }
    },

    editDevice() {
      let obj = {
        id: this.editDeviceData.id,
        type: this.type,
        label: this.label,
        id_control_zones: this.zoneId,
        accesspoint: this.accessPoint,
        ipaddress: this.IPAddress,
        port: this.port,
        state: this.state,
        login: this.login,
        passwd: this.passwd,
        token: this.token,
      }
      this.closePopUp();
      this.$emit("editDevice", obj);
    },
  }

}
</script>

<style scoped lang="scss">


.content {
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
}

.section {
  &:not(:last-child) {
    margin-bottom: 24px;
    border-bottom: 1px solid $grey3;
  }
}

.row {
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
}

.half-column {
  width: calc(50% - 12px);
}

.footer {
  display: flex;
}

.add-btn {
  @include default-button;
  margin-right: 16px;
}

.cancel-btn {
  @include cancel-button;
}
</style>