import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";

type Message = { role: "user" | "assistant"; content: string };

const quickReplies = [
  "What courses are available?",
  "What are the fee details?",
  "Show placement statistics",
  "Scholarship opportunities",
  "How to apply?",
];

const responses: Record<string, string> = {
  "courses": "ELITE University offers a wide range of programs:\n\n• **Engineering**: CS (AI/ML), ECE (VLSI), Mechanical (Robotics), Civil (Structural)\n• **Science**: Applied Physics, Quantum Optics, Biotechnology\n• **Management**: MBA (Finance/Marketing), Business Analytics\n• **Design**: UX/UI Design, Fashion Tech\n\nAll programs are NAAC A+ accredited.",
  "fees": "Our fee structure (per semester):\n\n• **Engineering**: ₹1.8L - ₹2.5L\n• **MBA**: ₹2.8L\n• **Sciences**: ₹1.1L\n• **Hostel/Mess**: ₹85K per year\n\n*Merit-based scholarships up to 100% are available for JEE toppers.*",
  "placement": "🏆 **2025 Placement Stats**:\n\n• **Highest Package**: ₹52 LPA (Adobe)\n• **Average Package**: ₹14.2 LPA\n• **95% Students placed** in top Fortune 500 companies like Microsoft, Amazon, and Google.\n• **Internships**: 100% assistance with avg stipend of ₹45K.",
  "admission": "🚀 **2026 Admissions are OPEN!**:\n\n1. Register on our portal\n2. EU-CET Entrance Exam\n3. Portfolio Review (for Design/Research)\n4. Counseling & Document Verification\n\n*Deadline for Phase 1: May 15th, 2026.*",
  "campus": "🌳 **Life at ELITE**:\n\n• **Interactive Map**: Use our 'Campus Map' to find the Innovation Hub, Sports Complex, and Auditoriums.\n• **Student Stories**: Check 'Campus Life' for 'Day in Life' experiences.\n• **Facilities**: 24/7 Library, Olympic-size Pool, and a High-Performance Computing Lab.",
  "research": "🔬 **Research Focus**:\n\nWe have ₹15 Cr+ in active grants. Key areas include Quantum Computing, Sustainable Infrastructure, and AI in Healthcare. Students can join research labs from their 2nd year.",
  "history": "🏛️ **Our Legacy**:\n\nFounded in 1985, ELITE has evolved from a small technical institute to a global hub of excellence. Check our 'Achievement Timeline' on the About page for major milestones.",
  "contact": "📍 123 University Road, Tech Park District\n📞 Admissions: +91 1234 567 890\n✉️ info@eliteuniversity.edu\n🕐 Office hours: 8 AM - 5 PM (Mon-Fri)",
  "greet": "Hello! I am the ELITE Intelligence Bot. I can help you with admissions, fees, placements, research, or even guide you through our campus map. What's on your mind?",
  "unknown": "That's a specific query! While I'm still learning, I can definitely tell you about our **courses, placements, fees, research labs, or campus facilities**. Which one interests you?"
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  
  if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) return responses.greet;
  if (lower.includes("course") || lower.includes("program") || lower.includes("study") || lower.includes("department")) return responses.courses;
  if (lower.includes("fee") || lower.includes("cost") || lower.includes("money") || lower.includes("pay") || lower.includes("scholarship")) return responses.fees;
  if (lower.includes("placement") || lower.includes("job") || lower.includes("recruit") || lower.includes("salary") || lower.includes("package")) return responses.placement;
  if (lower.includes("admission") || lower.includes("apply") || lower.includes("how to join") || lower.includes("eligib")) return responses.admission;
  if (lower.includes("life") || lower.includes("campus") || lower.includes("facility") || lower.includes("hostel") || lower.includes("map")) return responses.campus;
  if (lower.includes("research") || lower.includes("project") || lower.includes("lab") || lower.includes("grant")) return responses.research;
  if (lower.includes("history") || lower.includes("timeline") || lower.includes("achieve") || lower.includes("old")) return responses.history;
  if (lower.includes("contact") || lower.includes("call") || lower.includes("email") || lower.includes("address")) return responses.contact;
  if (lower.includes("thanks") || lower.includes("thank you") || lower.includes("great")) return "You're very welcome! Is there anything else you'd like to explore at ELITE University?";
  
  return responses.unknown;
}

const AiAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! 👋 I'm the ELITE University AI assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: getResponse(text) }]);
      setTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-accent text-accent-foreground shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="AI Assistant"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[520px] rounded-2xl border bg-background shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-primary text-primary-foreground px-5 py-4 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-accent flex items-center justify-center">
              <Bot className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <p className="font-semibold text-sm">ELITE AI Assistant</p>
              <p className="text-[11px] opacity-70">Ask me anything about the university</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0" style={{ maxHeight: 340 }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                {m.role === "assistant" && (
                  <div className="h-7 w-7 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="h-4 w-4 text-accent" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  }`}
                >
                  {m.content}
                </div>
                {m.role === "user" && (
                  <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="flex gap-2">
                <div className="h-7 w-7 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Bot className="h-4 w-4 text-accent" />
                </div>
                <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3 text-sm">
                  <span className="inline-flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="text-xs bg-accent/10 text-accent hover:bg-accent/20 px-3 py-1.5 rounded-full transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t px-3 py-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Type your question..."
              className="flex-1 bg-muted rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/50"
            />
            <Button
              size="icon"
              onClick={() => send(input)}
              disabled={!input.trim()}
              className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 h-9 w-9"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistant;
