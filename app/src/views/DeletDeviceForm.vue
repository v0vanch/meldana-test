<template>
  <form class="form">
    <div class="content">
       

      {{ deletDeviceData.label }}


      <div class="section">
       
        <div class="row">
      
        </div>
      </div>
    </div>
    <div class="footer">
      <button class="add-btn" type="button" @click="deletElement">
        Да
      </button>
      <button class="cancel-btn" type="button" @click="closePopUp">
        Нет
      </button>
    </div>
  </form>

</template>

<script>

export default {

  props: { 
    onClose: {
      type: Function,
      required: true,
    },
    deletDeviceData: {
      type: Number
    }
  },


  methods: {
    closePopUp() {
      this.$emit('closePopUp');
    },
    deletElement() {
      this.$emit('deletElementDevices', this.deletDeviceData);

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