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
  {
    postalCode: "97204",
    country: "United States",
    district: "Oregon",
    city: "Portland",
    latitude: 45.52,
    longitude: -122.674,
    snowDayProbability: 0.0,
    snowData: {
      totalSnow: 0.0,
      snowingHours: 0.0,
      prediction: "No chance of school being cancelled from snow",
    },
  },
  {
    postalCode: "78374",
    country: "United States",
    district: "Texas",
    city: "Portland",
    latitude: 27.877,
    longitude: -97.323,
    snowDayProbability: 0.0,
    snowData: {
      totalSnow: 0.0,
      snowingHours: 0.0,
      prediction: "No chance of school being cancelled from snow",
    },
  },
  {
    postalCode: "37148",
    country: "United States",
    district: "Tennessee",
    city: "Portland",
    latitude: 36.582,
    longitude: -86.516,
    snowDayProbability: 0.0,
    snowData: {
      totalSnow: 0.0,
      snowingHours: 0.0,
      prediction: "No chance of school being cancelled from snow",
    },
  },
  {
    postalCode: "45039",
    country: "United States",
    district: "Ohio",
    city: "Maineville",
    latitude: 39.315,
    longitude: -84.221,
    snowDayProbability: 0.0,
    snowData: {
      totalSnow: 0.0,
      snowingHours: 0.0,
      prediction: "No chance of school being cancelled from snow",
    },
  },
  {
    postalCode: "48875",
    country: "United States",
    district: "Michigan",
    city: "Portland",
    latitude: 42.869,
    longitude: -84.903,
    snowDayProbability: 0.0,
    snowData: {
      totalSnow: 0.0,
      snowingHours: 0.0,
      prediction: "No chance of school being cancelled from snow",
    },
  },
  {
    postalCode: "47371",
    country: "United States",
    district: "Indiana",
    city: "Portland",
    latitude: 40.434,
    longitude: -84.978,
    snowDayProbability: 0.0,
    snowData: {
      totalSnow: 0.0,
      snowingHours: 0.0,
      prediction: "No chance of school being cancelled from snow",
    },
  },
  {
    postalCode: "06459",
    country: "United States",
    district: "Connecticut",
    city: "Portland",
    latitude: 41.573,
    longitude: -72.641,
    snowDayProbability: 0.0,
    snowData: {
      totalSnow: 0.0,
      snowingHours: 0.0,
      prediction: "No chance of school being cancelled from snow",
    },
  },
  {
    postalCode: "71663",
    country: "United States",
    district: "Arkansas",
    city: "Portland",
    latitude: 33.238,
    longitude: -91.512,
    snowDayProbability: 0.0,
    snowData: {
      totalSnow: 0.0,
      snowingHours: 0.0,
      prediction: "No chance of school being cancelled from snow",
    },
  },
];

createApp({
  methods: {
    search() {
      let data = weatherData;

      if (!Array.isArray(data)) {
        errorMsg = "Error Searching";
        return;
      } else if (data.length == 0) {
        errorMsg = "No places found";
        return;
      } else if (data.length == 1) {
        // Redirect
      } else {
        this.searchOptions = data;
      }
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
    shouldShowColor(index) {
      return this.snowData.snowDayProbability * 90 > index;
    },
  },
  data() {
    return {
      searchOptions: [],
      errorMsg: "",
      display: 0,
      snowData: {},
      date: new Date(),
    };
  },
}).mount("#app");
