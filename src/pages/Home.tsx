import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Book, Globe2, History, XCircle, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface HistoryCard {
  title: { en: string; it: string };
  period: string;
  description: { en: string; it: string };
  fullContent: { en: string; it: string };
}

interface GeographyQuiz {
  question: { en: string; it: string };
  options: string[];
  correctAnswer: string;
}

export default function Home() {
  const [showAnswer, setShowAnswer] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentHistoryCard, setCurrentHistoryCard] = useState<HistoryCard | null>(null);
  const { language } = useLanguage();
  const { toast } = useToast();

  const historyCards: HistoryCard[] = [
    {
      title: {
        en: "Holy Roman Empire",
        it: "Sacro Romano Impero"
      },
      period: "962-1806",
      description: {
        en: "A complex of territories in central Europe that developed during the Middle Ages.",
        it: "Un complesso di territori nell'Europa centrale sviluppatosi durante il Medioevo."
      },
      fullContent: {
        en: "The Holy Roman Empire was a complex political entity that existed from 962 to 1806. It was centered in Central Europe and ruled by an emperor who was elected by prince-electors. At its height, it encompassed modern-day Germany, Austria, Czech Republic, northern Italy, and parts of France. The Empire played a crucial role in medieval and early modern European politics, though its power structure was often decentralized. Notable emperors included Otto I, Frederick Barbarossa, and Charles V. The Empire's influence gradually declined until its dissolution in 1806 during the Napoleonic Wars.",
        it: "Il Sacro Romano Impero fu un'entità politica complessa esistita dal 962 al 1806. Era centrato nell'Europa centrale e governato da un imperatore eletto dai principi elettori. Al suo apice, comprendeva la Germania moderna, l'Austria, la Repubblica Ceca, l'Italia settentrionale e parti della Francia. L'Impero ebbe un ruolo cruciale nella politica europea medievale e moderna, sebbene la sua struttura di potere fosse spesso decentralizzata. Tra gli imperatori più notevoli ci furono Ottone I, Federico Barbarossa e Carlo V. L'influenza dell'Impero diminuì gradualmente fino al suo scioglimento nel 1806 durante le guerre napoleoniche."
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
      },
      fullContent: {
        en: "World War II was a global conflict that lasted from 1939 to 1945, involving most of the world's nations. It was marked by significant events such as the Holocaust, the use of atomic bombs on Hiroshima and Nagasaki, and the establishment of the United Nations. The war resulted in an estimated 70-85 million fatalities, making it the deadliest conflict in human history.",
        it: "La Seconda Guerra Mondiale è stata un conflitto globale che è durato dal 1939 al 1945, coinvolgendo la maggior parte delle nazioni del mondo. È stata caratterizzata da eventi significativi come l'Olocausto, l'uso di bombe atomiche su Hiroshima e Nagasaki e la creazione delle Nazioni Unite. La guerra ha causato un numero stimato di 70-85 milioni di morti, rendendola il conflitto più mortale della storia umana."
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
      },
      fullContent: {
        en: "The French Revolution was a period of significant social and political change in France from 1789 to 1799. It led to the rise of radical political groups, the establishment of the First French Republic, and the eventual rise of Napoleon Bonaparte. The revolution had a profound impact on the course of modern history, influencing revolutions and movements for democracy worldwide.",
        it: "La Rivoluzione Francese è stata un periodo di significativo cambiamento sociale e politico in Francia dal 1789 al 1799. Ha portato all'emergere di gruppi politici radicali, all'istituzione della Prima Repubblica Francese e all'eventuale ascesa di Napoleone Bonaparte. La rivoluzione ha avuto un impatto profondo sul corso della storia moderna, influenzando rivoluzioni e movimenti per la democrazia in tutto il mondo."
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

  const handleAnswerClick = (quizIndex: number, selectedOption: string) => {
    setSelectedAnswer(selectedOption);
    setShowAnswer(quizIndex);
    
    const isCorrect = selectedOption === geographyQuizzes[quizIndex].correctAnswer;
    
    toast({
      title: isCorrect 
        ? (language === 'en' ? "Correct!" : "Corretto!") 
        : (language === 'en' ? "Incorrect!" : "Sbagliato!"),
      description: isCorrect 
        ? (language === 'en' ? "Well done!" : "Ben fatto!") 
        : (language === 'en' ? "Try again!" : "Riprova!"),
      variant: isCorrect ? "default" : "destructive",
    });
  };

  const openHistoryDetails = (card: HistoryCard) => {
    setCurrentHistoryCard(card);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <History className="h-6 w-6" />
          <h1 className="text-3xl font-bold tracking-tight">
            {language === 'en' ? 'Welcome Back' : 'Bentornato'}
          </h1>
        </div>
        <p className="text-muted-foreground">
          {language === 'en' ? "Here's an overview of SCDemo" : "Ecco una panoramica delle funzioni in SCDemo"}
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {historyCards.map((card, index) => (
          <Card 
            key={index} 
            className={`p-6 hover-scale glass cursor-pointer ${selectedCard === index ? 'ring-2 ring-primary' : ''}`}
            onClick={() => {
              setSelectedCard(index);
              openHistoryDetails(card);
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Book className="h-5 w-5" />
              <h3 className="font-semibold">{card.title[language]}</h3>
            </div>
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
            <div className="flex items-center gap-2 mb-4">
              <Globe2 className="h-5 w-5" />
              <h3 className="font-semibold">
                {language === 'en' ? 'Geography Quiz' : 'Quiz di Geografia'} #{index + 1}
              </h3>
            </div>
            <p className="text-sm mb-4">{quiz.question[language]}</p>
            <div className="space-y-2">
              {quiz.options.map((option, optionIndex) => (
                <Button
                  key={optionIndex}
                  variant={showAnswer === index && option === quiz.correctAnswer ? "default" : "outline"}
                  className={`w-full flex justify-between items-center ${
                    showAnswer === index && selectedAnswer === option && option !== quiz.correctAnswer
                      ? 'border-destructive text-destructive'
                      : ''
                  }`}
                  onClick={() => handleAnswerClick(index, option)}
                >
                  <span>{option}</span>
                  {showAnswer === index && (
                    option === quiz.correctAnswer ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : selectedAnswer === option ? (
                      <XCircle className="h-4 w-4 text-destructive" />
                    ) : null
                  )}
                </Button>
              ))}
              {showAnswer === index && selectedAnswer !== quiz.correctAnswer && (
                <Alert variant="destructive" className="mt-2">
                  <AlertDescription>
                    {language === 'en' ? 'Incorrect answer. Try again!' : 'Risposta sbagliata. Riprova!'}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </Card>
        ))}
      </div>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent className="max-w-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Book className="h-5 w-5" />
              {currentHistoryCard?.title[language]}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base">
              <p className="mb-2 font-medium">
                {language === 'en' ? 'Period' : 'Periodo'}: {currentHistoryCard?.period}
              </p>
              <p className="leading-relaxed">
                {currentHistoryCard?.fullContent[language]}
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
