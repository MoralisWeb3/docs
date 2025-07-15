export const PRICE_CHART_TIMEZONES = [
  "auto",
  "Etc/UTC",
  "Africa/Cairo",
  "Africa/Casablanca",
  "Africa/Johannesburg",
  "Africa/Lagos",
  "Africa/Nairobi",
  "Africa/Tunis",
  "America/Anchorage",
  "America/Argentina/Buenos_Aires",
  "America/Bogota",
  "America/Caracas",
  "America/Chicago",
  "America/El_Salvador",
  "America/Juneau",
  "America/Lima",
  "America/Los_Angeles",
  "America/Mexico_City",
  "America/New_York",
  "America/Phoenix",
  "America/Santiago",
  "America/Sao_Paulo",
  "America/Toronto",
  "America/Vancouver",
  "Asia/Almaty",
  "Asia/Ashkhabad",
  "Asia/Bahrain",
  "Asia/Bangkok",
  "Asia/Chongqing",
  "Asia/Colombo",
  "Asia/Dhaka",
  "Asia/Dubai",
  "Asia/Ho_Chi_Minh",
  "Asia/Hong_Kong",
  "Asia/Jakarta",
  "Asia/Jerusalem",
  "Asia/Karachi",
  "Asia/Kathmandu",
  "Asia/Kolkata",
  "Asia/Kuala_Lumpur",
  "Asia/Kuwait",
  "Asia/Manila",
  "Asia/Muscat",
  "Asia/Nicosia",
  "Asia/Qatar",
  "Asia/Riyadh",
  "Asia/Seoul",
  "Asia/Shanghai",
  "Asia/Singapore",
  "Asia/Taipei",
  "Asia/Tehran",
  "Asia/Tokyo",
  "Asia/Yangon",
  "Atlantic/Reykjavik",
  "Australia/Adelaide",
  "Australia/Brisbane",
  "Australia/Perth",
  "Australia/Sydney",
  "Europe/Amsterdam",
  "Europe/Athens",
  "Europe/Belgrade",
  "Europe/Berlin",
  "Europe/Bratislava",
  "Europe/Brussels",
  "Europe/Bucharest",
  "Europe/Budapest",
  "Europe/Copenhagen",
  "Europe/Dublin",
  "Europe/Helsinki",
  "Europe/Istanbul",
  "Europe/Lisbon",
  "Europe/London",
  "Europe/Luxembourg",
  "Europe/Madrid",
  "Europe/Malta",
  "Europe/Moscow",
  "Europe/Oslo",
  "Europe/Paris",
  "Europe/Prague",
  "Europe/Riga",
  "Europe/Rome",
  "Europe/Stockholm",
  "Europe/Tallinn",
  "Europe/Vienna",
  "Europe/Vilnius",
  "Europe/Warsaw",
  "Europe/Zurich",
  "Pacific/Auckland",
  "Pacific/Chatham",
  "Pacific/Fakaofo",
  "Pacific/Honolulu",
  "Pacific/Norfolk",
  "US/Mountain",
] as const;

export type ChartTimezone = (typeof PRICE_CHART_TIMEZONES)[number];

export interface FormattedTimezone {
  offset: string;
  cityName: string;
  timezone: ChartTimezone;
}
export const getFormattedTimezone = (
  timezone: ChartTimezone
): FormattedTimezone | null => {
  try {
    const date = new Date();

    // Get the UTC time and the timezone time
    const utcDate = new Date(
      date.toLocaleString("en-US", { timeZone: "Etc/UTC" })
    );
    const tzDate = new Date(
      date.toLocaleString("en-US", { timeZone: timezone as string })
    );

    // Calculate the offset in minutes
    const offset = (tzDate.getTime() - utcDate.getTime()) / (1000 * 60);

    // Convert offset to hours and minutes
    const offsetHours = Math.floor(offset / 60);
    const offsetMinutes = Math.abs(offset % 60);

    const sign = offset >= 0 ? "+" : "-";
    const formattedOffset = `UTC${sign}${String(Math.abs(offsetHours)).padStart(
      2,
      "0"
    )}:${String(offsetMinutes).padStart(2, "0")}`;

    const cityName =
      timezone === "Etc/UTC"
        ? "UTC"
        : timezone.split("/").pop()?.replace("_", " ") || timezone;

    return {
      offset: formattedOffset,
      cityName,
      timezone,
    };
  } catch {
    return null;
  }
};
