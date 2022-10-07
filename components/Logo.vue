<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    width="500"
    height="500"
    preserveAspectRatio="xMidYMid meet"
  >
    <g>
      <title>{{ name }}</title>
      <rect :fill="background" width="500" height="500" />
      <image
        v-for="(image, index) of images"
        :key="`logo_${index}`"
        :x="positionImage(index)"
        :y="`${5 * (images.length > 1 ? 10 : 1)}`"
        :width="imageWidth"
        :height="imageWidth"
        :xlink:href="image"
      />
      <rect x="40" y="260" width="420" height="4" :fill="barColor" />
      <text
        x="50%"
        y="310"
        font-size="3rem"
        style="text-anchor: middle;"
        :fill="titleColor"
        font-family="Aboreto"
      >
        {{ title }}
      </text>
      <rect x="40" y="325" width="420" height="4" :fill="barColor" />
    </g>
  </svg>
</template>

<script>
export default {
  name: "Logo",
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: "Logo",
    },
    title: {
      type: String,
      default: "",
    },
    titleColor: {
      type: String,
      default: "",
    },
    barColor: {
      type: String,
      default: "",
    },
    background: {
      type: String,
      default: "#120e0d",
    },
  },
  data() {
    return {
      width: 500,
      height: 500,
      paddingX: 50,
      gap: 10,
    };
  },
  computed: {
    imageWidth() {
      const value = Math.floor(
        (this.width - (this.images.length * this.gap + 2 * this.paddingX)) /
          this.images.length
      );
      return value > this.width / 2 ? this.width / 2 : value;
    },
  },
  methods: {
    positionImage(index) {
      return this.images.length < 2 ? this.width / 4 : index === 0
        ? this.paddingX
        : this.paddingX + (this.gap + this.imageWidth) * index;
    },
  },
};
</script>
