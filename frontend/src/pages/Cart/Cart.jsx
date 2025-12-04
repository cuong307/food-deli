import React, { useState } from "react";

const Cart = () => {
  const questions = [
    {
      id: 1,
      question: "Chất nào sau đây là axit mạnh?",
      options: ["H2CO3", "HCl", "H2S", "CH3COOH"],
      answer: 1
    },
    {
      id: 2,
      question: "Dung dịch NaOH có pH xấp xỉ?",
      options: ["7", "12", "4", "1"],
      answer: 1
    },
    {
      id: 3,
      question: "Kim loại nào phản ứng mạnh với nước?",
      options: ["Na", "Cu", "Ag", "Hg"],
      answer: 0
    }
  ];

  const letters = ["A", "B", "C", "D"];
  const [selected, setSelected] = useState({});
  const [score, setScore] = useState(null);

  const submitQuiz = () => {
    let s = 0;
    questions.forEach((q) => {
      if (selected[q.id] === q.answer) s++;
    });
    setScore(s);
  };

  return (
    <div className="quiz">
      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: "30px" }}>
          <h3>{q.question}</h3>

          {/* LIST A/B/C/D */}
          {q.options.map((op, index) => (
            <label
              key={index}
              style={{
                display: "block",
                margin: "5px 0",
                cursor: "pointer"
              }}
            >
              <input
                type="radio"
                name={`q-${q.id}`}
                value={index}
                checked={selected[q.id] === index}
                onChange={() =>
                  setSelected({
                    ...selected,
                    [q.id]: index
                  })
                }
              />
              <strong>{letters[index]}.</strong> {op}
            </label>
          ))}

          {/* Show Correct / Incorrect */}
          {selected[q.id] !== undefined && (
            <p>
              {selected[q.id] === q.answer ? (
                <span style={{ color: "green" }}>Đúng</span>
              ) : (
                <span style={{ color: "red" }}>Sai</span>
              )}
            </p>
          )}

          <hr />
        </div>
      ))}

      <button onClick={submitQuiz} style={{ padding: "10px 20px" }}>
        Nộp bài
      </button>

      {score !== null && (
        <div style={{ marginTop: "20px" }}>
          <h2>Kết quả</h2>
          <p>Đúng: {score}</p>
          <p>Tổng số câu: {questions.length}</p>
          <h3>Điểm: {(score / questions.length) * 10}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
