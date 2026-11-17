// Small helpers that turn project data into full sentences.

// ['a', 'b', 'c'] -> 'a, b, and c'
export function listJoin(items: string[]): string {
  if (items.length <= 1) return items.join('');
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;
}

interface ProjectFacts {
  peopleServed?: number;
  spanMeters?: number;
  spanIsProjected?: boolean;
  daysUncrossable?: number;
  connects?: string;
  travelers: string[];
  date: Date;
}

// Builds are always in summer, so we show the season and year rather than a month.
export function season(d: { date: Date }): string {
  return `Summer ${d.date.getUTCFullYear()}`;
}

// e.g. "The 66-meter bridge connects about 275 people to school and farmland, which the
// river cut off for about 150 days a year. Adya, Nathan, and Gabe traveled to build it."
export function projectSentence(d: ProjectFacts, withTravelers = true): string {
  const parts: string[] = [];
  const span = !d.spanMeters
    ? 'The bridge'
    : d.spanIsProjected
      ? `The bridge, with a projected span of ${d.spanMeters} meters,`
      : `The ${d.spanMeters}-meter bridge`;
  if (d.peopleServed && d.connects) {
    let s = `${span} connects about ${d.peopleServed.toLocaleString('en-US')} people to ${d.connects}`;
    if (d.daysUncrossable) s += `, which the river used to cut off for about ${d.daysUncrossable} days a year`;
    parts.push(`${s}.`);
  } else if (d.peopleServed) {
    parts.push(`${span} serves about ${d.peopleServed.toLocaleString('en-US')} people.`);
  }
  if (withTravelers && d.travelers.length > 0) {
    parts.push(`${listJoin(d.travelers)} traveled from UW to build it.`);
  }
  return parts.join(' ');
}
