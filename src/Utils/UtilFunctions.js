// Financial Year Validation
export const isValidYearFormat = (value) => {
  // Match strictly "YYYY-YY"
  const match = /^(\d{4})-(\d{2})$/.exec(value);
  if (!match) return false;

  const startYear = parseInt(match[1], 10); // full year (e.g. 2035)
  const endYear = parseInt(match[2], 10); // last 2 digits only (e.g. 40)

  // Extract last two digits of start year
  const startTwoDigits = startYear % 100;

  // Ensure second year > first year (within century)
  return endYear > startTwoDigits;
};

export const yearSort = (value) => {
  value.sort((a, b) => {
    const [startA, endA] = a.year.split("-").map(Number);
    const [startB, endB] = b.year.split("-").map(Number);
    return startA - startB || endA - endB;
  });
};

export const validateCrop = (cropName, cropArea) => {
  const isNameValid =
    typeof cropName === "string" && cropName.trim().length > 0;

  const numericArea = Number(cropArea); // Convert string/number to number
  const isAreaValid =
    !isNaN(numericArea) && numericArea > 0;

  return isNameValid && isAreaValid;
};
