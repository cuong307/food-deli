import React, { useState, useEffect } from "react";
import "./ExploreMenu.css";

// We'll dynamically import the JSON files from assets/question
const quizFiles = [
  "quiz1.json",
  "quiz2.json",
  "quiz3.json",
  "quiz4.json",
  "quiz5.json",
  "quiz6.json",
  "quiz7.json",
  "quiz8.json",
];

const ExploreMenu = ({ category, setCategory }) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Load all quiz files dynamically
    const loadQuizzes = async () => {
      const loaded = await Promise.all(
        quizFiles.map(async (file) => {
          const data = await import(`../../assets/questions/${file}`);
          return { name: file.replace(".json", ""), content: data.default };
        })
      );
      setQuizzes(loaded);
    };
    loadQuizzes();
  }, []);

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Quizzes</h1>
      <p className="explore-menu-text">
        Choose a quiz to test your knowledge. Each quiz contains 10 questions.
      </p>

      <div className="explore-menu-list">
        {quizzes.map((quiz, index) => (
          <div
            key={index}
            onClick={() => setCategory(prev => prev === quiz.name ? "All" : quiz.name)}
            className="explore-menu-list-item"
          >
            <img
              className={category === quiz.name ? "active" : ""}
              src="/assets/questions/quiz-icon.png" // placeholder icon for each quiz
              alt={quiz.name}
            />
            <p>{quiz.name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
