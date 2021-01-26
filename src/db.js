// defines the initial localStore "database"
const db = {
  currentLevel: {
    // [0-6]
    number: 1,
    q1Answer: null,
    q2Answer: null,
    q3Answer: null,
  },
  // durations of current trial
  trial: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    totalElapsed: null,
  },
  topScore: {
    date: null,
    duration: null,
  },
};

export default db;
