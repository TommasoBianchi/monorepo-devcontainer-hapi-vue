<template>
  <div class="users-list">
    <h1>Users</h1>
    <p>
      To manage users, visit the <a :href="backendURL + backendAdminPath">Admin</a> section or click on one of the
      users.
    </p>
    <li v-for="user in users" :key="user.id" @click="goToUser(user.id)">
      <p>
        {{ user.name }} (ID: {{ user.id }})
        <br />
        (created at {{ user.created_at }}, last updated at {{ user.updated_at }})
      </p>
    </li>
  </div>
</template>

<script>
export default {
  name: "UsersList",
  inject: ["backendURL", "backendAdminPath", "backendAdminUserShowPath", "backendUsersPath"],
  data() {
    return {
      users: [],
    };
  },
  created() {
    // fetch on init
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      const url = `${this.backendURL}${this.backendUsersPath}`;
      console.log(this.users);
      fetch(url)
        .then((res) => res.json())
        .then((res) => (this.users = res));
    },
    goToUser(userID) {
      const url = `${this.backendURL}${this.backendAdminUserShowPath(userID)}`;
      window.location = url;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 20px 0;
  list-style: none;
}
li p {
  margin: auto;
  width: fit-content;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
}
a {
  color: #42b983;
}
</style>
