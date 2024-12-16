"use client";

import React from "react";

export default function Test() {
	return React.createElement(
		"span",
		null,
		`[client package (hydrated: ${Number(useHydrated())}) (optimized: )]`,
	);
}

function useHydrated() {
	return React.useSyncExternalStore(
		React.useCallback(() => () => {}, []),
		() => true,
		() => false,
	);
}
