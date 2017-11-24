import React from "react";
import { Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  render() {
    let data  = []
    if (this.props.data) {
        data = this.props.data
    }

    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Id",
              columns: [
                {
                  Header: "Id",
                  accessor: "id"
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Name",
                  accessor: "name"
                },
                {
                  Header: "Bitterness",
                  accessor: "bitterness"
                },
                {
                  Header: "Color",
                  accessor: "color"
                },
                {
                    Header: "Alc",
                    accessor: "alc"
                }
              ]
            }
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
        />
        <br />
        <Tips />
      </div>
    );
  }
}