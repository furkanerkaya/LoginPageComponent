
    <template>
        <div class="w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center">
            <div class="w-1/4 h-2/3 rounded-3xl bg-black bg-opacity-20 m-auto px-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="white" class="size-32 mx-auto mt-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

                <!-- Mail Input -->
                <div class="mt-10 px-1 flex border-b-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="white" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <input v-model="email" type="email" class="block pl-2 w-full text-sm text-white bg-transparent focus:border-none focus:outline-none" placeholder="Email" />
                </div>
                <!-- Password Input -->
                <div class="mt-10 px-1 flex border-b-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="white" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>

                    <input v-model="password" type="password" class="block pl-2 w-full text-sm text-white bg-transparent focus:border-none focus:outline-none" placeholder="Password" />
                </div>

                <div class="flex mt-8 justify-between">
                    <!-- Remember Me -->
                    <div>
                        <div class="flex items-center mb-4">
                            <input type="checkbox" value="" class="h-4 w-4 border-2 border-gray-400 rounded-sm focus:outline-none bg-gray-200 checked:bg-gray-600 checkbox-custom ">
                            <label for="default-checkbox" class="ms-2 text-xs font-small text-white dark:text-gray-300">Remember me</label>
                        </div>
                    </div>

                    <!-- Forgot your Password -->
                    <div class="text-xs font-small font-mono text-white dark:text-gray-300">
                        Forgot Password?
                    </div>
                </div>

                <!-- Login Button -->
                <button class="px-4 py-4 w-full mt-4 bg-black bg-opacity-15 text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black hover:bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-40 focus:text-black focus:ring-opacity-50" @click="login">
                    Login
                </button>

            </div>
        </div>
    </template>

    <script>
    export default {
        data() {
            return {
            email: '',
            password: ''
            };
        },
        methods: {
            login() {
            // Basit bir kontrol, gerçek uygulamalarda API ile doğrulama yapılabilir
            if (this.email === 'mail@mail.com' && this.password === 'password') {
                localStorage.setItem('userLoggedIn', 'true');
                this.$router.push('/about'); // Giriş başarılıysa dashboard'a yönlendir
            } else {
                alert('Kullanıcı adı veya şifre hatalı');
            }
            }
        }
    };
    </script>

    <style>
        .checkbox-custom {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 4px;
            border: 2px solid #ccc;
            background-color: #f0f0f0;
            position: relative;
        }

        .checkbox-custom:checked {
            background-color: #808080; /* Gri renk */
            border-color: #808080; /* Gri border */
        }

        .checkbox-custom:checked::after {
            content: "";
            position: absolute;
            top: 2px;
            left: 2px;
            width: 9px;
            height: 9px;
            background-color: #ffffff; /* Beyaz renk ile içi dolu */
            border-radius: 2px;
        }
    </style>