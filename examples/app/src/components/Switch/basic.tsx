import React from "react";
import { Switch } from "@ray-js/ray";

export default function () {
	const handleSwitchChange = (e) => {
		console.log("switch changed", e);
	};
	return <Switch color="#ff0000" onChange={handleSwitchChange} />;
}
