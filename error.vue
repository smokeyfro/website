<script setup>
const props = defineProps({
  error: Object,
});

const error = useError();

if (error.value.statusCode === 404 || "404") {
  error.value.message = "Oops! Page not found";
}

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <NuxtLayout>
    <div>
      <h1>{{ error.statusCode }}</h1>
      <p>{{ error.statusCode === 404 || "404" ? error.message : "Oops! Error" }}</p>
      <button @click="handleError" class="button">
        Back to the home page
      </button>
    </div>
  </NuxtLayout>
</template>