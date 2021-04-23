<template>
    <v-col md="3">
        <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
        >
            <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
            </template>

            <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>

            <v-card-title>{{product.name}}</v-card-title>

            <v-card-text>
                <div>{{product.text}}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions
                class="justify-end"
            >
                <v-btn 
                    color="deep-purple lighten-2"
                    text
                    @click="reserve"
                >
                    В корзину
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
  
</template>

<script>
export default {
    props: {
        product: {
            name: String,
            id: String,
            text: String
        }
    },
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>

<style>

</style>