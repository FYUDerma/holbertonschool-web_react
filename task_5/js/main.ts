interface MajorCredits {
  credits: number;
  brand: `brandA`;
}

interface MinonCredits {
  credits: number;
  brand: `brandB`;
}

function sumMajorCredits (subject1: number, subject2: number) : number {
  return subject1 + subject2;
}

function sumMinorCredits (subject1: number, subject2: number) : number {
  return subject1 + subject2;
}

console.log(sumMajorCredits(2, 3));
console.log(sumMinorCredits(5, 5));