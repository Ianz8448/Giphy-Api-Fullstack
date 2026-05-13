<script setup>

</script>

<template>
  <div class="search-bar">
        <label for="search-input">Search for GIFs:</label>
        <input type="text" id="search-input" placeholder="Search..." />
        <label for="quantity-input">Limit:</label>
        <input id="quantity-input" type="number" value="5" min="1" max="24" />
        <input id="search-button" type="button" value="Search" onclick="run()"></input>
    </div>
</template>