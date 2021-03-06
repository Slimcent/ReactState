import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

export default class Table extends React.Component {
    render() {
      const {peopleData, removeCharacter} = this.props

      return (
        <table>
          <TableHeader />
          <TableBody tableBodyData = {peopleData} removeCharacter={removeCharacter} />
        </table>
      )
    }
  }