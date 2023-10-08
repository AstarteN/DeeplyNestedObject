const eEqualsMCsquared = {
    equation: 'E = mc²',
    description: 'Mass-energy equivalence equation',
    constants: {
      speedOfLight: 299792458, // Speed of light in meters per second never changes
    },
  
    calculateEnergy: function (mass) {
      return mass * this.constants.speedOfLight ** 2;
    },
  
    units: {
      mass: 'kg',
      energy: 'Joules', // Self-explanatory
    },
  
    scientificContext: {
      physicist: 'Albert Einstein',
      year: 1905,
      theory: 'Special Relativity', // Some info from notes
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
  
    examples: {
      example1: {
        mass: 1, // 1 kg
        energy: this.calculateEnergy(1), // Calculate energy for 1 kg of mass
      },
  
      example2: {
        mass: 10,
        energy: this.calculateEnergy(10),
      },
  
      example3: {
        mass: 50,
        energy: this.calculateEnergy(50),
      },
  
      example4: {
        mass: 100,
        energy: this.calculateEnergy(100),
      },

      example5: {
          mass: 500,
          energy: this.calculateEnergy(500),
      }
    },
  
    einsteinBornInGermany: {
      isTrue: true, 
      checkEinsteinBirthplace: function () {
        if (this.isTrue) {
          console.log('Albert Einstein was born in Germany.');
        } else {
          console.log('Albert Einstein was not born in Germany.');
        }
      },
    },
  
    einsteinIQ: 160, 
  
    checkEinsteinIQ: function () {
      if (this.einsteinIQ === 160) {
        console.log('YES HIS IQ WAS AROUND 160');
      } else {
        console.log('sorry');
      }
    },
  
    nestedObjects: {  //more notes
      marcelGrossmann: {
        name: 'Marcel Grossmann',
        contribution: 'Helped Einstein find the mathematical tools needed to describe the universe.',
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
  

  