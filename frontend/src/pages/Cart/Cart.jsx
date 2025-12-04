import React, { useState } from "react";

const Cart = () => {
  // Danh sách câu hỏi (có thể fetch từ backend)
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

  const [selected, setSelected] = useState({});
  const [score, setScore] = useState(null);

  const submitQuiz = () => {
    let s = 0;
    questions.forEach((q) => {
      if (selected[q.id] === q.answer) s++;
    });
    setScore(s);
  };

  const removeAnswer = (id) => {
    const temp = { ...selected };
    delete temp[id];
    setSelected(temp);
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Câu hỏi</p>
          <p>Đáp án của bạn</p>
          <p>Đúng/Sai</p>
          <p>Chọn đáp án</p>
          <p>Xoá</p>
        </div>
        <br />
        <hr />

        {questions.map((q) => (
          <div key={q.id}>
            <div className="cart-items-title cart-items-item">
              {/* Câu hỏi */}
              <p>{q.question}</p>

              {/* Đáp án bạn chọn */}
              <p>
                {selected[q.id] !== undefined
                  ? q.options[selected[q.id]]
                  : "---"}
              </p>

              {/* Đúng/Sai */}
              <p>
                {selected[q.id] !== undefined ? (
                  selected[q.id] === q.answer ? (
                    <span style={{ color: "green" }}>Đúng</span>
                  ) : (
                    <span style={{ color: "red" }}>Sai</span>
                  )
                ) : (
                  "-"
                )}
              </p>

              {/* Chọn đáp án */}
              <select
                value={selected[q.id] ?? ""}
                onChange={(e) =>
                  setSelected({
                    ...selected,
                    [q.id]: Number(e.target.value)
                  })
                }
              >
                <option value="">-- chọn --</option>
                {q.options.map((op, index) => (
                  <option key={index} value={index}>
                    {op}
                  </option>
                ))}
              </select>

              {/* Xoá */}
              <p className="cross" onClick={() => removeAnswer(q.id)}>
                x
              </p>
            </div>
            <hr />
          </div>
        ))}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Kết quả bài thi</h2>

          <div className="cart-total-details">
            <p>Số câu đúng</p>
            <p>{score !== null ? score : "-"}</p>
          </div>

          <div className="cart-total-details">
            <p>Tổng số câu</p>
            <p>{questions.length}</p>
          </div>

          <div className="cart-total-details">
            <b>Điểm</b>
            <b>{score !== null ? (score / questions.length) * 10 : "-"}</b>
          </div>

          <button onClick={submitQuiz}>NỘP BÀI</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>Nhập mã giáo viên giao bài (optional)</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="mã đề thi" />
              <button>Gửi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
