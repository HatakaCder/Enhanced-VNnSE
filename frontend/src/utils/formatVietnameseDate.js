export function formatVietnameseDate(isoString, type=1) {
    /**
     * Convert an ISO-8601 date string into a human-friendly Vietnamese date.
     *
     * This function:
     * 1. Parses the given ISO string into a Date object.
     * 2. Formats it using the Vietnamese locale (vi-VN) with:
     *    - day as numeric (e.g. “3”)
     *    - month as full name (e.g. “tháng bảy”)
     *    - year as numeric (e.g. “2025”)
     * 3. Ensures the very first character of the resulting string is uppercase
     *    (useful if the formatter ever returns a leading letter).
     *
     * @param {string} isoString — A date in ISO-8601 format (e.g. `"2025-07-03T14:30:00Z"`).
     * @returns {string}
     *   A formatted Vietnamese date string, e.g.  
     *   `"3 tháng 7 năm 2025"`.
     *
     * @example
     * console.log(formatVietnameseDate("2025-07-03T14:30:00Z"));
     * // → "3 tháng 7 năm 2025"
     *
     * @example
     * // Handles dates without time too
     * console.log(formatVietnameseDate("2025-12-25"));
     * // → "25 tháng 12 năm 2025"
     */

    const date = new Date(isoString);
    if (type === 1) {
        const formatted = new Intl.DateTimeFormat('vi-VN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }).format(date);

        return formatted.charAt(0).toUpperCase() + formatted.slice(1);
    } else if (type === 2) {
        return date.toLocaleDateString('vi-VN')
    } else if (type === 3) {
        return date.toLocaleString("vi-VN", {
            day:   "2-digit",
            month: "2-digit",
            year:  "numeric",
            hour:   "2-digit",
            minute: "2-digit",
            hour12: false
        })
    }
}