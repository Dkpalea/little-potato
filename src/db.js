// defines the initial localStore "database"
const db = {
  currentLevel: {
    // [0-6]
    number: 0,
    q1Answer: null,
    q2Answer: null,
    q3Answer: null,
  },
  // durations of current trial
  trial: {
    1: {
      start: null,
      end: null,
    },
    2: {
      start: null,
      end: null,
    },
    3: {
      start: null,
      end: null,
    },
    4: {
      start: null,
      end: null,
    },
    5: {
      start: null,
      end: null,
    },
    totalElapsed: null,
  },
  topScore: {
    date: null,
    duration: null,
  },
};

export default db;
