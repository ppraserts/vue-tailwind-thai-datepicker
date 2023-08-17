<template>
  <div class="p-10 bg-sky-50 min-h-screen">
    <div class="grid grid-rows-2 gap-4">
      <VueTailwindThaiDatePicker
        :displayFormatter="formatter"
        v-model="dateValue"
        :start-from="startFrom"
      />

      <!-- <VueTailwindThaiDatePicker
        as-single
        inputClasses="rounded-md bg-red-300 dark:bg-red-300 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        v-model="dateValue.startDate"
      ></VueTailwindThaiDatePicker> -->
    </div>
  </div>
</template>

<script setup>
import VueTailwindThaiDatePicker from './VueTailwindThaiDatePicker.vue'
import dayjs from 'dayjs'
import { ref } from 'vue'

const dateValue = ref({
  startDate: "2023-08-17 18:08:49",
  endDate: "2023-08-17 18:08:49",
})

// const dateValue = ref([])

const dDate = (date) => {
  return date < new Date() || date > new Date(2023, 0, 8);
}

const formatter = ref({
  date: 'DD MMM YYYY',
  month: 'MMM'
})

const startFrom = new Date(2020, 0, 1)
</script>
