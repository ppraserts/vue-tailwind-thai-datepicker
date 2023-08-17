<script setup>
const props = defineProps({
  weeks: Array,
  buddhistEnable: {
    type: Boolean,
    default: true
  }
})

const transalateDay = (day) => {
  if (!props.buddhistEnable) {
    return day
  }
  if (day === "Mon") {
    return "จ.";
  }
  if (day === "Tue") {
    return "อ.";
  }
  if (day === "Wed") {
    return "พ.";
  }
  if (day === "Thu") {
    return "พฤ.";
  }
  if (day === "Fri") {
    return "ศ.";
  }
  if (day === "Sat") {
    return "ส.";
  }
  if (day === "Sun") {
    return "อา.";
  }
  
  // If the input day is not recognized, you might want to return a default value, like so:
  return "Invalid day";
}
</script>

<template>
  <div class="grid grid-cols-7 py-2 mt-0.5">
    <div
      v-for="(day, keyDay) in weeks"
      :key="keyDay"
      class="text-vtd-secondary-500 text-xs 2xl:text-sm tracking-wide font-medium text-center cursor-default dark:text-vtd-secondary-400"
    >
      <span v-text="transalateDay(day)"> </span>
    </div>
  </div>
</template>
