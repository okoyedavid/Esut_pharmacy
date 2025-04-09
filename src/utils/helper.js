export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}
export const calculateGPA = (courses) => {
  let totalPoints = 0;
  let totalUnits = 0;

  courses.forEach((course) => {
    const { points } = calculateGradePoint(course.assessments);
    totalPoints += points * course.units;
    totalUnits += course.units;
  });

  return totalUnits === 0 ? 0 : (totalPoints / totalUnits).toFixed(2);
};

export const calculateGradePoint = (score) => {
  const totalScore = score.reduce(
    (acc, assessment) => acc + assessment.score,
    0
  );
  const totalPossible = score.reduce(
    (acc, assessment) => acc + assessment.total,
    0
  );
  const percentage = (totalScore / totalPossible) * 100;

  if (percentage >= 70) return { grade: "A", points: 5.0 };
  if (percentage >= 60) return { grade: "B", points: 4.0 };
  if (percentage >= 50) return { grade: "C", points: 3.0 };
  if (percentage >= 45) return { grade: "D", points: 0 };
  if (percentage >= 40) return { grade: "E", points: 0 };
  return { grade: "F", points: 0.0 };
};

export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now - date;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return "Just now";
};

export function getPassedLevels(level) {
  const pastLevels = [];
  for (let lvl = level - 100; lvl >= 100; lvl -= 100) {
    pastLevels.push(lvl);
  }

  return pastLevels;
}

export function getClassification(gp) {
  if (gp >= 4.5) {
    return {
      classification: "First Class Honours",
      standing: "Outstanding",
    };
  } else if (gp >= 3.5) {
    return {
      classification: "Second Class Honours (Upper Division)",
      standing: "Very Good",
    };
  } else if (gp >= 2.5) {
    return {
      classification: "Second Class Honours (Lower Division)",
      standing: "Good",
    };
  } else if (gp >= 1.5) {
    return {
      classification: "Third Class Honours",
      standing: "Fair",
    };
  } else if (gp >= 1.0) {
    return {
      classification: "Pass",
      standing: "Satisfactory",
    };
  } else {
    return {
      classification: "Fail",
      standing: "Unsatisfactory",
    };
  }
}
