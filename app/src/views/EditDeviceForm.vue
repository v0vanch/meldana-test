<template>
  <form class="form">
    <div class="content">
      <div class="section">
        <div class="row">

          <InputComponent
              label="IP адрес устройства"
              name="ip"
              :value="editDeviceData.IPAddress"
              @input="input"


          />
        </div>
        <div class="row">
          <div class="half-column">
            <InputComponent
                label="Порт устройства"
                name="port"
                :value="editDeviceData.port"
                @input="input"
            />
          </div>
          <div class="half-column">
            <SelectComponent
                :options="typeOptions"
                :defaultValue="editDeviceData.type"
                @input="input"
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
                :defaultValue="editDeviceData.zone"
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
                value=""
                placeholder="Введите логин"
            />
          </div>
          <div class="half-column">
            <InputComponent
                label="Пароль"
                name="port"
                value=""
                placeholder="Введите пароль"
            />
          </div>
        </div>
        <div class="row">
          <InputComponent
              label="Секретный ключ (токен)"
              name="token"
              value=""
              placeholder="Введите секретный ключ (токен)"
          />
        </div>
      </div>
    </div>
    <div class="footer">
      <button class="add-btn" type="button">
        Добавить
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
    <ChooseZoneForm @closePopUp="closeZonePopup"/>
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
      
    }
  },
  methods: {
    closeZonePopup() {
      this.zonePopupVisibility = false
    },
    closePopUp() {
      this.$emit('closePopUp');
    },
    input(data) {
      console.log(data);
    }

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