//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COMPLEMENTS = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U",
};
export const toRna = (dna) => {
  let rna = "";
  for (let nucleotide of dna) {
    rna += COMPLEMENTS[nucleotide];
  }
  return rna;
};
