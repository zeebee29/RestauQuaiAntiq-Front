<template>
  <div class="col1">
    <h1>Carte</h1>
    <ul v-for="(categorie) in categories" :key="categorie">
      <h2 class="text-center">{{ categorie }}</h2>
      <div v-for="plat in plats" :key="plat.nom">        
        <div v-if ="plat.categorie === categorie">
          <div class="flex items-start justify-between">
            <div class="w-2/3">
              <strong>{{ plat.nom }}</strong>
            </div>
            <div class="w-1/3 text-right">
              <strong>{{ plat.prix }}</strong>
            </div>
          </div>
          <div class="text-left">{{ plat.description }}</div>
          <br>
        </div>
      </div>
    </ul>
  </div>
</template>
  
  <script>
  import UserService from "../services/user.service";

export default {
  data() {
    return {
      plats: [],
      categories: [],
    };
  },
  mounted() {
    UserService.getPublicContentCarte()
    .then((response) => {
      console.log(response.data);  
      this.plats = response.data;
      this.categories = [...new Set(this.plats.map((plat) => plat.categorie))];
      }, (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
  </script>
  