<script setup>
const props = defineProps({
  asPrevOrNext: Boolean,
  panel: Object,
  calendar: Object,
  buddhistEnable: {
    type: Boolean,
    default: true
  } 
})

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
  <div class="flex justify-between items-center px-2 py-1.5">
    <div class="flex-shrink-0">
      <span v-show="panel.calendar || panel.year" class="inline-flex rounded-full">
        <button
          type="button"
          class="p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50"
          @click="panel.calendar ? calendar.onPrevious() : calendar.onPreviousYear()"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              :d="panel.calendar ? `M15 19l-7-7 7-7` : `M11 19l-7-7 7-7m8 14l-7-7 7-7`"
            ></path>
          </svg>
        </button>
      </span>
    </div>
    <div class="px-1.5 space-x-1.5 flex flex-1">
      <span class="flex-1 flex rounded-md">
        <button
          type="button"
          class="px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50"
          v-text="transalateMonth(calendar.month)"
          @click="calendar.openMonth()"
        ></button>
      </span>
      <span class="flex-1 flex rounded-md">
        <button
          type="button"
          class="px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50"
          v-text="calendar.year + (props.buddhistEnable ? 543 : 0)"
          @click="calendar.openYear()"
        ></button>
      </span>
    </div>
    <div class="flex-shrink-0">
      <span v-show="panel.calendar || panel.year" class="inline-flex rounded-full">
        <button
          type="button"
          class="p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50"
          @click="panel.calendar ? calendar.onNext() : calendar.onNextYear()"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              :d="panel.calendar ? `M9 5l7 7-7 7` : `M13 5l7 7-7 7M5 5l7 7-7 7`"
            ></path>
          </svg>
        </button>
      </span>
    </div>
  </div>
</template>
