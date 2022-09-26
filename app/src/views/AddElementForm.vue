<template>
  <form class="form">
    <div class="content">
      <div class="section">
        <div class="row">
          <InputComponent
              label="Наименование"
              name="name"
              value=""
              placeholder="Введите наименование"
          />
        </div>
        <div class="row">
          <div class="half-column">
            <SelectComponent
              :options="zoneOptions"
              label="Зона"
              class="list-icon"
              :hide-options="true"
              @click="zonePopupVisibility = true"
          />
          </div>
          <div class="half-column">
            <SelectComponent
                :options="typeOptions"
                label="Тип устройства"
            />
          </div>
        </div>
      </div>


    </div>
    <div class="footer">
      <button class="add-btn" type="button">
        Добавить
      </button>
      <button class="cancel-btn" type="button" @click="closePopup">
        Отменить
      </button>
    </div>
  </form>
  <PopupComponent
      title="Выбор зоны"
      :visibility="zonePopupVisibility"
      :onClose="closeZonePopup"
  >
    <ChooseZoneForm/>
  </PopupComponent>
</template>

<script>
import InputComponent from "@/components/InputComponent";
import SelectComponent from "@/components/SelectComponent.vue";
import PopupComponent from "@/components/PopupComponent";
import ChooseZoneForm from "@/views/ChooseZoneForm";
import {TypeOptions, ZoneOptions} from '@/constants/devices';

export default {
  components: {
    InputComponent,
    SelectComponent,
    PopupComponent,
    ChooseZoneForm,
  },
  props: {
    onClose1: {
      type: Function,
      required: true,
    }
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
    closePopup() {
      this.onClose1() 
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