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
  travelers: string[];
}

// e.g. "The 40-meter bridge serves about 1,200 people. Ana, Ben, and Cy traveled to build it."
export function projectSentence(d: ProjectFacts): string {
  const parts: string[] = [];
  const bridge = d.spanMeters ? `The ${d.spanMeters}-meter bridge` : 'The bridge';
  if (d.peopleServed) {
    parts.push(`${bridge} serves about ${d.peopleServed.toLocaleString('en-US')} people.`);
  }
  if (d.travelers.length > 0) {
    parts.push(`${listJoin(d.travelers)} traveled to build it.`);
  }
  return parts.join(' ');
}
