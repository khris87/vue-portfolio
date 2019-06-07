<template>
  <v-form
          ref="form"
          v-model="valid"
          lazy-validation
  >
    <h2 class="display-3 text--secondary text-xs-center">Contactez moi</h2>
    <v-text-field
            v-model="user_name"
            :counter="10"
            :rules="nameRules"
            label="Nom ou raison sociale"
            name="name"
            required
            dark
    ></v-text-field>
    <v-text-field
            v-model="user_email"
            :rules="emailRules"
            label="E-mail"
            name="_replyto"
            required
            dark
    ></v-text-field>
    <v-textarea
            v-model="user_text"
            :rules="textRules"
            label="Tapez votre message"
            name="message"
            required
            dark
    ></v-textarea>
    <v-input
            type="hidden"
            name="_subject"
            value="Contact form submitted"
    ></v-input>
    <v-input
            type="hidden"
            v-model="user_honeypot"
            value=""
    ></v-input>
    <v-btn
            :disabled="!valid"
            color="success"
            @click.prevent="sendMail"
    >
      Envoyer
    </v-btn>
    <v-btn
            color="info"
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
        v => /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/.test(v) || 'E-mail must be valid'
      ],
      user_name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 3) || 'Name must be less than 10 characters'
      ],
      user_text: '',
      textRules: [
        v => !!v || 'text is required',
        v => (v && v.length >= 10) || 'text must be more than 10 characters'
      ],
      user_honeypot: ''
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
          message: this.user_text,
          _after: 'localhost:8080/',
          _honeypot: '',
          _confirmation: 'Merci pour votre message, je vous recontacte dès que possible !'
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
  }
</style>
