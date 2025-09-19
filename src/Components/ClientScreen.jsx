import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../Styling/ClientScreen.css";

function ClientScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [emailStatus, setEmailStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const questions = [
    {
      id: "budget",
      type: "multiple-choice",
      question: "What's your budget?",
      options: ["$500-1.5K", "$1.5-3K", "$3-6K", "$6K+"],
    },
    {
      id: "decision_maker",
      type: "multiple-choice",
      question: "Are you the decision maker?",
      options: ["Yes", "Share decisions with 1-2 others", "No"],
    },
    {
      id: "timeline",
      type: "multiple-choice",
      question: "What's your ideal timeline?",
      options: [
        "ASAP (2-4 weeks)",
        "Standard (1-2 months)",
        "Flexible (2+ months)",
      ],
    },
    {
      id: "current_site",
      type: "multiple-choice",
      question: "What's your website built with?",
      options: [
        "WordPress",
        "Shopify",
        "Squarespace/Wix",
        "Custom website",
        "None",
      ],
    },
    {
      id: "previous_experience",
      type: "multiple-choice",
      question: "Have you worked with a software freelancer or agency before?",
      options: ["Yes, great experience", "Yes, bad experience", "First time"],
    },
    {
      id: "business_problem",
      type: "open-ended",
      question:
        "What's the main business problem this new website needs to solve?",
      placeholder:
        "e.g. Not getting enough leads, looks outdated, hard to update...",
    },
    {
      id: "frustrations",
      type: "open-ended",
      question:
        "What's been your biggest frustration with your current website or past projects?",
      placeholder:
        "e.g. Developer was bad, site crashes, too expensive to update...",
    },
    {
      id: "email",
      type: "open-ended",
      question: "What's your email?",
      placeholder: "e.g. example@example.com",
    },
  ];

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const sendQuestionnaire = async () => {
    setIsLoading(true);
    setEmailStatus("Sending...");

    try {
      const emailData = {
        budget: answers.budget || "Not answered",
        decision_maker: answers.decision_maker || "Not answered",
        timeline: answers.timeline || "Not answered",
        current_site: answers.current_site || "Not answered",
        business_problem: answers.business_problem || "Not answered",
        frustrations: answers.frustrations || "Not answered",
        email: answers.email || "Not answered", // ADD THIS LINE
        previous_experience: answers.previous_experience || "Not answered",
        timestamp: new Date().toLocaleString("en-US", {
          timeZone: "America/Chicago",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZoneName: "short", // This adds "CST" or "CDT"
        }),
      };

      console.log("Sending questionnaire with data:", emailData);

      const result = await emailjs.send(
        "service_tr084pp", // Replace with your EmailJS service ID
        "template_hfrh45g", // Replace with your EmailJS template ID
        emailData,
        "TH8EuEmmQ8rpFc5Wv" // Replace with your EmailJS public key
      );

      console.log("EmailJS success:", result);
      setEmailStatus("Questionnaire sent successfully!");
      return true;
    } catch (error) {
      console.error("Email send error:", error);
      setEmailStatus(
        `Error: ${error.message || "Failed to send questionnaire"}`
      );
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Last question, send the questionnaire
      sendQuestionnaire();
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const currentQ = questions[currentQuestion];
  const isAnswered = answers[currentQ.id];
  const isLastQuestion = currentQuestion === questions.length - 1;

  // Success screen
  if (emailStatus === "Questionnaire sent successfully!") {
    return (
      <div className="questionnaire-container">
        <div className="questionnaire-card">
          <div className="success-message">
            <h2>Perfect!</h2>
            <p>
              Thank you for your time. We'll review your answers and get back to
              you.
            </p>

            <button className="close-button" onClick={goHome}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="questionnaire-container">
      <div className="questionnaire-card">
        {/* Progress bar */}
        <div className="progress-section">
          <div className="progress-info">
            <span>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span>
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>
        {/* Question */}
        <div className="question-section">
          {isLoading ? <h2>...</h2> : <h2>{currentQ.question}</h2>}

          {currentQ.type === "multiple-choice" ? (
            <div className="options-container">
              {currentQ.options.map((option, index) => (
                <label key={index} className="option-label">
                  <input
                    type="radio"
                    name={currentQ.id}
                    value={option}
                    checked={answers[currentQ.id] === option}
                    onChange={(e) => handleAnswer(currentQ.id, e.target.value)}
                  />
                  <span className="option-text">{option}</span>
                </label>
              ))}
            </div>
          ) : (
            <textarea
              className="textarea-input"
              placeholder={currentQ.placeholder}
              value={answers[currentQ.id] || ""}
              onChange={(e) => handleAnswer(currentQ.id, e.target.value)}
              rows="4"
            />
          )}
        </div>
        {/* Status message - HIDE when loading */}
        {emailStatus &&
          emailStatus !== "Questionnaire sent successfully!" &&
          !isLoading && <div className="status-message">{emailStatus}</div>}
        {/* Navigation buttons */}
        <div className="button-container">
          {currentQuestion > 0 ? (
            <button
              onClick={handleBack}
              className="btn-secondary"
              disabled={isLoading}
            >
              Back
            </button>
          ) : (
            <button
              onClick={goHome}
              className="btn-secondary"
              disabled={isLoading}
            >
              Exit
            </button>
          )}

          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className="btn-primary"
          >
            {isLastQuestion ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientScreen;
