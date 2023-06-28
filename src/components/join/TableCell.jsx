import { styled } from 'styled-components';

const TableCell = ({ title, describe, select }) => {
  return (
    <>
      <tr>
        <TdHead>{title}</TdHead>
        <Td>
          {!select 
            ? <Input 
                type='text'
                placeholder={describe}
              />
            :
              <>
                <Select>
                  <option>010</option>
                  <option>011</option>
                  <option>016</option>
                  <option>017</option>
                  <option>018</option>
                  <option>019</option>
                </Select>
                <Separator>-</Separator>
                <TelInput />
                <Separator>-</Separator>
                <TelInput />
              </>}
        </Td>
      </tr>
    </>
  );
};

const TdHead = styled.td`
  width: 150px;
  height: 65px;
  padding: 11px 0 10px 18px;
  border-bottom-width: 0;
  border-bottom: 1px solid #dfdfdf;
  color: #353535;
  text-align: left;
  font-weight: normal;
  background-color: #fbfafa;
  border-right: none !important;
`;

const Td = styled.td`
  padding: 10px 10px 11px !important;
  border-bottom: 1px solid #dfdfdf;
`;

const Input = styled.input`
  width: 50% !important;
  height: 40px;
  padding: 0 15px;
  border: 1px solid #d5d5d5;
  font-family: "돋움",Dotum;

  &::placeholder {
    font-size: 12px;
    line-height: 20px;
  }
`;

const Select = styled.select`
  width: 121px !important;
  height: 40px;
  padding: 0 15px;
  border: 1px solid #d5d5d5;
  font-family: "돋움",Dotum;
`;

const TelInput = styled.input`
  width: 156px !important;
  height: 40px;
  padding: 0 15px;
  border: 1px solid #d5d5d5;
  font-family: "돋움",Dotum;
`;

const Separator = styled.span`
  margin: 0px 5px;
`;

export default TableCell;