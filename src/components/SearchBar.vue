<script setup>
import { ref } from "vue";

const searchTerm = ref("");
const quantity = ref(5);
const gifs = ref([]);
const loading = ref(false);
const errorMessage = ref("");

const search = async () => {
  const query = searchTerm.value.trim();
  if (!query) {
    errorMessage.value = "Please enter a search term.";
    gifs.value = [];
    return;
  }

  loading.value = true;
  errorMessage.value = "";
  gifs.value = [];

  const limit = Math.min(Math.max(1, quantity.value), 24);
  quantity.value = limit;
  const url = `/search?q=${encodeURIComponent(query)}&l=${limit}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    gifs.value = data.data.map((gif) => gif.images.original.url);

    if (gifs.value.length === 0) {
      errorMessage.value = "No GIFs found for this search.";
    }
  } catch (error) {
    console.error("Error fetching GIFs:", error);
    errorMessage.value = "Error loading GIFs. Please try again.";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <section class="search-bar">
    <label for="search-input">Search for GIFs:</label>
    <input
      id="search-input"
      type="text"
      placeholder="Search..."
      v-model="searchTerm"
      @keyup.enter="search"
    />

    <label for="quantity-input">Limit:</label>
    <input
      id="quantity-input"
      type="number"
      v-model.number="quantity"
      min="1"
      max="24"
    />

    <button type="button" @click="search">Search</button>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="loading">Loading GIFs…</p>

    <div class="gifs-container">
      <img
        v-for="(gifUrl, index) in gifs"
        :key="index"
        :src="gifUrl"
        :alt="`GIF result ${index + 1}`"
      />
    </div>
  </section>
</template>
