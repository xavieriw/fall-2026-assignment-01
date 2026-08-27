const DNA_TO_RNA: Record<string,string> = {
    A: 'U',
    T: 'A',
    C: 'G',
    G: 'C',
}

class NucleotideError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NucelotideError'
  }
}

export function transcribeDNA(dna: string): string {
  let result = '';

  for (const char of dna) {
    if (!(char in DNA_TO_RNA)) {
      throw new NucleotideError('Invalid nucleotide provided.');
    } else {
      result += DNA_TO_RNA[char];
    }

  }
  return result;
}
