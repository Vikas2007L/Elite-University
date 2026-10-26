import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Building2, IndianRupee, Users, Download, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from "recharts";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const packageData = [
  { year: "2021", avg: 8.5, max: 28 },
  { year: "2022", avg: 9.8, max: 35 },
  { year: "2023", avg: 11.2, max: 42 },
  { year: "2024", avg: 12.5, max: 48 },
];

const topRecruiters = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
];

const placementReports = [
  {
    year: "2024 - 25",
    status: "Recent",
    color: "border-accent",
    placementRate: "95%",
    averagePackage: "12.5 LPA",
    highestPackage: "48 LPA",
    recruiters: "300+",
    highlights: ["Career-readiness and interview preparation", "Internship and employer engagement", "Offers across technology, engineering, and business roles"],
  },
  {
    year: "2023 - 24",
    status: "Archive",
    color: "border-primary/20",
    placementRate: "92%",
    averagePackage: "11.2 LPA",
    highestPackage: "42 LPA",
    recruiters: "250+",
    highlights: ["Campus recruitment and internship support", "Pre-placement training and mock interviews", "Opportunities across multiple industry sectors"],
  },
];

type PlacementReport = typeof placementReports[number];

const CountUp = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{displayValue.toLocaleString()}{suffix}</span>;
};

const Placements = () => {
  const handleAction = (type: "view" | "download", report: PlacementReport) => {
    const reportText = [
      `ELITE University Placement Report ${report.year}`,
      "",
      "Illustrative placement overview. Confirm figures with the Placement Office before external use.",
      "",
      `Placement rate: ${report.placementRate}`,
      `Average package: ${report.averagePackage}`,
      `Highest package: ${report.highestPackage}`,
      `Recruiters: ${report.recruiters}`,
      "",
      "Highlights:",
      ...report.highlights.map((highlight) => `- ${highlight}`),
    ].join("\n");
    const reportUrl = URL.createObjectURL(new Blob([reportText], { type: "text/plain" }));

    if (type === "view") {
      window.open(reportUrl, "_blank", "noopener,noreferrer");
      toast.success(`Opening Placement Report ${report.year}`);
    } else {
      const link = document.createElement("a");
      link.href = reportUrl;
      link.download = `elite-placement-report-${report.year.replace(/\s+/g, "-")}.txt`;
      link.click();
      toast.success(`Downloaded Placement Report ${report.year}`);
    }

    window.setTimeout(() => URL.revokeObjectURL(reportUrl), 60_000);
  };

  return (
    <div className="overflow-x-hidden">
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" 
          alt="Placements Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
        <div className="container relative z-10 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Placement <span className="text-accent underline decoration-4 underline-offset-8">Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl opacity-90 max-w-2xl leading-relaxed"
          >
            Empowering our students to lead the future. Our 2025-26 placement drive sets new benchmarks with global opportunities.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { icon: TrendingUp, value: 95, label: "Placement Rate", suffix: "%" },
              { icon: Users, value: 12.5, label: "Avg Package", suffix: " LPA" },
              { icon: IndianRupee, value: 48, label: "Highest Package", suffix: " LPA" },
              { icon: Building2, value: 300, label: "Recruiters", suffix: "+" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="text-center shadow-xl border-t-4 border-t-accent hover:-translate-y-2 transition-transform h-full">
                  <CardContent className="pt-8 px-4">
                    <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <s.icon className="h-6 w-6 text-accent" />
                    </div>
                    <p className="text-3xl font-bold text-primary mb-1">
                      <CountUp value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{s.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center mb-20">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <TrendingUp className="text-accent" /> Salary Package Growth
              </h2>
              <div className="h-[400px] w-full bg-background rounded-3xl p-6 shadow-2xl">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={packageData}>
                    <defs>
                      <linearGradient id="colorAvg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="max" 
                      name="Highest Package (LPA)"
                      stroke="hsl(var(--primary))" 
                      strokeWidth={4}
                      fillOpacity={1} 
                      fill="transparent" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="avg" 
                      name="Average Package (LPA)"
                      stroke="hsl(var(--accent))" 
                      strokeWidth={4}
                      fillOpacity={1} 
                      fill="url(#colorAvg)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -mr-16 -mt-16 blur-3xl" />
              <h3 className="text-2xl font-bold mb-4">Placement Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>50+ Fortune 500 Companies</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>100% Internship Assistance</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Pre-Placement Training Programs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Global Alumni Network (50k+)</span>
                </li>
              </ul>
              <Button 
                onClick={() => handleAction('download', 'Summary Placement Report')}
                className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
              >
                Download Report <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">Our Top Global Recruiters</h2>
          <div className="relative overflow-hidden py-10 group">
            <div className="flex animate-scroll hover:[animation-play-state:paused] gap-12 w-fit">
              {[...topRecruiters, ...topRecruiters, ...topRecruiters].map((r, i) => (
                <div key={i} className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                  <img src={r.logo} alt={r.name} className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Document Reports Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Placement <span className="text-accent underline">Reports</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Review placement outcomes, salary highlights, recruiter reach, and career support from recent academic years.</p>
            <p className="text-xs text-muted-foreground mt-3">Illustrative website figures; contact the Placement Office for verified institutional reports.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {placementReports.map((report, i) => (
              <motion.div
                key={report.year}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className={`group hover:shadow-2xl transition-all duration-500 border-2 ${report.color} bg-background/50 backdrop-blur-sm overflow-hidden`}>
                  <CardContent className="p-10 text-center">
                    <div className="h-16 w-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <FileText className="h-8 w-8" />
                    </div>
                    <Badge variant="outline" className="mb-4">{report.status}</Badge>
                    <h3 className="text-2xl font-bold mb-6">Placement Report {report.year}</h3>
                    <div className="grid grid-cols-2 gap-3 text-left mb-6">
                      {[
                        { label: "Placement rate", value: report.placementRate },
                        { label: "Average package", value: report.averagePackage },
                        { label: "Highest package", value: report.highestPackage },
                        { label: "Recruiters", value: report.recruiters },
                      ].map((stat) => (
                        <div key={stat.label} className="rounded-xl bg-muted/60 p-3">
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                          <p className="font-bold text-primary">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                    <ul className="text-left text-sm text-muted-foreground space-y-2 mb-6">
                      {report.highlights.map((highlight) => <li key={highlight}>• {highlight}</li>)}
                    </ul>
                    <div className="flex flex-col gap-3">
                      <Button 
                        onClick={() => handleAction("view", report)}
                        className="w-full bg-primary font-bold rounded-xl shadow-lg shadow-primary/20"
                      >
                        View Report Summary
                      </Button>
                      <Button 
                        onClick={() => handleAction("download", report)}
                        variant="outline" 
                        className="w-full font-bold rounded-xl hover:bg-accent hover:text-accent-foreground"
                      >
                        Download Summary <Download className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Placements;
