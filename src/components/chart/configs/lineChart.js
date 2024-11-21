const lineChart = {
  series: [
    {
      name: "Temperature",
      data: [350, 40, 300, 220, 500, 250, 400, 230, 500], // Keep existing data for Temperature
      offsetY: 0,
    },
    {
      name: "Humidity",
      data: [30, 90, 40, 140, 290, 290, 340, 230, 400], // Keep existing data for Humidity
      offsetY: 0,
    },
  ],

  options: {
    chart: {
      width: "100%",
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },

    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    yaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 600,
          colors: ["#8c8c8c"], // Change if needed
        },
      },
    },

    xaxis: {
      categories: [
        "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", // Display hours from 00:00 to 08:00
      ],
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 600,
          colors: ["#8c8c8c", "#8c8c8c", "#8c8c8c", "#8c8c8c", "#8c8c8c", "#8c8c8c", "#8c8c8c", "#8c8c8c", "#8c8c8c"], // Keep labels color same
        },
      },
    },

    tooltip: {
      y: {
        formatter: function (val) {
          return val; // Tooltip shows the value as it is
        },
      },
    },
  },
};

export default lineChart;
