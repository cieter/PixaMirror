/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
  address: "localhost", // Address to listen on, can be:
  // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
  // - another specific IPv4/6 to listen on a specific interface
  // - "0.0.0.0", "::" to listen on any interface
  // Default, when address config is left out or empty, is "localhost"
  port: 8080,
  basePath: "/", // The URL path where MagicMirror is hosted. If you are using a Reverse proxy
  // you must set the sub path here. basePath must end with a /
  ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  useHttps: false, // Support HTTPS or not, default "false" will use HTTP
  httpsPrivateKey: "", // HTTPS private key path, only require when useHttps is true
  httpsCertificate: "", // HTTPS Certificate path, only require when useHttps is true

  language: "nl",
  locale: "en-US",
  logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
  timeFormat: 24,
  units: "metric",
  // serverOnly:  true/false/"local" ,
  // local for armv6l processors, default
  //   starts serveronly and then starts chrome browser
  // false, default for all NON-armv6l devices
  // true, force serveronly mode, because you want to.. no UI on this device

  modules: [
    {
      module: "alert",
    },
    {
      module: "updatenotification",
      position: "top_bar",
    },
    {
      module: "clock",
      position: "top_left",
    },
    // {
    //   module: "calendar",
    //   header: "US Holidays",
    //   position: "top_left",
    //   config: {
    //     calendars: [
    //       {
    //         symbol: "calendar-check",
    //         url:
    //           "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics",
    //       },
    //     ],
    //   },
    // },
    {
      module: "compliments",
      position: "bottom_bar",
    },
    // {
    //   module: "weather",
    //   position: "top_right",
    //   config: {
    //     weatherProvider: "openweathermap",
    //     type: "current",
    //     location: "New York",
    //     locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
    //     apiKey: "YOUR_OPENWEATHER_API_KEY",
    //   },
    // },
    // {
    //   module: "weather",
    //   position: "top_right",
    //   header: "Weather Forecast",
    //   config: {
    //     weatherProvider: "openweathermap",
    //     type: "forecast",
    //     location: "New York",
    //     locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
    //     apiKey: "YOUR_OPENWEATHER_API_KEY",
    //   },
    // },
    {
      module: "MMM-MyDutchWeather",
      position: "top_left",
      header: "Weersvoorspelligen",
      config: {
        latitude: 51.55551, // Latitude of your city
        longitude: 5.0913, // Longitude of your city
        apiKey: "ee47e3b5d8", // API Key - Get for free at http://weerlive.nl/api/toegang/index.php
        showIcons: true, // Display Icons or Text
        showExtra: false, // Display additional weather information
        maxWidth: "500px", // Max width wrapper
      },
    },
    {
      module: "bustimes",
      position: "top_right",
      header: "Bustijden",
      config: {
        timingPointCode: "73002000,73000210",
        displaymode: "large",
        showTownName: true,
        showDelay: true,
        showTransportTypeIcon: true,
        showLiveIcon: true,
        departs: 6,
      },
    },
    // {
    //   module: "newsfeed",
    //   position: "bottom_bar",
    //   config: {
    //     feeds: [
    //       {
    //         title: "New York Times",
    //         url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
    //       },
    //     ],
    //     showSourceTitle: true,
    //     showPublishDate: true,
    //     broadcastNewsFeeds: true,
    //     broadcastNewsUpdates: true,
    //   },
    // },
  ],
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = config;
}
