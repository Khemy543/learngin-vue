<template>
<div>
    <v-app-bar app flat color="white">
        <v-container class="py-0 fill-height">
        <NuxtLink to="/">
          <v-img
            :src="require('~/assets/images/martlogo.png')"
            height="35"
            width="150"
            contain
            class="hidden-sm-and-down"
        ></v-img>
        </NuxtLink>
        <NuxtLink to="/">
        <v-img
            :src="require('~/assets/images/martek.png')"
            height="35"
            width="35"
            contain
            class="hidden-md-and-up"
        ></v-img>
        </NuxtLink>
        <v-spacer></v-spacer>
        <v-responsive max-width="290">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            filled
            placeholder="Search Product"
          ></v-text-field>
        </v-responsive>
        
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
        <NuxtLink to="/help">
            <v-btn text>Help</v-btn>
        </NuxtLink>
        <v-btn text>
            Cart
            <v-icon right class="mr-1">mdi-cart</v-icon>
        </v-btn>
        <template v-if="authenticated" >
            <v-btn text @click.prevent="logout">
                {{user.name}}
            <v-icon right class="mr-1">mdi-account</v-icon>
        </v-btn>
        </template>
        <template v-else>
        <NuxtLink to="/auth/login">
            <v-btn text >
                Login
                <v-icon right class="mr-1">mdi-account</v-icon>
            </v-btn>
        </NuxtLink>
        </template>
        </div>

        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
        </v-container>
    </v-app-bar>
    <v-navigation-drawer
            v-model="drawer"
            absolute
            left
            temporary
            >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
                >
                <v-list-item>
                     <v-img
                        :src="require('~/assets/images/martlogo.png')"
                        height="35"
                        width="150"
                        contain
                    ></v-img>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                    <v-btn text>Help</v-btn>
                </v-list-item>

                <v-list-item>
                    <v-btn text>
                        Cart
                        <v-icon right class="mr-1">mdi-cart</v-icon>
                    </v-btn>
                </v-list-item>
                <v-list-item>
                    <template v-if="authenticated">
                        <v-btn text  @click.prevent="logout">
                        {{user.name}}
                        <v-icon right class="mr-1">mdi-account</v-icon>
                    </v-btn>
                    </template>
                    <template>
                        <nuxt-link to="/auth/login">
                            <v-btn text>
                            Login
                            <v-icon right class="mr-1">mdi-account</v-icon>
                            </v-btn>
                        </nuxt-link>
                    </template>
                </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
</div>
</template>
<script>
    export default{
        data: ()=>({
            drawer : false,
            group : null,
        }),

        watch:{
            group(){
                this.drawer = false
            }
        },
        methods:{
            logout(){
                this.$auth.logout()
            }
        }
    }
</script>
<style scoped>
a{
    text-decoration: none;
}

a.nuxt-link-active.v-btn.v-btn__content {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active.v-btn.v-btn__content {
  color: #00c58e;
}
</style>