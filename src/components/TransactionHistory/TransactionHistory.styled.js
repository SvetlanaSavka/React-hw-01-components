import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  width: 600px;
  box-shadow: 1px 1px 3px #b19f9f;
  border-radius: 5px;
`;

export const TableHead = styled.thead`
  margin: 0 auto;
  background-color: #77e6e9;
`;

export const TableRow = styled.tr`
  :nth-child(even) {
    background-color: #efefef;
  }
`;

export const TableHeader = styled.th`
  padding: 5px;
`;

export const TableBody = styled.tbody`
  text-align: center;
`;

export const TableData = styled.td``;

/* .table {
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  width: 550px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.try:nth-child(odd) {
  background-color: lightgray;
}
.title {
  height: 35px;
  width: 250px;
  text-align: center;
}

.headertitle {
  text-align: center;
  height: 40px;
  width: 250px;
  background-color: #00bcd8;
  color: white;
}
.header {
  height: 30px;
  width: 250px;
}
 */
