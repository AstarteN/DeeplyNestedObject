const eEqualsMCsquared = {
  equation: 'E = mc²',
  description: 'Mass-energy equivalence equation',
  constants: {
    speedOfLight:
        299792458,  // Speed of light in meters per second never changes
  },

  calculateEnergy: function(mass) {
    return mass * this.constants.speedOfLight ** 2;
  },

  units: {
    mass: 'kg',
    energy: 'Joules',  // Self-explanatory
  },

  scientificContext: {
    physicist: 'Albert Einstein',
    year: 1905,
    theory: 'Special Relativity',  // Some info from notes
  },

  relatedConcepts: ['Nuclear Energy', 'Particle Physics'],
  additionalDetails: {
    significance: 'E=mc² revolutionized our understanding of energy and mass.',
    howItHelps: [
      'Nuclear energy generation',
      'Medical imaging (PET scans)',
      'Space exploration',
    ],
  },



  einsteinBornInGermany: {
    isTrue: true,
    checkEinsteinBirthplace: function() {
      if (this.isTrue) {
        console.log('Albert Einstein was born in Germany.');
      } else {
        console.log('Albert Einstein was not born in Germany.');
      }
    },
  },

  einsteinIQ: 160,

  checkEinsteinIQ: function() {
    if (this.einsteinIQ === 160) {
      console.log('YES HIS IQ WAS AROUND 160');
    } else {
      console.log('sorry');
    }
  },

  nestedObjects: {
    // more notes
    marcelGrossmann: {
      name: 'Marcel Grossmann',
      contribution:
          'Helped Einstein find the mathematical tools needed to describe the universe.',
    },

    sirArthurEddington: {
      name: 'Sir Arthur Eddington',
      contribution: 'Verified Einstein’s general theory of relativity.',
    },

    maxPlanck: {
      name: 'Max Planck',
      contribution: 'Mentor and professional colleague of Einstein.',
    },

    hendrikLorentz: {
      name: 'Hendrik Lorentz',
      contribution: 'Greatly influenced Einstein’s work.',
    },
  },
};

export {eEqualsMCsquared};