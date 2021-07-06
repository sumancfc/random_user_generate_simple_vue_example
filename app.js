const app = Vue.createApp({
  data() {
    return {
      firstName: "Suman",
      lastName: "Shrestha",
      email: "sumanstha999@gmail.com",
      picture: "https://randomuser.me/api/portraits/men/75.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");

      const { results } = await res.json();

      //       console.log(results);

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#app");
