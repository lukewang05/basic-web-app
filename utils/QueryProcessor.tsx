export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Luke Wang";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "ainiuw";
  }

  const additionMatch = query.match(/what is (\d+) plus (\d+)/i);
  if (additionMatch) {
    const num1 = parseInt(additionMatch[1], 10);
    const num2 = parseInt(additionMatch[2], 10);
    return (num1 + num2).toString();
  }

  const largestNumberMatch = query.match(
    /Which of the following numbers is the largest: ([\d, ]+)/i
  );
  if (largestNumberMatch) {
    const numbers = largestNumberMatch[1]
      .split(",")
      .map((s) => parseInt(s.trim(), 10));
    const max = Math.max(...numbers);
    return max.toString();
  }

  return "";
}
