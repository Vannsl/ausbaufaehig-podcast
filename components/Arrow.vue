<template>
  <i
    :class="direction"
    :style="{ marginTop: marginTop }"
    class="border-white group-hover:border-primary ml-2"
  />
</template>

<script>
export default {
  name: "Arrow",
  props: {
    direction: {
      type: String,
      required: true
    }
  },
  computed: {
    marginTop() {
      return this.direction === "up" ? "7px" : "";
    }
  }
};
</script>

<style>
i {
  border: solid;
  border-width: 0 1px 1px 0;
  display: inline-block;
  height: 5px;
  margin-top: 2px;
  padding: 3px;
  width: 5px;
}

.right {
  transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
}

.up {
  transform: rotate(-135deg);
}

.down {
  transform: rotate(45deg);
}
</style>
