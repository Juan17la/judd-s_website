export default function InfoTable({ rows }) {
  return (
    <table className="w-full text-sm">
      <tbody>
        {rows.map(([key, value], i) => (
          <tr key={key} className={i ? "border-t-2 border-dashed border-brand-dark/30" : ""}>
            <th className="py-1.5 pr-3 text-left align-top text-xs font-bold tracking-wider whitespace-nowrap text-black uppercase">{key}</th>
            <td className="py-1.5 align-top">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
