<template>
  <v-container class="configs">
    <div class="avatar">
      <v-avatar size="150">
        <img
          :src="userData.profile_image"
          :alt="userData.fullname + ' profile image'"
        />
      </v-avatar>
    </div>
    <div class="form">
      <v-form v-model="isValid">
        <alq-text-field
          label="Nombre y apellido"
          :rules="formRules.fullname"
          v-model="form.fullname"
          required
          counter="150"
        />
        <alq-text-field
          label="Correo (Ej.: alquiler@xmail.com)"
          type="email"
          :rules="formRules.email"
          v-model="form.email"
          required
          counter="150"
        />
        <alq-text-field
          label="Celular (Ej.: 097X-XXXXXX)"
          :rules="formRules.phone"
          v-model="form.phone"
          required
          counter="11"
        />
        <alq-text-field
          label="Dirección"
          :rules="formRules.address"
          v-model="form.address"
          counter="200"
        />
        <v-autocomplete
          label="Departamento"
          clearable
          :items="departmentsList"
          v-model="form.department"
          item-text="name"
          item-value="id"
          counter="200"
        />
        <v-autocomplete
          label="Ciudad"
          clearable
          :items="citiesList"
          v-model="form.city"
          item-text="name"
          item-value="id"
          counter="200"
        />

        <div class="form__passwords">
          <small>Quiere cambiar su contraseña?</small>
          <alq-text-field
            class="mt-1"
            label="Nueva contraseña"
            type="password"
            :rules="formRules.newPassword"
            v-model="form.newPassword"
            counter="25"
          />
          <alq-text-field
            label="Confirmar su nueva contraseña"
            type="password"
            :rules="formRules.newPassword2"
            v-model="form.newPassword2"
            counter="25"
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
import { getData } from "@/api/requests";

import AlqTextField from "@/components/inputs/AlqTextField";

export default {
  name: "Configs",

  components: { AlqTextField },

  data() {
    return {
      isValid: false,

      form: {
        fullname: "",
        email: "",
        phone: "",
        address: "",
        department: null,
        city: null,
        newPassword: "",
        newPassword2: "",
      },
      departments: [],
      cities: [],
    };
  },

  computed: {
    formRules() {
      let formRules = {
        fullname: [],
        email: [],
        phone: [],
        department: [],
        city: [],
        address: [],
        newPassword: [],
        newPassword2: [],
      };

      const notEmptySelectRule = (v) => {
        return v || "Este campo no puede estar vacío.";
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

      const validateEmail = (v) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return (
          re.test(String(v).toLowerCase()) ||
          "El correo ingresado no es válido."
        );
      };

      const validatePhone = (v) => {
        const re = /[0-9]/;
        const re2 = /^09/;

        const [fp, sp] = v ? String(v).split("-") : "";

        return (
          (re.test(String(fp).toLowerCase()) &&
            re2.test(String(fp).toLowerCase()) &&
            re.test(String(sp).toLowerCase()) &&
            v.length == 11 &&
            v.charAt(4) === "-") ||
          "El número ingresado no es válido."
        );
      };

      formRules.email.push(validateEmail);

      formRules.phone.push(validatePhone);

      formRules.department.push(notEmptySelectRule);
      formRules.city.push(notEmptySelectRule);

      formRules.newPassword.push(minLength);

      formRules.newPassword2.push(newPassMustBeTheSame);

      return formRules;
    },

    userData() {
      return this.$store.state.user;
    },

    departmentsList() {
      return this.departments;
    },

    citiesList() {
      let result = this.cities;

      if (this.department) {
        result = this.cities.filter(
          (city) => city.department_id === this.department
        );
      }

      return result;
    },
  },

  methods: {
    fillUserData() {
      const user = this.userData;

      this.form = {
        ...this.form,
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
        address: user.address,
        department: user.department,
        city: user.city,
      };
    },

    async getDepartments() {
      try {
        const resp = await getData(
          "https://apy-app.herokuapp.com/api/departamentos"
        );
        if (!resp.error) {
          this.departments = resp.data.departments;
        } else {
          console.error("No se pudo cargar el selector de departamentos");
        }
      } catch (error) {
        console.error(error);
      }
    },

    async getCities() {
      try {
        const resp = await getData(
          "https://apy-app.herokuapp.com/api/ciudades"
        );
        if (!resp.error) {
          this.cities = resp.data.cities;
        } else {
          console.error("No se pudo cargar el selector de ciudades");
        }
      } catch (error) {
        console.error(error);
      }
    },

    fillSelectorsData() {
      this.getDepartments();
      this.getCities();
    },
  },

  beforeMount() {
    this.fillUserData();
    this.fillSelectorsData();
  },
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
