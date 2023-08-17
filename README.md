# Vue Tailwind Thai Datepicker
A Thai Datepicker component for Vue 3 using Tailwind and dayjs inspire idea from [Vue Tailwind Thai Datepicker](https://github.com/elreco/vue-tailwind-datepicker).


## Installation

⚠️ Vue Tailwind Thai Datepicker uses Tailwind CSS (with the @tailwindcss/forms plugin) & Day.js.

### Install via npm

```
npm install vue-tailwind-thai-datepicker
```

### Install via yarn

```
yarn add vue-tailwind-thai-datepicker
```

## Simple Usage

How it works,

```vue
<script setup>
  import { ref } from 'vue'
  import VueTailwindThaiDatepicker from 'vue-tailwind-thai-datepicker'

  const dateValue = ref([])
  const formatter = ref({
    date: 'DD MMM YYYY',
    month: 'MMM'
  })
</script>

<template>
  <div>
    <vue-tailwind-thai-datepicker :display-formatter="formatter" v-model="dateValue" />
  </div>
</template>
```

![Light Mode](https://github.com/ppraserts/vue-tailwind-thai-datepicker/blob/main/docs/light.png?raw=true)


## Changelog
All notable changes to this project will be documented in the [Releases Page](https://github.com/ppraserts/vue-tailwind-thai-datepicker/releases).

## License
The [MIT](LICENSE) License. Please [see](http://opensource.org/licenses/MIT) for more information.

## Thanks to
- [Elreco](https://github.com/elreco)
- [kenhyuwa](https://github.com/kenhyuwa)
- [Vue](https://v3.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [day.js](https://day.js.org/)
- and other support...
