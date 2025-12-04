import React, { useState } from "react";

const Cart = () => {
  const questions = [
  {
    "id": 1,
    "question": "Chất nào sau đây vừa tác dụng được với H2NCH2COOH, vừa tác dụng với CH3NH2?",
    "options": ["NaCl", "HCl", "CH3OH", "NaOH"],
    "answer": 2
  },
  {
    "id": 2,
    "question": "Chất nào sau đây là este?",
    "options": ["CH3CHO", "C2H5OCH3", "CH3COOC2H5", "CH3COOH"],
    "answer": 3
  },
  {
    "id": 3,
    "question": "Cho chất X tác dụng với một lượng vừa đủ dung dịch NaOH, sau đó cô cạn dung dịch thu được chất rắn Y và chất hữu cơ Z. Cho Z tác dụng với AgNO3/NH3 thu được chất hữu cơ T. Cho chất T tác dụng với dung dịch NaOH lại thu được chất Y. Chất X có thể là",
    "options": ["CH3COOCH=CH2", "HCOOCH=CH2", "HCOOCH3", "CH3COOCH=CH-CH3"],
    "answer": 2
  },
  {
    "id": 4,
    "question": "Số đồng phân cấu tạo mạch hở có cùng công thức C4H8O2 tác dụng được với dung dịch NaOH nhưng không tác dụng với NaHCO3 là",
    "options": ["6", "3", "5", "4"],
    "answer": 4
  },
  {
    "id": 5,
    "question": "Loại tơ nào sau đây thuộc tơ thiên nhiên.",
    "options": ["Nilon-6,6", "Tơ visco", "Tơ tằm", "Tơ lapsan"],
    "answer": 3
  },
  {
    "id": 6,
    "question": "Chất phản ứng được với Cu(OH)2/OH- ở điều kiện thường tạo thành sản phẩm có màu tím là",
    "options": ["saccarozơ", "Gly - Ala - Val", "glixerol", "anđehit axetic"],
    "answer": 2
  },
  {
    "id": 7,
    "question": "Cho X, Y, Z, T là các chất khác nhau trong số 4 chất: CH3NH2, NH3, C6H5OH (phenol), C6H5NH2 (anilin) và các tính chất được ghi trong bảng sau: (bảng nhiệt độ sôi và pH) Nhận xét nào sau đây đúng?",
    "options": ["Z là CH3NH2", "T là C6H5NH2", "Y là C6H5OH", "X là NH3"],
    "answer": 1
  },
  {
    "id": 8,
    "question": "Dãy nào sau đây gồm các chất sắp xếp theo thứ tự tăng dần lực bazơ?",
    "options": ["Anilin, metyl amin, amoniac", "Anilin, amoniac, metyl amin", "Amoniac, etyl amin, anilin", "Etyl amin, anilin, amoniac"],
    "answer": 2
  },
  {
    "id": 9,
    "question": "Để chứng minh trong glucozơ có nhiều nhóm -OH, người ta sử dụng phản ứng nào sau đây?",
    "options": ["AgNO3/NH3, t°", "CH3OH/HCl", "Na", "Cu(OH)2, t° thường"],
    "answer": 4
  },
  {
    "id": 10,
    "question": "Phát biểu nào sau đây không đúng?",
    "options": ["Saccarozơ phản ứng với dung dịch AgNO3/NH3, đun nóng tạo kết tủa Ag", "Glucozơ phản ứng với Cu(OH)2 ở nhiệt độ thường tạo dung dịch màu xanh lam", "Khi thuỷ phân hoàn toàn tinh bột thu được glucozơ", "Glucozơ và fructozơ là đồng phân của nhau"],
    "answer": 1
  },
  {
    "id": 11,
    "question": "Tripanmitin có công thức là",
    "options": ["(C15H31COO)3C3H5", "(C17H35COO)3C3H5", "(C17H33COO)3C3H5", "(C17H31COO)3C3H5"],
    "answer": 1
  },
  {
    "id": 12,
    "question": "Loại đường nào sau đây có nhiều trong cây mía:",
    "options": ["mantozơ", "glucozơ", "saccarozơ", "fructozơ"],
    "answer": 3
  },
  {
    "id": 13,
    "question": "Glyxin có công thức cấu tạo thu gọn là",
    "options": ["CH3NH2", "NH2CH2COOH", "C2H5NH2", "H2NCH(CH3)COOH"],
    "answer": 2
  },
  {
    "id": 14,
    "question": "Chất nào sau đây thuộc loại amin bậc một?",
    "options": ["(CH3)3CNH2", "CH3CH2OH", "(CH3)3N", "CH3CH2NHCH3"],
    "answer": 1
  },
  {
    "id": 15,
    "question": "X có công thức cấu tạo CH2 = CH - COOCH3. Tên gọi của X là:",
    "options": ["vinyl axetat", "metyl acrylat", "metyl fomat", "metyl axetat"],
    "answer": 2
  },
  {
    "id": 16,
    "question": "Cho este X (C8H8O2) tác dụng với lượng dư dd KOH thu được hai muối hữu cơ và H2O. X có tên gọi là",
    "options": ["metyl benzoat", "phenyl axetat", "phenyl fomat", "benzyl fomat"],
    "answer": 2
  },
  {
    "id": 17,
    "question": "Phát biểu nào sau đây là sai?",
    "options": ["Chất béo không tan trong nước, nhẹ hơn nước nhưng tan nhiều trong dung môi hữu cơ", "Chất béo lỏng có phản ứng cộng H2", "Trong công nghiệp, một lượng lớn chất béo dùng để điều chế xà phòng và glixerol", "Chất béo rắn được tạo nên từ các gốc axit béo không no"],
    "answer": 4
  },
  {
    "id": 18,
    "question": "Cho dãy các chất: glucozơ, xenlulozơ, saccarozơ, tinh bột, fructozơ, natri fomat. Số chất trong dãy tham gia phản ứng tráng gương là :",
    "options": ["2", "4", "3", "5"],
    "answer": 3
  },
  {
    "id": 19,
    "question": "C3H7O2N + NaOH → (X) + CH3OH. CTCT của X là",
    "options": ["CH3COONH4", "NH2CH2COONa", "H2NCH2CH2COONa", "H2NCH2COOCH3"],
    "answer": 2
  },
  {
    "id": 20,
    "question": "Cho dãy các dung dịch: glucozơ, saccarozơ, etanol, glixerol. Số dung dịch trong dãy phản ứng được với Cu(OH)2 ở nhiệt độ thường tạo thành dung dịch có màu xanh lam là",
    "options": ["4", "1", "3", "2"],
    "answer": 3
  },
  {
    "id": 21,
    "question": "Chất không tham gia phản ứng trùng hợp là",
    "options": ["caprolactam", "stiren", "toluen", "etilen"],
    "answer": 3
  },
  {
    "id": 22,
    "question": "Cho các phát biểu sau: (1) Ở nhiệt độ thường, Cu(OH)2 tan được trong dung dịch etylenglicol. (2) Ở nhiệt độ thường, C2H4 phản ứng được với nước brom. (3) Đốt cháy hoàn toàn CH3COOCH3 thu được số mol CO2 bằng số mol H2O. (4) Glyxin (H2NCH2COOH) phản ứng được với dung dịch NaOH. (5) Ở nhiệt độ thường CH3CHO phản ứng với dung dịch Br2 trong CCl4. Số phát biểu đúng là",
    "options": ["4", "3", "1", "2"],
    "answer": 4
  },
  {
    "id": 23,
    "question": "Dung dịch của hợp chất nào sau đây không làm đổi màu giấy quì ẩm?",
    "options": ["CH3NH2", "H2N-CH2-CH(NH2)COOH", "C6H5ONa", "H2NCH2COOH"],
    "answer": 4
  },
  {
    "id": 24,
    "question": "Thủy phân hoàn toàn 1 mol pentapeptit X thu được 2 mol glyxin, 1 mol alanin, 1 mol valin và 1 mol phelylalanin. Thủy phân không hoàn toàn X được đipeptit: Val-Phe và Tripeptit: Gly-Ala-Val, không thu được Gly-Gly. X là:",
    "options": ["Gly-Ala-Val-Phe-Gly", "Gly-Phe-Gly-Ala-Val", "Gly-Ala-Val-Val-Phe", "Val-Phe-Gly-Ala-Gly"],
    "answer": 1
  },
  {
    "id": 25,
    "question": "Đốt cháy hoàn toàn 6 gam este X bằng lượng O2 vừa đủ, thu được 4,48 lít khí CO2 (đktc) và 3,6 gam H2O. Công thức phân tử của X là",
    "options": ["C3H6O2", "C2H4O2", "C4H6O2", "C4H8O2"],
    "answer": 4
  },
  {
    "id": 26,
    "question": "Cho 0,15 mol H2N-C3H5(COOH)2 vào 175 ml HCl 2M thu được dung dịch X. Cho NaOH dư vào X. Sau phản ứng hoàn toàn số mol NaOH phản ứng là:",
    "options": ["0,5", "0,7", "0,65", "0,55"],
    "answer": 3
  },
  {
    "id": 27,
    "question": "Cho 7,4 gam hỗn hợp tất cả các chất đồng phân C3H6O2 (đơn chức, mạch hở, có cùng số mol) phản ứng với NaHCO3 (dư). Thể tích CO2 thu được ở (đktc) là",
    "options": ["2,24 lít", "1,12 lít", "0,75 lít", "0,56 lít"],
    "answer": 2
  },
  {
    "id": 28,
    "question": "Xà phòng hoá hoàn toàn 14,8 gam hỗn hợp 2 este là HCOOC2H5 và CH3COOCH3 bằng một lượng dung dịch NaOH vừa đủ, đun nóng. Khối lượng NaOH cần dùng là.",
    "options": ["4,0g", "12,0g", "16,0g", "8,0g"],
    "answer": 4
  },
  {
    "id": 29,
    "question": "Khối lượng dung dịch HCl 7,3% cần để tác dụng hết với 4,5 gam etylamin là:",
    "options": ["3,65 gam", "36,5 gam", "7,3 gam", "50 gam"],
    "answer": 4
  },
  {
    "id": 30,
    "question": "Đốt cháy hoàn toàn m gam một chất béo (triglixerit) cần 1,61 mol O2, sinh ra 1,14 mol CO2 và 1,06 mol H2O. Cho 7,088 gam chất béo này tác dụng vừa đủ với dung dịch NaOH thì khối lượng muối tạo thành là :",
    "options": ["7,612 gam", "7,412 gam", "7,512 gam", "7,312 gam"],
    "answer": 3
  },
  {
    "id": 31,
    "question": "X là một tripeptit được tạo thành từ 1 aminoaxit no, mạch hở có 1 nhóm -COOH và 1 nhóm -NH2. Đốt cháy hoàn toàn 0,3 mol X cần 2,025 mol O2 thu được sản phẩm gồm CO2, H2O, N2. Vậy công thức của amino axit tạo nên X là",
    "options": ["H2NC3H6COOH", "H2NC2H4COOH", "H2NCH2COOH", "H2N-COOH"],
    "answer": 3
  },
  {
    "id": 32,
    "question": "Trùng hợp m tấn etilen thu được 1 tấn polietilen (PE) với hiệu suất phản ứng bằng 80%. Giá trị của m là",
    "options": ["1,25", "0,80", "1,80", "2,00"],
    "answer": 1
  },
  {
    "id": 33,
    "question": "Cho m gam glucozơ phản ứng hoàn toàn với lượng dư dung dịch AgNO3 trong NH3 (đun nóng), thu được 21,6 gam Ag. Giá trị của m là",
    "options": ["18,0", "9,0", "36,0", "16,2"],
    "answer": 1
  },
  {
    "id": 34,
    "question": "Từ 5 kg gạo nếp (có 81% tinh bột) khi lên men sẽ thu được bao nhiêu lít cồn 92°? Biết hiệu suất toàn bộ quá trình lên men đạt 80% và khối lượng riêng của ancol etylic là 0,8 g/ml",
    "options": ["2,116 lít", "2,500 lít", "2,208 lít", "2,000 lít"],
    "answer": 1
  },
  {
    "id": 35,
    "question": "Cho 21 gam hỗn hợp gồm glyxin và axit axetic tác dụng vừa đủ với dung dịch KOH, thu được dung dịch X chứa 32,4 gam muối. Cho X tác dụng với dung dịch HCl dư, thu được dung dịch chứa m gam muối. Giá trị của m là",
    "options": ["22,35", "44,65", "33,50", "50,65"],
    "answer": 4
  },
  {
    "id": 36,
    "question": "Xà phòng hoá hoàn toàn m gam một este no, đơn chức, mạch hở E bằng 26 gam dung dịch MOH 28% (M là kim loại kiềm). Cô cạn hỗn hợp sau phản ứng thu được 24,72 gam chất lỏng X và 10,08 gam chất rắn khan Y. Đốt cháy hoàn toàn Y, thu được sản phẩm gồm CO2, H2O và 8,97 gam muối cacbonat khan. Mặt khác, cho X tác dụng với Na dư, thu được 12,768 lít khí H2 (đktc). Phần trăm khối lượng muối trong Y có giá trị gần nhất với",
    "options": ["80,0", "97,5", "67,5", "85,0"],
    "answer": 4
  },
  {
    "id": 37,
    "question": "Cho a gam hỗn hợp X gồm glyxin, alanin và valin phản ứng với 200 ml dd HCl 0,2M, thu được dd Y. Để phản ứng hết với các chất trong dd Y cần 100 ml dd KOH 1,1M. Đốt cháy hoàn toàn a gam hỗn hợp X, thu được hỗn hợp Z gồm CO2, H2O và N2. Cho Z vào bình đựng dd Ba(OH)2 dư, thấy khối lượng bình tăng 14,89 gam. Biết các phản ứng xảy ra hoàn toàn. Giá trị của a là",
    "options": ["5,53", "4,27", "6,23", "6,51"],
    "answer": 1
  },
  {
    "id": 38,
    "question": "X là tetrapeptit Ala-Gly-Val-Ala, Y là tripeptit Val-Gly-Val. Đun nóng m (gam) hỗn hợp chứa X và Y có tỉ lệ số mol của X và Y tương ứng là 1:3 với dung dịch NaOH vừa đủ. Phản ứng hoàn toàn thu được dung dịch T. Cô cạn cẩn thận dung dịch T thu được 23,745 gam chất rắn khan. Giá trị của m là",
    "options": ["68,1", "18,345", "17,025", "19,455"],
    "answer": 3
  },
  {
    "id": 39,
    "question": "Hỗn hợp X gồm các chất lần lượt có công thức phân tử là CH4O, C5H8O, C7H10O, C3H6O, chúng đều mạch hở và có chung 1 loại nhóm chức. Đốt 0,15 mol hỗn hợp X rồi dẫn vào bình đựng dung dịch Ca(OH)2 dư sau phản ứng khối lượng dung dịch giảm 28,38 gam. Nếu cho 0,15 mol hỗn hợp trên vào dung dịch brom dư thì có bao nhiêu gam brom phản ứng?",
    "options": ["43,2", "64,8", "56,7", "32,4"],
    "answer": 1
  },
  {
    "id": 40,
    "question": "Cho hỗn hợp X gồm: etan, propilen, benzen, metylaxetat, axit propanoic. Đốt cháy hoàn toàn m (g) hỗn hợp X cần dùng 4,592 lít khí O2 (đktc) thu được hỗn hợp sản phẩm. Cho toàn bộ sản phẩm cháy vào 100ml dung dịch Ca(OH)2 1M thu được 5g kết tủa và một muối của Ca. Sau phản ứng thấy khối lượng dung dịch tăng 4,3g. Phần trăm số mol của hỗn hợp (metylaxetat, axit propanoic) trong X là",
    "options": ["12,22%", "60%", "87,78%", "40%"],
    "answer": 4
  }
]

  const letters = ["A", "B", "C", "D"];

  const [selected, setSelected] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const submitQuiz = () => {
    let s = 0;
    questions.forEach((q) => {
      if (selected[q.id] === q.answer) s++;
    });
    setScore(s);
    setSubmitted(true);
  };

  return (
    <div className="quiz">
      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: "30px" }}>
          <h3>{q.question}</h3>

          {q.options.map((op, index) => (
            <label
              key={index}
              style={{
                display: "block",
                cursor: "pointer",
                margin: "5px 0"
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
                disabled={submitted} // Lock answers after submitting
              />
              <strong>{letters[index]}.</strong> {op}
            </label>
          ))}

          {/* Show ĐÚNG / SAI only after clicking "Nộp bài" */}
          {submitted && (
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

      {/* NỘP BÀI button hidden after submit */}
      {!submitted && (
        <button onClick={submitQuiz} style={{ padding: "10px 20px" }}>
          Nộp bài
        </button>
      )}

      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h2>Kết quả</h2>
          <p>Số câu đúng: {score}</p>
          <p>Tổng số câu: {questions.length}</p>
          <h3>Điểm: {(score / questions.length) * 10}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
