
const eChart = {
  series: [
    {
      name: "Soil Moisture",
      data: [50, 60, 55, 40, 70, 80, 65, 90], // Example data with values from 0 to 100
      color: "#fff",
    },
  ],

  options: {
    chart: {
      type: "bar",
      width: "100%",
      height: "auto",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
    },
    grid: {
      show: true,
      borderColor: "#ccc",
      strokeDashArray: 2,
    },
    xaxis: {
      categories: [
        "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00" // Showing only 8 hours
      ],
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"], // All labels in white
        },
      },
    },
    yaxis: {
      max: 100, // Set max value to 100
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: ["#fff"],
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%"; // Show percentage for soil moisture
        },
      },
    },
  },
};

export default eChart;
