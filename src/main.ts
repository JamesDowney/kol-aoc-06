import { fileToBuffer, print } from "kolmafia";

function helper(arrayInput: string[], uniques: number) {
  if (arrayInput.length < uniques) {
    return false;
  }
  let retval = true;
  for (let i = 0; i < arrayInput.length - 1; i++) {
    if (!(arrayInput.indexOf(arrayInput[i], i + 1) === -1)) {
      retval = false;
      break;
    }
  }
  return retval;
}

export default function main(): void {
  const input = fileToBuffer("input.txt").trim().split("");
  const substack: string[] = [];
  let solution = 0;
  let solution2 = 0;
  let i = 0;

  while (i < input.length && solution === 0) {
    if (helper(substack, 4)) {
      solution = i;
    }
    if (substack.push(input[i]) > 4) substack.shift();
    i++;
  }

  let j = 0;
  const substack2: string[] = [];
  while (j < input.length && solution2 === 0) {
    if (helper(substack2, 14)) {
      solution2 = j;
    }
    if (substack2.push(input[j]) > 14) substack2.shift();
    j++;
  }

  print(solution + "");
  print(solution2 + "");
}
