<template>
  <div class="switch-container">
    <span>
      <i :class="icon"></i>
      {{ label }}
    </span>
    <label class="switch" :style="switchStyle">

      <input type="checkbox" @change="update" v-model="val" :name="name">
      <span class="slider"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "switch-toggle",
  data: () => {
    return {
      val: false,
    }
  },
  props: {
    name: {
      default: '',
      type: String,
    },
    label: {
      default: '',
      type: String,
    },
    size: {
      default: 1,
      type: Number,
    },
    modelValue: {
      default: false,
      type: Boolean,
    },
    icon: {
      default: '',
      type: String,
    }
  },
  mounted() {
    this.val = this.modelValue;
  },
  computed: {
    switchStyle: function () {
      return 'transform: scale(' + this.size + ')';
    },
  },
  methods: {
    update() {
      this.$emit('update:modelValue', this.val);
    }
  }
}
</script>

<style scoped>

.switch-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--lighter-bg);
  padding: 7px;
}
.switch-container i[class^="ri"]{
  position: relative;
  top: 2px;
  font-size: 17px;
  margin-right: 5px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
  transform-origin: right center;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff99;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 20px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: var(--text-hilight);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--text-hilight);
}

input:checked + .slider:before {
  transform: translateX(20px);
}

</style>