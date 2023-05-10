<template>
  <div class="menu">
    <h1>Menus du restaurant</h1>
    <div class="menu-items text-center">
      <div v-for="menu in menus" :key="menu['@id']">
        <h2>{{ menu.nom }} - {{ menu.prix }}€</h2>
        <div v-for="plat in menu.plats" :key="plat['@id']">{{ plat.nom }}
          <h3>
            {{ menu.cat }}
          </h3>
          <div>
            {{ menu.plat }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script>
import UserService from "../services/user.service";

export default {
  data() {
    return {
      menus: [],
    };
  },
  mounted() {
    UserService.getPublicContentMenus()
      .then((response) => {
        this.menus = response.data["hydra:member"];
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


/*    mounted() {
      UserService.getPublicContent().then(
        (response) => {
          this.content = response.data;
        },
        (error) => {
          this.content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  */


  </script>
  