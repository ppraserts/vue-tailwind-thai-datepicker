<script setup>
const props = defineProps({
  months: Array,
  buddhistEnable: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:month'])
const transalateMonth = (month) => {
  if (!props.buddhistEnable) {
    return month
  }

  if (month === "Jan" || month === "ม.ค.") {
    return "มกราคม";
  }
  if (month === "Feb" || month === "ก.พ.") {
    return "กุมภาพันธ์";
  }
  if (month === "Mar" || month === "มี.ค.") {
    return "มีนาคม";
  }
  if (month === "Apr" || month === "เม.ย.") {
    return "เมษายน";
  }
  if (month === "May" || month === "พ.ค.") {
    return "พฤษภาคม";
  }
  if (month === "Jun" || month === "มิ.ย.") {
    return "มิถุนายน";
  }
  if (month === "Jul" || month === "ก.ค.") {
    return "กรกฎาคม";
  }
  if (month === "Aug" || month === "ส.ค.") {
    return "สิงหาคม";
  }
  if (month === "Sep" || month === "ก.ย.") {
    return "กันยายน";
  }
  if (month === "Oct" || month === "ต.ค.") {
    return "ตุลาคม";
  }
  if (month === "Nov" || month === "พ.ย.") {
    return "พฤศจิกายน";
  }
  if (month === "Dec" || month === "ธ.ค.") {
    return "ธันวาคม";
  }
  
  // If the input month is not recognized, you might want to return a default value, like so:
  return "Invalid month";
}
</script>

<template>
  <div class="flex flex-wrap mt-1.5">
    <div v-for="(month, key) in months" :key="key" class="w-1/2 px-0.5">
      <span class="flex rounded-md mt-1.5">
        <button
          type="button"
          class="px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700"
          v-text="transalateMonth(month)"
          @click="emit('update:month', key)"
        ></button>
      </span>
    </div>
  </div>
</template>
