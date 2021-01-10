<template>
  <v-container class="configs">
    <div class="avatar">
      <v-avatar size="150">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </div>
    <div class="form">
      <v-form v-model="isValid">
        <v-text-field
          label="Nombre y apellido"
          :rules="formRules.fullname"
          v-model="form.fullname"
        />
        <v-text-field
          label="Correo (Ej.: alquiler@xmail.com)"
          type="email"
          :rules="formRules.email"
          v-model="form.email"
        />
        <v-text-field
          label="Celular (Ej.: 097X-XXXXXX)"
          :rules="formRules.phone"
          v-model="form.phone"
        />
        <v-text-field
          label="Dirección"
          :rules="formRules.address"
          v-model="form.address"
        />

        <div class="form__passwords">
          <small>Quiere cambiar su contraseña?</small>
          <v-text-field
            class="mt-1"
            label="Nueva contraseña"
            type="password"
            :rules="formRules.newPassword"
            v-model="form.newPassword"
          />
          <v-text-field
            label="Confirmar su nueva contraseña"
            type="password"
            :rules="formRules.newPassword2"
            v-model="form.newPassword2"
          />
        </div>

        <div class="d-flex justify-center">
          <v-btn class="primary mt-4" :disabled="!isValid"
            >Guardar cambios</v-btn
          >
        </div>
      </v-form>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Configs",

  components: {},

  data() {
    return {
      isValid: false,

      form: {
        fullname: [],
        email: [],
        phone: [],
        newPassword: [],
        newPassword2: [],
        address: [],
      },
    };
  },

  computed: {
    formRules() {
      let formRules = {
        fullname: [],
        email: [],
        phone: [],
        newPassword: [],
        newPassword2: [],
        address: [],
      };

      const notEmptyRule = (v) => {
        return (v && v.length > 0) || "Este campo no puede estar vacío.";
      };

      const minLength = (v) => {
        return (
          (v && v.length >= 8) || "Su contraseña debe tener 8 caracteres o más."
        );
      };

      const newPassMustBeTheSame = (v) => {
        return (
          v === this.form.newPassword || "Las contraseñas deben coincidir."
        );
      };

      formRules.fullname.push(notEmptyRule);

      formRules.phone.push(notEmptyRule);

      formRules.newPassword.push(notEmptyRule);
      formRules.newPassword.push(minLength);

      formRules.newPassword2.push(newPassMustBeTheSame);

      return formRules;
    },
  },

  methods: {},
};
</script>

<style lang="scss">
.configs {
  & .avatar {
    display: flex;
    justify-content: center;
  }

  & .form {
    margin: 3vh 0;

    &__passwords {
      border: rgb(201, 201, 201) solid 2px;
      border-radius: 7px;
      padding: 10px;
    }
  }
}
</style>
