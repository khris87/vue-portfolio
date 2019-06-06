<template>
  <v-form
          ref="form"
          v-model="valid"
          lazy-validation
  >
    <v-text-field
            v-model="user_name"
            :counter="10"
            :rules="nameRules"
            label="Nom ou raison sociale"
            required
            dark
    ></v-text-field>
    <v-text-field
            v-model="user_email"
            :rules="emailRules"
            label="E-mail"
            required
            dark
    ></v-text-field>
    <v-textarea
            v-model="user_text"
            :rules="textRules"
            label="Tapez votre message"
            required
            dark
    ></v-textarea>
    <v-btn
            :disabled="!valid"
            color="success"
            @click.prevent="sendMail"
    >
      Validate
    </v-btn>
    <v-btn
            color="error"
            @click="reset"
    >
      Réinitialiser
    </v-btn>
  </v-form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contact',
  data () {
    return {
      valid: true,
      user_email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      user_name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      user_text: '',
      textRules: [
        v => !!v || 'text is required',
        v => (v && v.length >= 10) || 'text must be more than 10 characters'
      ]
    }
  },
  methods: {
    reset () {
      this.$refs.form.reset()
    },
    sendMail: function () {
      if (this.$refs.form.validate()) {
        axios.post('https://mailthis.to/khris2aixe@gmail.com', {
          email: this.user_email,
          _subject: this.user_name,
          message: this.user_text
        }).then(function () {
          location.href = 'https://mailthis.to/confirm'
        })
      }
    }
  }
}
</script>

<style scoped>
  form {
    width: 100%;
    background: rgba(0,0,0,0);
    padding: 20px 25px;
    margin: auto;
    margin-top: 20vh;
  }
</style>
