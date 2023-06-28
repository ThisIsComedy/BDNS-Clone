import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import GlobalStyle from '../../styles/global.style';
import { styled } from 'styled-components';
import TableCell from '../../components/join/TableCell';
import { Link } from 'react-router-dom';

const Join = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);
  const [thirdChecked, setThirdChecked] = useState(false);
  const [fourthChecked, setFourthChecked] = useState(false);

  const [firstHover, setFirstHover] = useState(false);
  const [secondHover, setSecondHover] = useState(false);
  const [thirdHover, setThirdHover] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setFirstChecked(!isChecked);
    setSecondChecked(!isChecked);
    setThirdChecked(!isChecked);
    setFourthChecked(!isChecked);
  };

  const checkFirst = () => {
    setFirstChecked(!firstChecked);
  }

  const checkSecond = () => {
    setSecondChecked(!secondChecked);
  }

  const checkThird = () => {
    setThirdChecked(!thirdChecked);
  }

  const checkFourth = () => {
    setFourthChecked(!fourthChecked);
  }

  const handleFirstHover = () => {
    setFirstHover(!firstHover);
  };

  const handleSecondHover = () => {
    setSecondHover(!secondHover);
  };

  const handleThirdHover = () => {
    setThirdHover(!thirdHover);
  };

  const goToHome = () => {
    alert('회원가입이 완료되었습니다!');
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Title>
          <b>회원 가입</b>
        </Title>
        <Table>
          <TableCell title="아이디" describe="(영문소문자/숫자, 4~16자)" />
          <TableCell
            title="비밀번호"
            describe="(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)"
          />
          <TableCell title="비밀번호 확인" />
          <TableCell title="이름" />
          <TableCell title="휴대전화" select={true} />
          <TableCell title="이메일" />
        </Table>
        <SubTitle>
          <b>전체 동의</b>
        </SubTitle>
        <TrAll>
          <AllCheck type="checkbox" />
          <Checkbox isChecked={isChecked} onClick={handleCheckboxChange} />
          <Td>
            <b>이용약관 및 개인정보수집 및 이용,쇼핑정보 수신(선택)에 모두 동의합니다.</b>
          </Td>
        </TrAll>
        <Tr>
          <TdOther>
            <Check type="checkbox" id="first" checked={firstChecked} onClick={() => checkFirst()} />
            <Label htmlFor="first">동의함</Label>
            <HoverWrapper onClick={handleFirstHover}>
              <Hover>
                [필수] 이용약관 동의
                {firstHover ? <UpArrow /> : <DownArrow />}
              </Hover>
            </HoverWrapper>
          </TdOther>
        </Tr>
        {firstHover && 
        <Document>
          <P>제1조(목적)<br />
            이 약관은 주식회사비디앤에스 회사(전자상거래 사업자)가 운영하는 BDNS 사이버 몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리.의무 및 책임사항을 규정함을 목적으로 합니다.
            ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」
          </P>
          <P>제2조(정의)<br />
① “몰”이란 주식회사비디앤에스 회사가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
③ ‘회원’이라 함은 “몰”에 회원등록을 한 자로서, 계속적으로 “몰”이 제공하는 서비스를 이용할 수 있는 자를 말합니다.
④ ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이 제공하는 서비스를 이용하는 자를 말합니다.
          </P>
          <P>제3조 (약관 등의 명시와 설명 및 개정)<br />
① “몰”은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호.모사전송번호.전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보보호책임자등을 이용자가 쉽게 알 수 있도록 BDNS사이버몰의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
② “몰은 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회.배송책임.환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다.
③ “몰”은 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
④ “몰”이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 “몰“은 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.
⑤ “몰”이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간 내에 “몰”에 송신하여 “몰”의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.
⑥ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.
          </P>
          <P>제4조(서비스의 제공 및 변경)<br />
① “몰”은 다음과 같은 업무를 수행합니다.
  1. 재화 또는 용역에 대한 정보 제공 및 구매계약의 체결
  2. 구매계약이 체결된 재화 또는 용역의 배송
  3. 기타 “몰”이 정하는 업무
② “몰”은 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화 또는 용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화 또는 용역의 내용 및 제공일자를 명시하여 현재의 재화 또는 용역의 내용을 게시한 곳에 즉시 공지합니다.
③ “몰”이 제공하기로 이용자와 계약을 체결한 서비스의 내용을 재화등의 품절 또는 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를 이용자에게 통지 가능한 주소로 즉시 통지합니다.
④ 전항의 경우 “몰”은 이로 인하여 이용자가 입은 손해를 배상합니다. 다만, “몰”이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.제4조(서비스의 제공 및 변경)
① “몰”은 다음과 같은 업무를 수행합니다.
  1. 재화 또는 용역에 대한 정보 제공 및 구매계약의 체결
  2. 구매계약이 체결된 재화 또는 용역의 배송
  3. 기타 “몰”이 정하는 업무
② “몰”은 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화 또는 용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화 또는 용역의 내용 및 제공일자를 명시하여 현재의 재화 또는 용역의 내용을 게시한 곳에 즉시 공지합니다.
③ “몰”이 제공하기로 이용자와 계약을 체결한 서비스의 내용을 재화등의 품절 또는 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를 이용자에게 통지 가능한 주소로 즉시 통지합니다.
④ 전항의 경우 “몰”은 이로 인하여 이용자가 입은 손해를 배상합니다. 다만, “몰”이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
          </P>
          <P>제5조(서비스의 중단)<br />
① “몰”은 컴퓨터 등 정보통신설비의 보수점검.교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
② “몰”은 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, “몰”이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
③ 사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 “몰”은 제8조에 정한 방법으로 이용자에게 통지하고 당초 “몰”에서 제시한 조건에 따라 소비자에게 보상합니다. 다만, “몰”이 보상기준 등을 고지하지 아니한 경우에는 이용자들의 마일리지 또는 적립금 등을 “몰”에서 통용되는 통화가치에 상응하는 현물 또는 현금으로 이용자에게 지급합니다.
          </P>
          <P>제6조(회원가입)<br />
① 이용자는 “몰”이 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.
② “몰”은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
  1. 가입신청자가 이 약관 제7조제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조제3항에 의한 회원자격 상실 후 3년이 경과한 자로서 “몰”의 회원재가입 승낙을 얻은 경우에는 예외로 한다.
  2. 등록 내용에 허위, 기재누락, 오기가 있는 경우
  3. 기타 회원으로 등록하는 것이 “몰”의 기술상 현저히 지장이 있다고 판단되는 경우
③ 회원가입계약의 성립 시기는 “몰”의 승낙이 회원에게 도달한 시점으로 합니다.
④ 회원은 회원가입 시 등록한 사항에 변경이 있는 경우, 상당한 기간 이내에 “몰”에 대하여 회원정보 수정 등의 방법으로 그 변경사항을 알려야 합니다.
          </P>
          <P>제7조(회원 탈퇴 및 자격 상실 등)<br />
① 회원은 “몰”에 언제든지 탈퇴를 요청할 수 있으며 “몰”은 즉시 회원탈퇴를 처리합니다.
② 회원이 다음 각 호의 사유에 해당하는 경우, “몰”은 회원자격을 제한 및 정지시킬 수 있습니다.
  1. 가입 신청 시에 허위 내용을 등록한 경우
  2. “몰”을 이용하여 구입한 재화 등의 대금, 기타 “몰”이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우
  3. 다른 사람의 “몰” 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우
  4. “몰”을 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우
③ “몰”이 회원 자격을 제한.정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우 “몰”은 회원자격을 상실시킬 수 있습니다.
④ “몰”이 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.
          </P>
          <P>제8조(회원에 대한 통지)<br />
① “몰”이 회원에 대한 통지를 하는 경우, 회원이 “몰”과 미리 약정하여 지정한 전자우편 주소로 할 수 있습니다.
② “몰”은 불특정다수 회원에 대한 통지의 경우 1주일이상 “몰” 게시판에 게시함으로서 개별 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별통지를 합니다.
          </P>
          <P>제9조(구매신청)<br />
① “몰”이용자는 “몰”상에서 다음 또는 이와 유사한 방법에 의하여 구매를 신청하며, “몰”은 이용자가 구매신청을 함에 있어서 다음의 각 내용을 알기 쉽게 제공하여야 합니다.
  1. 재화 등의 검색 및 선택
  2. 받는 사람의 성명, 주소, 전화번호, 전자우편주소(또는 이동전화번호) 등의 입력
  3. 약관내용, 청약철회권이 제한되는 서비스, 배송료.설치비 등의 비용부담과 관련한 내용에 대한 확인
  4. 이 약관에 동의하고 위 3.호의 사항을 확인하거나 거부하는 표시(예, 마우스 클릭)
  5. 재화등의 구매신청 및 이에 관한 확인 또는 “몰”의 확인에 대한 동의
  6. 결제방법의 선택
② “몰”이 제3자에게 구매자 개인정보를 제공·위탁할 필요가 있는 경우 실제 구매신청 시 구매자의 동의를 받아야 하며, 회원가입 시 미리 포괄적으로 동의를 받지 않습니다. 이 때 “몰”은 제공되는 개인정보 항목, 제공받는 자, 제공받는 자의 개인정보 이용 목적 및 보유·이용 기간 등을 구매자에게 명시하여야 합니다. 다만 「정보통신망이용촉진 및 정보보호 등에 관한 법률」 제25조 제1항에 의한 개인정보 처리위탁의 경우 등 관련 법령에 달리 정함이 있는 경우에는 그에 따릅니다.
          </P>
          <P>제10조 (계약의 성립)<br />
① “몰”은 제9조와 같은 구매신청에 대하여 다음 각 호에 해당하면 승낙하지 않을 수 있습니다. 다만, 미성년자와 계약을 체결하는 경우에는 법정대리인의 동의를 얻지 못하면 미성년자 본인 또는 법정대리인이 계약을 취소할 수 있다는 내용을 고지하여야 합니다.
  1. 신청 내용에 허위, 기재누락, 오기가 있는 경우
  2. 미성년자가 담배, 주류 등 청소년보호법에서 금지하는 재화 및 용역을 구매하는 경우
  3. 기타 구매신청에 승낙하는 것이 “몰” 기술상 현저히 지장이 있다고 판단하는 경우
② “몰”의 승낙이 제12조제1항의 수신확인통지형태로 이용자에게 도달한 시점에 계약이 성립한 것으로 봅니다.
③ “몰”의 승낙의 의사표시에는 이용자의 구매 신청에 대한 확인 및 판매가능 여부, 구매신청의 정정 취소 등에 관한 정보 등을 포함하여야 합니다.
          </P>
          <P>부 칙(시행일) 이 약관은 년 월 일부터 시행합니다. 부 칙(시행일) 이 약관은 년 월 일부터 시행합니다.</P>
        </Document>}
        <Tr>
          <TdOther>
            <Check type="checkbox" id="second" checked={secondChecked} onClick={() => checkSecond()} />
            <Label htmlFor="second">동의함</Label>
            <HoverWrapper onClick={handleSecondHover}>
              <Hover>
                [필수] 개인정보 수집 및 이용 동의
                {secondHover ? <UpArrow /> : <DownArrow />}
              </Hover>
            </HoverWrapper>
          </TdOther>
        </Tr>
        {secondHover && 
        <Document>
          조약...
        </Document>}
        <Tr>
          <TdOther>
            <Check type="checkbox" id="third" checked={thirdChecked} onClick={() => checkThird()} />
            <Label htmlFor="third">동의함</Label>
            <Hover>
              [선택]SMS 수신을 동의하십니까?
            </Hover>
            <Check type="checkbox" id="fourth" checked={fourthChecked} onClick={() => checkFourth()} />
            <Label htmlFor="fourth">동의함</Label>
            <Hover>
              [선택]이메일 수신을 동의하십니까?
            </Hover>
            <HoverWrapper onClick={handleThirdHover}>
              {thirdHover ? <UpArrow /> : <DownArrow />}
            </HoverWrapper>
          </TdOther>
        </Tr>
        {thirdHover && 
        <Document>
          조약...
        </Document>}
        <Link to='/'><Button onClick={() => goToHome()}>회원가입</Button></Link>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'LatoBold', 'Noto Sans KR';
`;

const Title = styled.div`
  width: 1100px;
  text-align: center;
  padding: 50px 70px 40px;
  font-size: 36px;
  border-bottom: 2px solid #000;
`;

const Table = styled.table`
  width: 1100px;
  display: table;
  border-spacing: 0px;
  border-color: gray;
`;

const SubTitle = styled.div`
  width: 1100px;
  text-align: left;
  padding: 50px 0px 10px;
  font-size: 20px;
  color: #222222;
  border-bottom: 2px solid #000;
`;

const TrAll = styled.tr`
  display: flex;
  padding: 20px !important;
  width: 1100px;
  border-bottom: 1px solid #dfdfdf;
`;

const Tr = styled.tr`
  display: flex;
  padding: 20px !important;
  width: 1100px;
  border-bottom: 1px solid #dfdfdf;
  flex-direction: column;
`;

const Td = styled.td`
  font-size: 16px;
`;

const TdOther = styled.td`
  width: 100%;
  color: #666666;
  font-size: 14px;
  font-weight: 300;
  float: left;
`;

const AllCheck = styled.input`
  border: 1px solid #000;
  width: 16px !important;
  height: 16px !important;
  margin-right: 16px;
`;

const Check = styled.input`
  border: 1px solid #000;
  margin-right: 6px;
`;

const Checkbox = styled.em`
  position: absolute;
  width: 22px;
  height: 22px;
  cursor: pointer;
  background: url('https://img.echosting.cafe24.com/skin/base/common/bg_join_check.png')
    no-repeat ${({ isChecked }) => (isChecked ? '-35px' : '0px')} 0;
`;

const Label = styled.label`
  margin-right: 7px;
`;

const HoverWrapper = styled.span`
  cursor: pointer;
`;

const Hover = styled.span`
  width: 100%;
  color: #666666;
  font-size: 14px;
  font-weight: 300;
  margin-right: 20px;
`;

const UpArrow = styled.span`
  width: 19px;
  height: 10px;
  background: url('https://bdns.co.kr/web/images/up.png') no-repeat;
  float: right;
`;

const DownArrow = styled.span`
  width: 19px;
  height: 10px;
  background: url('https://bdns.co.kr/web/images/down.png') no-repeat;
  float: right;
`;

const Document = styled.div`
  width: 1100px;
  height: 187px;
  padding: 20px;
  border: 0;
  border-top: 1px solid #f0f0f0;
  color: #666;
  font-size: 12px;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: -0.4px;
  background: #fafafa;
  overflow: auto;
`;

const P = styled.p`
  padding-bottom: 17px;
`;

const Button = styled.button`
  width: 170px !important;
  height: 48px !important;
  margin-top: 40px;
  line-height: 25px !important;
  font-size: 15px;
  padding: 10px 0;
  text-align: center;
  display: inline-block;
  border: 1px solid transparent;
  color: #fff;
  background-color: #000;
`;

export default Join;