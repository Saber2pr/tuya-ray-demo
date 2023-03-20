import React from "react";

import { Button } from "@ray-js/ray";
import DemoWrapper from "@/common/DemoWrapper";

import { setNavigationBarTitle, setNavigationBarColor } from "@ray-js/ray";
import { randomColor } from "@/utils/randomColor";

const PagePreviewer = () => {
	return (
		<DemoWrapper align="center">
			reLaunch 关闭所有页面，打开到应用内的某个页面
		</DemoWrapper>
	);
};

export default PagePreviewer;
