/**
 * Check if the current path is active for the given link
 * @param currentPath - The current path
 * @param linkPath - The path of the link
 * @returns true if the current path is active for the given link, false otherwise
 */
function isLinkActive(currentPath: string, linkPath: string): boolean {
	const result: boolean =
		currentPath === linkPath ||
		(linkPath !== "/admin" && currentPath === `${linkPath}/`);

	return result;
}

export default isLinkActive;
