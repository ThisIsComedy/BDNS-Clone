import React from "react";
import styled from "styled-components";

const OptionItem = ({ title, options }) => {
	console.log(options);

	return (
		<OptionContainer>
			<OptionTitleWrap>
				<OptionTitle>{title}</OptionTitle>
			</OptionTitleWrap>
			<SelectWrap>
				<Select>
					<option value='*'>- [필수] 옵션을 선택해 주세요 -</option>
					<option value='**' disabled>
						-------------------
					</option>
					{options.map(item => (
						<option value={item}>{item}</option>
					))}
				</Select>
			</SelectWrap>
		</OptionContainer>
	);
};

const OptionContainer = styled.span`
	display: block;
	margin-top: 15px; //15
`;

const OptionTitleWrap = styled.div`
	font-weight: normal;
	color: #353535;
	width: 115px;
	margin-top: 15px;
	padding: 7px 0 8px 0;
	text-align: left;
`;

const OptionTitle = styled.span`
	font-family: "LatoRegular", "Noto Sans KR";
	font-size: 15px;
	border-bottom: 1px solid #000;
`;

const SelectWrap = styled.div`
	padding: 4px 10px 4px 0;
`;

const Select = styled.select`
	width: 100%;
	height: 24px;
	font-size: 12px;
	color: #353535;
	border: 1px solid #d5d5d5;
	font-family: "돋움", Dotum;
	appearance: none;
	max-width: 100%;
	padding: 0 41px 0 15px;
	background: url("https://bdns.co.kr/web/images/select.png") no-repeat right
		15px center #fff;
	letter-spacing: -1px;
	box-sizing: border-box;
`;

export default OptionItem;
