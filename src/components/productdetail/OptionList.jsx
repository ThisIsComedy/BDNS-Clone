import React, { useState } from "react";
import styled from "styled-components";
import OptionItem from "./OptionItem";
import data from "../../db/bdnsShopProductData.json";

const OptionList = ({ id }) => {
	const [options, setOptions] = useState(data[id].options);
	console.log(options);

	return (
		<OptionWrap>
			{options.map(opt => (
				<OptionItem title={opt.optionName} options={opt.optionList} />
			))}
		</OptionWrap>
	);
};

const OptionWrap = styled.div`
	margin-top: 40px;
	/* border: 1px solid black; */
`;

export default OptionList;
