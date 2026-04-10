function isSafe(report) {
  const levels = report.split(" ").map(Number);

  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i - 1];

    // Check difference range
    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }

    // Check direction
    if (diff > 0) {
      isDecreasing = false;
    } else if (diff < 0) {
      isIncreasing = false;
    } else {
      return false;
    }
  }

  return isIncreasing || isDecreasing;
}

function countSafeReports(input) {
  const reports = input.trim().split("\n");
  let count = 0;

  for (const report of reports) {
    if (isSafe(report)) {
      count++;
    }
  }

  return count;
}

const input = `
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
`;

console.log(countSafeReports(input));
