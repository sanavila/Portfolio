<template>
  <section class="timeline">
    <div class="timeline-tag">
      <div
        :class="`timeline-badge ${statusSize} ${
          statusColor !== 'default' ? statusColor : ''
        }`"
      >
        <span v-if="stepValue !== '' && statusColor === 'default'">{{
          stepValue
        }}</span>
        <b-icon
          v-else
          :type="statusIconColor"
          :icon="statusIcon"
          :size="statusSize === 'large' ? '' : statusSize"
        />
      </div>
      <div
        v-if="!hideProgressLine"
        class="progress-line"
        :class="statusColor"
      />
    </div>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <slot name="title" />
        <h4 v-if="title" class="timeline-title is-size-5">
          {{ title }}
        </h4>
      </div>
      <div class="timeline-body">
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
import Script from "./TimelineItem.script";

export default {
    name: "TimelineItem",
    ...Script
};
</script>

<style lang="scss" scoped>
@import "./TimelineItem.style.scss";
</style>
