import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, Globe, Trophy, Star, CheckCircle2, ArrowRight, Brain, Medal } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const achievements = [
  { year: "1985", title: "Inception", desc: "ELITE University founded with a vision for excellence." },
  { year: "1995", title: "National Rank #50", desc: "Recognized among the top 50 engineering institutions." },
  { year: "2005", title: "International Collab", desc: "First Ivy League partnership for student exchange." },
  { year: "2015", title: "Research Hub", desc: "Inauguration of the ₹100Cr Innovation & Research park." },
  { year: "2023", title: "Global Rank #150", desc: "QS World Rankings breakthrough in top 200." },
  { year: "2026", title: "Vision 2030", desc: "Launching the world's most advanced AI Ethics Lab." },
];

const quizQuestions = [
  { q: "Which department at ELITE recently inaugurated the AI Ethics Lab?", a: ["Computer Science", "Philosophy", "Management"], correct: 0 },
  { q: "In which year was ELITE University founded?", a: ["1980", "1985", "1990"], correct: 1 },
  { q: "What is the size of the ELITE residential campus?", a: ["100 Acres", "150 Acres", "200 Acres"], correct: 2 },
];

const About = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (idx: number) => {
    if (idx === quizQuestions[currentQuestion].correct) setScore(score + 1);
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="overflow-x-hidden pt-20">
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--accent)/0.2)_0%,transparent_50%)]" />
        <div className="container relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Legacy of <span className="text-accent">Excellence</span>
          </motion.h1>
          <p className="text-lg opacity-80 max-w-2xl leading-relaxed">
            For over four decades, ELITE University has been a beacon of knowledge, innovation, and leadership.
          </p>
        </div>
      </section>

      {/* Achievement Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4 border-accent text-accent">Our Journey</Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Milestones & Achievements</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((ach, i) => {
              const achievementImages = [
                "1541339907198-e08756ebafe3", // Inception (Campus)
                "1492533230940-ed751614717f", // National Rank (Library)
                "1523240615286-19342e9073bd", // International Collab (Students)
                "1581093588401-fbb62a02f120", // Research Hub (Lab)
                "1523050854058-8df90110c9f1", // Global Rank (Graduation)
                "1485827404703-89b55fcc595e", // Vision 2030 (Tech)
              ];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="group overflow-hidden border-0 shadow-lg rounded-3xl h-full hover:shadow-2xl transition-all bg-background">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={`https://images.unsplash.com/photo-${achievementImages[i]}?q=80&w=600&auto=format&fit=crop`} 
                        alt={ach.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                      <div className="absolute top-4 left-4 h-12 w-12 bg-accent rounded-2xl flex items-center justify-center shadow-lg text-accent-foreground font-bold">
                        {ach.year}
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{ach.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {ach.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gamification - Quiz */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Brain className="absolute -left-10 -bottom-10 h-64 w-64 rotate-12" />
        </div>
        <div className="container relative z-10 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 italic">Test Your Knowledge! 🧠</h2>
            <p className="opacity-80 text-lg">Are you a true ELITE enthusiast? Play and earn a badge!</p>
          </div>

          <Card className="bg-background/10 backdrop-blur-xl border-white/20 text-white shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              {!showResult ? (
                <div className="space-y-8">
                  <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-accent">
                    <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                    <span>Score: {score}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    {quizQuestions[currentQuestion].q}
                  </h3>
                  <div className="grid gap-4">
                    {quizQuestions[currentQuestion].a.map((ans, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        onClick={() => handleAnswer(idx)}
                        className="h-14 bg-white/5 border-white/10 hover:bg-accent hover:text-accent-foreground hover:border-accent text-lg justify-start px-8 rounded-2xl transition-all"
                      >
                        {ans}
                      </Button>
                    ))}
                  </div>
                </div>
              ) : (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-10 space-y-6"
                >
                  <div className="h-24 w-24 bg-accent rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-accent/50 animate-bounce">
                    <Medal className="h-12 w-12 text-accent-foreground" />
                  </div>
                  <h3 className="text-4xl font-bold">Quiz Complete!</h3>
                  <p className="text-xl opacity-80">You scored {score}/{quizQuestions.length}</p>
                  {score === quizQuestions.length && (
                    <div className="bg-accent/20 border border-accent p-6 rounded-3xl mt-8">
                      <p className="text-accent font-bold text-lg mb-2">🏆 Badge Earned: Future Elite Student</p>
                      <p className="text-sm opacity-70 italic">Screenshot this and show it at the admissions desk for a special welcome kit!</p>
                    </div>
                  )}
                  <Button 
                    onClick={() => { setCurrentQuestion(0); setScore(0); setShowResult(false); }}
                    variant="link" 
                    className="text-accent underline"
                  >
                    Try Again
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Leaderboard UI - Dummy */}
      <section className="py-24 bg-background">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Star className="text-accent fill-accent" /> Quiz Leaderboard
          </h2>
          <div className="space-y-4">
            {[
              { name: "Rahul S.", score: 3, time: "12s" },
              { name: "Priya M.", score: 3, time: "15s" },
              { name: "Amit K.", score: 2, time: "10s" },
            ].map((user, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl border bg-muted/20 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <span className="font-bold text-muted-foreground w-6">#{i+1}</span>
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">{user.name[0]}</div>
                  <span className="font-semibold">{user.name}</span>
                </div>
                <div className="flex gap-4 items-center">
                  <Badge variant="secondary">{user.score} Pts</Badge>
                  <span className="text-xs text-muted-foreground">{user.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
