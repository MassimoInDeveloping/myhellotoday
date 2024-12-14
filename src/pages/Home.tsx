import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

interface HistoryCard {
  title: { en: string; it: string };
  period: string;
  description: { en: string; it: string };
}

interface GeographyQuiz {
  question: { en: string; it: string };
  options: string[];
  correctAnswer: string;
}

export default function Home() {
  const [showAnswer, setShowAnswer] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const { language } = useLanguage();

  const historyCards: HistoryCard[] = [
    {
      title: {
        en: "Holy Roman Empire",
        it: "Sacro Romano Impero"
      },
      period: "962-1806",
      description: {
        en: "A complex of territories in central Europe that developed during the Middle Ages. It was also known as the Holy Roman Empire of the German Nation from the 16th century onwards.",
        it: "Un complesso di territori nell'Europa centrale sviluppatosi durante il Medioevo. Era anche conosciuto come Sacro Romano Impero della Nazione Germanica dal XVI secolo in poi."
      }
    },
    {
      title: {
        en: "World War II",
        it: "Seconda Guerra Mondiale"
      },
      period: "1939-1945",
      description: {
        en: "A global war that involved most of the world's nations. Key events included D-Day invasion, Battle of Stalingrad, and the Pacific Theater.",
        it: "Una guerra globale che ha coinvolto la maggior parte delle nazioni del mondo. Eventi chiave includono lo sbarco in Normandia, la battaglia di Stalingrado e il teatro del Pacifico."
      }
    },
    {
      title: {
        en: "French Revolution",
        it: "Rivoluzione Francese"
      },
      period: "1789-1799",
      description: {
        en: "A period of radical social and political upheaval in French history that had a lasting impact on French history and more broadly throughout Europe.",
        it: "Un periodo di radicale sconvolgimento sociale e politico nella storia francese che ha avuto un impatto duraturo sulla storia francese e più in generale in tutta Europa."
      }
    }
  ];

  const geographyQuizzes: GeographyQuiz[] = [
    {
      question: {
        en: "What is the largest desert in the world?",
        it: "Qual è il deserto più grande del mondo?"
      },
      options: ["Sahara", "Antarctic", "Arctic", "Gobi"],
      correctAnswer: "Antarctic"
    },
    {
      question: {
        en: "Which mountain range runs through Italy?",
        it: "Quale catena montuosa attraversa l'Italia?"
      },
      options: ["Alps", "Andes", "Himalayas", "Rockies"],
      correctAnswer: "Alps"
    },
    {
      question: {
        en: "What is the capital of Brazil?",
        it: "Qual è la capitale del Brasile?"
      },
      options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
      correctAnswer: "Brasília"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          {language === 'en' ? 'Welcome Back' : 'Bentornato'}
        </h1>
        <p className="text-muted-foreground">
          {language === 'en' ? "Here's an overview of your activity" : "Ecco una panoramica della tua attività"}
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {historyCards.map((card, index) => (
          <Card 
            key={index} 
            className={`p-6 hover-scale glass cursor-pointer ${selectedCard === index ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setSelectedCard(index)}
          >
            <h3 className="font-semibold mb-2">{card.title[language]}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {language === 'en' ? 'Period' : 'Periodo'}: {card.period}
            </p>
            <p className="text-sm">
              {card.description[language]}
            </p>
          </Card>
        ))}

        {geographyQuizzes.map((quiz, index) => (
          <Card key={index} className="p-6 hover-scale glass">
            <h3 className="font-semibold mb-4">
              {language === 'en' ? 'Geography Quiz' : 'Quiz di Geografia'} #{index + 1}
            </h3>
            <p className="text-sm mb-4">{quiz.question[language]}</p>
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