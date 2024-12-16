"use client";

import React from "react";

export function TestClientInServerPackage() {
	return React.createElement(
		"span",
		null,
		`[client in server package (hydrated: ${Number(useHydrated())}) (optimized: )]`,
	);
}

function useHydrated() {
	return React.useSyncExternalStore(
		React.useCallback(() => () => {}, []),
		() => true,
		() => false,
	);
}
