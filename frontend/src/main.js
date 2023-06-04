import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.provide("backendURL", "http://localhost:3000"); // TODO: read this from env variables
app.provide("backendAdminPath", "/admin");
app.provide("backendAdminUserShowPath", (id) => `/admin/resources/users/records/${id}/show`);
app.provide("backendUsersPath", "/users");

app.mount("#app");
