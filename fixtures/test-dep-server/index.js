import React from "react";
import { TestClientInServerPackage } from "./client.js";

export default async function Test() {
	return React.createElement(TestClientInServerPackage);
}
