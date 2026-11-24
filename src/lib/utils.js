export function cn(...inputs) {
  return inputs
    .flatMap((input) => {
      if (!input) return [];
      if (typeof input === "string") return input;
      if (typeof input === "object") {
        return Object.entries(input)
          .filter(([, value]) => value)
          .map(([key]) => key);
      }
      return [];
    })
    .join(" ");
}
