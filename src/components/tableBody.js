export default function TableBody(props) {
    const rows = props.tableBodyData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
          </tr>
        )
      })
    
      return <tbody>{rows}</tbody>
  }