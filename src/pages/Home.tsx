import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface HistoryCard {
  title: string;
  period: string;
  description: string;
}

interface GeographyQuiz {
  question: string;
  options: string[];
  correctAnswer: string;
}

export default function Home() {
  const [showAnswer, setShowAnswer] = useState<number | null>(null);

  const historyCards: HistoryCard[] = [
    {
      title: "Holy Roman Empire",
      period: "962-1806",
      description: "A complex of territories in central Europe that developed during the Middle Ages. It was also known as the Holy Roman Empire of the German Nation from the 16th century onwards."
    },
    {
      title: "World War II",
      period: "1939-1945",
      description: "A global war that involved most of the world's nations. Key events included D-Day invasion, Battle of Stalingrad, and the Pacific Theater."
    },
    {
      title: "French Revolution",
      period: "1789-1799",
      description: "A period of radical social and political upheaval in French history that had a lasting impact on French history and more broadly throughout Europe."
    }
  ];

  const geographyQuizzes: GeographyQuiz[] = [
    {
      question: "What is the largest desert in the world?",
      options: ["Sahara", "Antarctic", "Arctic", "Gobi"],
      correctAnswer: "Antarctic"
    },
    {
      question: "Which mountain range runs through Italy?",
      options: ["Alps", "Andes", "Himalayas", "Rockies"],
      correctAnswer: "Alps"
    },
    {
      question: "What is the capital of Brazil?",
      options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
      correctAnswer: "Brasília"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
        <p className="text-muted-foreground">
          Here's an overview of your activity
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {historyCards.map((card, index) => (
          <Card key={index} className="p-6 hover-scale glass">
            <h3 className="font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Period: {card.period}
            </p>
            <p className="text-sm">
              {card.description}
            </p>
          </Card>
        ))}

        {geographyQuizzes.map((quiz, index) => (
          <Card key={index} className="p-6 hover-scale glass">
            <h3 className="font-semibold mb-4">Geography Quiz #{index + 1}</h3>
            <p className="text-sm mb-4">{quiz.question}</p>
            <div className="space-y-2">
              {quiz.options.map((option, optionIndex) => (
                <Button
                  key={optionIndex}
                  variant={showAnswer === index && option === quiz.correctAnswer ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setShowAnswer(index)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}