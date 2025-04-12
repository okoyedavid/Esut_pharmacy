import { Save } from "lucide-react";
import Button from "../../../ui/Button";
import Modal, { useModal } from "../../../ui/Modal";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { calculateGradePoint } from "../../../utils/helper";
import { getData, insertData, updateTable } from "../../../services/backend";
import { useGetUser } from "../../../hooks/useGetUser";
import { useMutate } from "../../../hooks/useMutate";

const ResultModal = ({ course }) => {
  const { data: user } = useGetUser();
  const { close } = useModal();
  const [scores, setScores] = useState([]);

  async function handleSave() {
    const data = await getData("assessments", {
      column: "user_id",
      value: user.id,
    });

    const isPresent = data.filter((item) => item.course_id === course.id);

    if (isPresent.length === 0) {
      await insertData("assessments", [
        {
          user_id: user.id,
          course_id: course.id,
          grade,
          percentage,
          scores: scores,
        },
      ]);
    } else {
      await updateTable(
        "assessments",
        [{ grade, percentage, scores: scores }],
        [
          { column: "user_id", value: user.id },
          { column: "course_id", value: course.id },
        ]
      );
    }
  }

  const { mutate, isPending } = useMutate(
    handleSave,
    "update assessments",
    "assessments"
  );

  function recordResult() {
    mutate(
      {},
      {
        onSuccess: () => {
          close();
        },
      }
    );
  }

  useEffect(() => {
    if (course) {
      setScores(course.assessments);
    }
  }, [course]);

  if (!course) return null;

  const handleScoreChange = (index, value) => {
    const newScores = [...scores];
    newScores[index] = {
      ...newScores[index],
      score: Math.min(parseInt(value) || 0, newScores[index].total),
    };
    setScores(newScores);
  };

  const totalScore = scores.reduce((acc, curr) => acc + curr.score, 0);
  const totalPossible = scores.reduce((acc, curr) => acc + curr.total, 0);
  const percentage = ((totalScore / totalPossible) * 100).toFixed(1);
  const { grade, points } = calculateGradePoint(scores);

  return (
    <Modal.Window name={"result modal"}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="rounded-xl p-6 max-w-lg w-full"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold">{course.code}</h3>
            <p className="text-gray-600">{course.title}</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold">Course Details</h4>
              <span className="text-sm text-blue-600">
                {course.units} Units
              </span>
            </div>
            <p className="text-sm text-gray-600">{course.description}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Assessment Scores</h4>
            <div className="space-y-4">
              {scores.map((assessment, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">
                      {assessment.type} (Max: {assessment.total})
                    </label>
                    <input
                      type="number"
                      min="0"
                      max={assessment.total}
                      value={assessment.score}
                      onChange={(e) => handleScoreChange(index, e.target.value)}
                      className="w-20 px-3 py-1 border border-gray-300 rounded-lg text-right"
                    />
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${
                          (assessment.score / assessment.total) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-1">Total Score</p>
              <p className="text-xl font-bold">
                {totalScore}/{totalPossible}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-1">Percentage</p>
              <p className="text-xl font-bold">{percentage}%</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-1">Grade (Points)</p>
              <p className="text-xl font-bold">
                {grade} ({points})
              </p>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={close}>
              Cancel
            </Button>
            <Button
              variant="primary"
              isLoading={isPending}
              onClick={recordResult}
              icon={<Save className="h-4 w-4" />}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </motion.div>
    </Modal.Window>
  );
};

export default ResultModal;
