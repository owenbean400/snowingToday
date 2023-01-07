const { createApp } = Vue;

const weatherData = [
  {
    postalCode: "04101",
    country: "United States",
    district: "Maine",
    city: "Portland",
    latitude: 43.661,
    longitude: -70.255,
    snowDayProbability: 0.45,
    snowData: {
      totalSnow: 0.1,
      snowingHours: 0.1,
      prediction: "No chance of school being cancelled from snow",
    },
  },
  {
    postalCode: "13790",
    country: "United States",
    district: "New York",
    city: "Maine",
    latitude: 42.193,
    longitude: -76.061,
    snowDayProbability: 0.86,
    snowData: {
      totalSnow: 1.8,
      snowingHours: 1.0,
      prediction: "Slight possible delay of school",
    },
  },
];

createApp({
  methods: {
    async search() {
      this.loading = true;

      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/locations",
          {
            params: {
              query: this.querySearch,
            },
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        let data = response.data.data;
        // let data = weatherData;
        if (!Array.isArray(data)) {
          this.errorMsg = "Error searching!";
        } else if (data.length == 0) {
          this.errorMsg = "No places found!";
        } else if (data.length == 1) {
          this.searchOptions = data;
          this.selected(data[0]);
          this.errorMsg = "";
        } else {
          this.searchOptions = data;
          this.errorMsg = "";
        }
      } catch (error) {
        this.errorMsg = "Error searching from server!";
      }

      this.loading = false;
      this.date = new Date();
    },
    selected(result) {
      this.snowData = result;
      this.display = 1;
    },
    goBack() {
      this.display = 0;
    },
    monthToString(month) {
      switch (month) {
        case 0:
          return "Jan";
        case 1:
          return "Feb";
        case 2:
          return "Mar";
        case 3:
          return "Apr";
        case 4:
          return "May";
        case 5:
          return "Jun";
        case 6:
          return "Jul";
        case 7:
          return "Aug";
        case 8:
          return "Sept";
        case 9:
          return "Oct";
        case 10:
          return "Nov";
        case 11:
          return "Dec";
      }
    },
    getHours(date) {
      if (date.getHours() == 0) return 12;
      if (date.getHours() == 12) return 12;
      return date.getHours() % 12;
    },
    shouldShowColor(index) {
      return (this.snowData.snowDayProbability * 90) / 100 > index;
    },
    async copyClipboard(copyMsg) {
      try {
        await navigator.clipboard.writeText(copyMsg);
        this.textCopied = true;
        setTimeout(() => {
          this.textCopied = false;
        }, 2000);
      } catch (err) {
        console.log("Error copy");
      }
    },
  },
  data() {
    return {
      searchOptions: [],
      errorMsg: "",
      display: 0,
      snowData: {},
      date: new Date(),
      loading: false,
      querySearch: "",
      share: false,
      textCopied: false,
    };
  },
}).mount("#app");
