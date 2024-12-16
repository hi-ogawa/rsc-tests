"use client";

import React from "react";

export default function Test() {
	return React.createElement(
		"span",
		null,
		`[client package (hydrated: ${useHydrated()}) (optimized: ${useOptimized()})]`,
	);
}

function useHydrated() {
	return React.useSyncExternalStore(
		React.useCallback(() => () => {}, []),
		() => "1",
		() => "0",
	);
}

function useOptimized() {
	return React.useSyncExternalStore(
		React.useCallback(() => () => {}, []),
		() => (import.meta.url.includes("/.vite/") ? "1" : "0"),
		() => "?",
	);
}
