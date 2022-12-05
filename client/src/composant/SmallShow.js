import styled from "styled-components";
const SmallShow = ({ show }) => {
  return (
    <>
      <Table>
        {/* <tr>
            <th>DATE</th>
            <th>EVENT TITLE</th>
            <th>VENUES</th>
            <th>TIME</th>
          </tr> */}

        {/* <tbody> */}
        <THeader>
          <tr>
            <Date>{show.date}</Date>
            <Title>{show.title}</Title>
            <Address>{show.address}</Address>
            <Time>{show.time}</Time>
          </tr>
          {/* </tbody> */}
        </THeader>
      </Table>
    </>
  );
};

const Table = styled.table`
  table-layout: fixed;
  width: 90%;
  border-collapse: collapse;
  border-bottom: 1px solid grey;
  color: grey;
  margin-left: 40px;
`;

const Date = styled.td`
  margin-left: 20px;
  padding: 50px;
`;
const Address = styled.td`
  margin-left: 20px;
  padding: 50px 50px 50px 70px;
`;
const Title = styled.td`
  padding: 0px;
`;
const Time = styled.td`
  margin-left: 20px;
  padding: 50px;
`;

const THeader = styled.thead`
  th:nth-child(1) {
    width: 30%;
  }
  thead th:nth-child(2) {
    width: 20%;
  }
  thead th:nth-child(3) {
    width: 15%;
  }
  thead th:nth-child(4) {
    width: 35%;
  }
`;
export default SmallShow;
