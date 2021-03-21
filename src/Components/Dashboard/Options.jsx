import React, { Component, Fragment } from "react";
import Select from "react-select";

const options = [
  {
    label: "Year",
    options: [
      {
        label: "2012",
        value: "2012",
      },
      {
        label: "2013",
        value: 3,
      },
      {
        label: "2014",
        value: 3,
      },
      {
        label: "2015",
        value: 3,
      },
      {
        label: "2016",
        value: 3,
      },
    ],
  },
  {
    label: "Stars",
    options: [
      {
        label: "4",
        value: 4,
      },
      {
        label: "4.25",
        value: 4.25,
      },
      {
        label: "4,5",
        value: 6,
      },
      {
        label: "4.75",
        value: 5,
      },
      {
        label: "5",
        value: 6,
      },
    ],
  },
  {
    label: "Rankings",
    options: [
      {
        label: "1",
        value: 1,
      },
      {
        label: "2",
        value: 2,
      },
      {
        label: "3",
        value: 3,
      },
      {
        label: "4",
        value: 4,
      },
      {
        label: "5",
        value: 5,
      },
      {
        label: "6",
        value: 6,
      },
      {
        label: "7",
        value: 7,
      },
      {
        label: "8",
        value: 8,
      },
      {
        label: "9",
        value: 9,
      },
      {
        label: "10",
        value: 10,
      },
    ],
  },
  {
    label: "Style",
    options: [
      {
        label: "Pack",
        value: 5,
      },
      {
        label: "Nan",
        value: 6,
      },
      {
        label: "Tray",
        value: 6,
      },
    ],
  },
  {
    label: "Brand",
    options: [
      {
        label: "MAMA",
        value: 1,
      },
      {
        label: "Prima Taste",
        value: 2,
      },
      {
        label: "Prima",
        value: 1,
      },
      {
        label: "Tseng Noodles",
        value: 2,
      },
      {
        label: "Wugudaochang",
        value: 1,
      },
      {
        label: "A-Sha Dry Noodle",
        value: 2,
      },
      {
        label: "MyKuali",
        value: 1,
      },
      {
        label: "CarJEN",
        value: 2,
      },
      {
        label: "Maruchan",
        value: 1,
      },
      {
        label: "Mamee",
        value: 2,
      },
      {
        label: "Mama",
        value: 1,
      },
      {
        label: "Sapporo Ichiban",
        value: 2,
      },
      {
        label: "Nongshim",
        value: 2,
      },
      {
        label: "Samyang Foods",
        value: 1,
      },
      {
        label: "Paldo",
        value: 2,
      },
      {
        label: "Indomie",
        value: 1,
      },
      {
        label: "Koka",
        value: 2,
      },
      {
        label: "Mi Sedaap",
        value: 2,
      },
      {
        label: "Nissin",
        value: 1,
      },
      {
        label: "Myojo",
        value: 2,
      },
      {
        label: "Doll",
        value: 1,
      },
    ],
  },
  {
    label: "Country",
    options: [
      {
        label: "Myanmar",
        value: 1,
      },
      {
        label: "Singapore",
        value: 2,
      },
      {
        label: "SG",
        value: 1,
      },
      {
        label: "Taiwan",
        value: 2,
      },
      {
        label: "China",
        value: 1,
      },
      {
        label: "Malaysia",
        value: 2,
      },
      {
        label: "JPN",
        value: 1,
      },
      {
        label: "Japan",
        value: 2,
      },
      {
        label: "Thailand",
        value: 1,
      },
      {
        label: "South Korea",
        value: 2,
      },
      {
        label: "USA",
        value: 1,
      },
      {
        label: "Indonesia",
        value: 2,
      },
      {
        label: "Hong Kong",
        value: 2,
      },
    ],
  },
];

export default class SingleSelect extends Component {
  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <Select name="options" options={options} />
      </div>
    );
  }
}
