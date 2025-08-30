import moment from "jalali-moment";

/**
 * Options for formatting a date.
 */
interface Options {
	isPersian?: boolean;
	year?: "numeric" | "2-digit";
	month?: "numeric" | "2-digit";
	day?: "numeric" | "2-digit";
	hour?: "numeric" | "2-digit";
	minute?: "numeric" | "2-digit";
	hour12?: boolean;
	showTime?: boolean;
}

interface FormattedDate {
	formattedDate: string;
	formattedTime: string;
}

/**
 * Formats a date according to the specified options, returning date and time separately.
 *
 * @param date - The date to format. Can be a Date object or a string representing a date.
 * @param options - Formatting options to customize the output.
 * @returns An object with the date and time formatted separately.
 * @example
 * // Format a date as a Persian (Jalali) date
 * formatDate("20204-09-17", {isPersian: true});
 * // Output: { date: "1403/06/27", time: "00:00" }
 *
 * // Format a date as a 24-hour time with AM/PM
 * formatDate("2023-01-01", {hour12: true});
 * // Output: { date: "01/01/2023", time: "12:00 AM" }
 *
 * @throws {Error} Throws an error if the input date is invalid.
 */
function formatDate(date: Date | string, options: Options = {}): FormattedDate {
	// Handle invalid date input
	const result = new Date(date);
	if (isNaN(result.getTime())) {
		throw new Error("Invalid date provided.");
	}

	let formattedDate = "";
	let formattedTime = "";

	// Convert to Persian date format if specified
	if (options.isPersian) {
		if (options.showTime === false) {
			formattedDate = moment(result).locale("fa").format("YYYY/MM/DD");
		} else {
			formattedDate = moment(result).locale("fa").format("YYYY/MM/DD");
			formattedTime = moment(result).locale("fa").format("HH:mm");
		}
	} else {
		// Default date formatting options
		const defaultOptions: Intl.DateTimeFormatOptions = {
			year: options.year || "numeric",
			month: options.month || "2-digit",
			day: options.day || "2-digit",
			hour: options.hour || "2-digit",
			minute: options.minute || "2-digit",
			hour12: options.hour12 ?? false, // Use 24-hour format by default unless specified
		};

		// If showTime is false, only return the date
		if (options.showTime === false) {
			formattedDate = result.toLocaleDateString(undefined, {
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
				hour12: options.hour12 ?? false,
			});
		} else {
			formattedDate = result.toLocaleDateString(undefined, {
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
				hour12: options.hour12 ?? false,
			});
			formattedTime = result.toLocaleTimeString(undefined, {
				hour: "2-digit",
				minute: "2-digit",
				hour12: options.hour12 ?? false,
			});
		}
	}

	return { formattedDate, formattedTime };
}

export default formatDate;
