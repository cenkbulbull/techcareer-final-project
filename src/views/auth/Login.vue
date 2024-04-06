<template>
    <div class="surface-ground flex align-items-center justify-content-center overflow-hidden mt-5">
        <div class="flex flex-column align-items-center justify-content-center">
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <div class="text-900 text-3xl font-medium mb-3">Hoşgeldiniz</div>
                        <p>Hesabınız yoksa hemen <router-link to="register">kayıt olun.</router-link></p>
                    </div>
                    <div>
                        <!--<label for="email" class="block text-900 text-xl font-medium mb-2">Email</label>
                        <InputText v-model="user.email" id="email" type="text" placeholder="Email" class="w-full md:w-30rem mb-5" style="padding: 1rem" />-->

                        <label for="email" class="block text-900 text-xl font-medium mb-2">Kullanıcı adı</label>
                        <InputText v-model="user.username" id="username" type="text" placeholder="Username" class="w-full md:w-30rem mb-5" style="padding: 1rem" />

                        <label for="password" class="block text-900 font-medium text-xl mb-2">Şifre</label>
                        <Password v-model="user.password" id="password" placeholder="Password" :toggleMask="true" :feedback="false" class="w-full mb-3" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>

                        <div class="flex align-items-center justify-content-between mb-5 gap-5">
                            <div class="flex align-items-center">
                                <Checkbox id="rememberme" binary class="mr-2"></Checkbox>
                                <label for="rememberme">Beni Hatırla</label>
                            </div>
                            <a class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)">Şifremi Unuttum</a>
                        </div>
                        <Button @click="login" label="Giriş Yap" class="w-full p-3 text-xl"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useUser } from "../../store/index";

const store = useUser();

const user = ref({
    username: "",
    password: ""
})
//const rememberme = ref(false);

const login = () =>{
    store.login(user.value)
}

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
