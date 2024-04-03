<template>
  <div
    class="surface-ground flex align-items-center justify-content-center overflow-hidden mt-5"
  >
    <div class="flex flex-column align-items-center justify-content-center">
      <div
        style="
          border-radius: 56px;
          padding: 0.3rem;
          background: linear-gradient(
            180deg,
            var(--primary-color) 10%,
            rgba(33, 150, 243, 0) 30%
          );
        "
      >
        <div
          class="w-full surface-card py-6 px-5 sm:px-8"
          style="border-radius: 53px"
        >
          <div>
            <label for="name" class="block text-900 font-medium mb-2"
              >Name</label
            >
            <InputText
              id="name"
              type="text"
              placeholder="Ad"
              class="w-full md:w-30rem mb-3"
              style="padding: 1rem"
              v-model="user.name.firstname"
            />

            <label for="surname" class="block text-900 font-medium mb-2"
              >Soyad</label
            >
            <InputText
              id="surname"
              type="text"
              placeholder="Soyad"
              class="w-full mb-3"
              style="padding: 1rem"
              v-model="user.name.lastname"
            />

            <label for="tel" class="block text-900 font-medium mb-2"
              >Tel</label
            >
            <InputMask
              id="tel"
              date="phone"
              placeholder="Tel"
              mask="(999) 999-9999"
              class="w-full mb-3"
              style="padding: 1rem"
              v-model="user.tel"
            />

            <label for="email" class="block text-900 font-medium mb-2"
              >Email</label
            >
            <InputText
              id="email"
              type="text"
              placeholder="Email"
              class="w-full mb-3"
              style="padding: 1rem"
              v-model="user.email"
            />

            <label
              for="password"
              class="block text-900 font-medium mb-2"
              >Şifre</label
            >
            <Password
              id="password"
              v-model="user.password"
              placeholder="Şifre"
              :toggleMask="true"
              class="w-full mb-3"
              inputClass="w-full"
              :inputStyle="{ padding: '1rem' }"
            ></Password>

            <Button
              label="Kayıt Ol"
              class="w-full p-3 text-xs"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const user = ref({
  name: {
    firstname:"",
    lastname:""
  },
  email: "",
  password:"",
  tel: "",
});
</script>

<style scoped>
.pi-eye {
  transform: scale(1.6);
  margin-right: 1rem;
}

.pi-eye-slash {
  transform: scale(1.6);
  margin-right: 1rem;
}
</style>
