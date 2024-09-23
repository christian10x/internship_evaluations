export default function RowSemana(props) {
  return(
    <>
      <thead>
        <tr>
          <th>{props.fheader}</th>
          <th>Lunes</th>
          <th>Martes</th>
          <th>Miercoles</th>
          <th>Jueves</th>
          <th>Viernes</th>
          <th>Sábado</th>
        </tr>
      </thead>
    </>
  );
}