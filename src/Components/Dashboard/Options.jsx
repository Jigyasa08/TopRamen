import React, { Component, Fragment } from "react";
import Select from "react-select";

//Labels & Values for Nested Select Tag
const options = [
  {
    label: "Brand",
    options: [
      {
        label: "MAMA",
        value: "Brand",
      },
      {
        label: "Prima Taste",
        value: "Brand",
      },
      {
        label: "Prima",
        value: "Brand",
      },
      {
        label: "Tseng Noodles",
        value: "Brand",
      },
      {
        label: "Wugudaochang",
        value: "Brand",
      },
      {
        label: "A-Sha Dry Noodle",
        value: "Brand",
      },
      {
        label: "MyKuali",
        value: "Brand",
      },
      {
        label: "CarJEN",
        value: "Brand",
      },
      {
        label: "Maruchan",
        value: "Brand",
      },
      {
        label: "Mamee",
        value: "Brand",
      },
      {
        label: "Mama",
        value: "Brand",
      },
      {
        label: "Sapporo Ichiban",
        value: "Brand",
      },
      {
        label: "Nongshim",
        value: "Brand",
      },
      {
        label: "Samyang Foods",
        value: "Brand",
      },
      {
        label: "Paldo",
        value: "Brand",
      },
      {
        label: "Indomie",
        value: "Brand",
      },
      {
        label: "Koka",
        value: "Brand",
      },
      {
        label: "Mi Sedaap",
        value: "Brand",
      },
      {
        label: "Nissin",
        value: "Brand",
      },
      {
        label: "Myojo",
        value: "Brand",
      },
      {
        label: "Doll",
        value: "Brand",
      },
    ],
  },
  {
    label: "Style",
    options: [
      {
        label: "Pack",
        value: "Style",
      },
      {
        label: "Nan",
        value: "Style",
      },
      {
        label: "Tray",
        value: "Style",
      },
    ],
  },
  {
    label: "Country",
    options: [
      {
        label: "Myanmar",
        value: "Country",
      },
      {
        label: "Singapore",
        value: "Country",
      },
      {
        label: "SG",
        value: "Country",
      },
      {
        label: "Taiwan",
        value: "Country",
      },
      {
        label: "China",
        value: "Country",
      },
      {
        label: "Malaysia",
        value: "Country",
      },
      {
        label: "JPN",
        value: "Country",
      },
      {
        label: "Japan",
        value: "Country",
      },
      {
        label: "Thailand",
        value: "Country",
      },
      {
        label: "South Korea",
        value: "Country",
      },
      {
        label: "USA",
        value: "Country",
      },
      {
        label: "Indonesia",
        value: "Country",
      },
      {
        label: "Hong Kong",
        value: "Country",
      },
    ],
  },
  {
    label: "Year",
    options: [
      {
        label: "2012",
        value: "q",
      },
      {
        label: "2013",
        value: "q",
      },
      {
        label: "2014",
        value: "q",
      },
      {
        label: "2015",
        value: "q",
      },
      {
        label: "2016",
        value: "q",
      },
    ],
  },
  {
    label: "Rankings",
    options: [
      {
        label: "1",
        value: "Ranking",
      },
      {
        label: "2",
        value: "Ranking",
      },
      {
        label: "3",
        value: "Ranking",
      },
      {
        label: "4",
        value: "Ranking",
      },
      {
        label: "5",
        value: "Ranking",
      },
      {
        label: "6",
        value: "Ranking",
      },
      {
        label: "7",
        value: "Ranking",
      },
      {
        label: "8",
        value: "Ranking",
      },
      {
        label: "9",
        value: "Ranking",
      },
      {
        label: "10",
        value: "Ranking",
      },
    ],
  },

  {
    label: "Stars",
    options: [
      {
        label: "4",
        value: "Stars",
      },
      {
        label: "4.25",
        value: "Stars",
      },
      {
        label: "4.5",
        value: "Stars",
      },
      {
        label: "4.75",
        value: "Stars",
      },
      {
        label: "5",
        value: "Stars",
      },
    ],
  },
];

export default class SingleSelect extends Component {
  render() {
    const { setParam, setValue } = this.props;
    return (
      <div style={{ textAlign: "left" }}>
        <Select
          name="options"
          options={options}
          onChange={(value) => {
            setParam(value.value);
            setValue(value.label);
          }}
        />
      </div>
    );
  }
}
