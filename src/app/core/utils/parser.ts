export function formatForecastMessage(rawText: string): string {
  if (!rawText) return "";

  const lines = rawText
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(l => l);

  let header = "";
  let parts: string[] = [];
  let currentSection = "";

  const headerRegex = /^FORTUNE THURSDAY TWO SURE[:]?$/i;
  const sectionRegex = /^(\w+)\s+Picks[:]?$/i;
  const setRegex = /^Set[:]?[\s]*(.*)$/i;

  for (const line of lines) {
    if (headerRegex.test(line)) {
      header = "FORTUNE THURSDAY TWO SURE";
    } else if (sectionRegex.test(line)) {
      const match = line.match(sectionRegex);
      currentSection = match ? match[1] : "";
    } else if (setRegex.test(line) && currentSection) {
      const match = line.match(setRegex);
      const numsStr = match ? match[1] : "";
      const numbers = numsStr
        .split(",")
        .map(s => s.trim())
        .filter(s => s)
        .join(", ");

      parts.push(`${currentSection} Picks: ${numbers}`);
      currentSection = "";
    }
  }

  // If no header detected, fallback
  if (!header && parts.length > 0) {
    header = "Forecast";
  }

  return `${header}\n\n${parts.join("\n")}`.trim();
}
