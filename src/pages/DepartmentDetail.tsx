import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, BookOpen, FlaskConical, Trophy, Mail } from "lucide-react";
import { motion } from "framer-motion";

const deptImages: Record<string, string> = {
  cs: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
  ece: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1200&auto=format&fit=crop",
  mech: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1200&auto=format&fit=crop",
  civil: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1200&auto=format&fit=crop",
  physics: "https://images.unsplash.com/photo-1532187863486-abf9d39d9992?q=80&w=1200&auto=format&fit=crop",
  mba: "https://images.unsplash.com/photo-1454165833767-02a698d5896c?q=80&w=1200&auto=format&fit=crop",
};

const deptData: Record<string, { name: string; about: string; vision: string; programs: string[]; faculty: { name: string; title: string; specialization: string }[]; labs: string[]; achievements: string[]; hod: { name: string; email: string }; syllabus: { semester: string; subjects: string[] }[] }> = {
  cs: {
    name: "Computer Science & Engineering",
    about: "The Department of CSE is one of the largest and most reputed departments, offering programs in AI, Machine Learning, Cybersecurity, and Software Engineering.",
    vision: "To be a centre of excellence in computing education and research, producing globally competent professionals.",
    programs: ["B.Tech Computer Science", "M.Tech AI & ML", "M.Tech Cybersecurity", "Ph.D. Computer Science"],
    faculty: [
      { name: "Dr. Rajesh Kumar", title: "Professor & HOD", specialization: "Machine Learning" },
      { name: "Dr. Priya Sharma", title: "Associate Professor", specialization: "Cybersecurity" },
      { name: "Dr. Anil Mehta", title: "Assistant Professor", specialization: "Data Science" },
    ],
    labs: ["AI & ML Research Lab", "Cybersecurity Lab", "Cloud Computing Lab", "IoT Innovation Lab"],
    achievements: ["Best Department Award 2025", "₹5 Cr research funding", "12 patents filed"],
    hod: { name: "Dr. Rajesh Kumar", email: "hod.cse@university.edu" },
    syllabus: [
      { semester: "Semester 1", subjects: ["Programming in C", "Mathematics I", "Physics", "English"] },
      { semester: "Semester 2", subjects: ["Data Structures", "Mathematics II", "Chemistry", "Engineering Mechanics"] },
      { semester: "Semester 3", subjects: ["Object Oriented Programming", "Discrete Mathematics", "Digital Logic", "Data Communications"] },
      { semester: "Semester 4", subjects: ["Algorithms", "Operating Systems", "Database Management", "Computer Architecture"] },
    ]
  },
  ece: {
    name: "Electronics & Communication",
    about: "The ECE department focuses on VLSI, Embedded Systems, Signal Processing, and IoT with state-of-the-art laboratories.",
    vision: "To create innovators in electronics and communication who drive technological advancement.",
    programs: ["B.Tech ECE", "M.Tech VLSI Design", "M.Tech Communication Systems", "Ph.D. Electronics"],
    faculty: [
      { name: "Dr. Suresh Reddy", title: "Professor & HOD", specialization: "VLSI Design" },
      { name: "Dr. Meena Iyer", title: "Associate Professor", specialization: "Signal Processing" },
    ],
    labs: ["VLSI Design Lab", "Embedded Systems Lab", "Communication Lab", "RF & Microwave Lab"],
    achievements: ["NAAC A+ Accredited", "₹3 Cr industry projects", "8 patents filed"],
    hod: { name: "Dr. Suresh Reddy", email: "hod.ece@university.edu" },
    syllabus: [
      { semester: "Semester 1", subjects: ["Basic Electronics", "Mathematics I", "Physics", "Graphics"] },
      { semester: "Semester 2", subjects: ["Network Analysis", "Mathematics II", "Chemistry", "C Programming"] },
      { semester: "Semester 3", subjects: ["Analog Circuits", "Digital Electronics", "Signals & Systems", "Electromagnetics"] },
      { semester: "Semester 4", subjects: ["Microprocessors", "Communication Theory", "Control Systems", "Linear Integrated Circuits"] },
    ]
  },
  mech: {
    name: "Mechanical Engineering",
    about: "The Mechanical department offers programs in Robotics, Thermal Engineering, Manufacturing, and Design with industry collaborations.",
    vision: "To produce mechanical engineers who innovate sustainable solutions for global challenges.",
    programs: ["B.Tech Mechanical", "M.Tech Robotics", "M.Tech Thermal Engineering", "Ph.D. Mechanical"],
    faculty: [
      { name: "Dr. Vikram Singh", title: "Professor & HOD", specialization: "Robotics" },
      { name: "Dr. Kavitha Nair", title: "Associate Professor", specialization: "Manufacturing" },
    ],
    labs: ["Robotics Lab", "CAD/CAM Lab", "Thermal Engineering Lab", "Materials Testing Lab"],
    achievements: ["SAE India Award 2025", "₹2 Cr research grants", "5 patents filed"],
    hod: { name: "Dr. Vikram Singh", email: "hod.mech@university.edu" },
    syllabus: [
      { semester: "Semester 1", subjects: ["Engineering Mechanics", "Mathematics I", "Physics", "Workshop Practice"] },
      { semester: "Semester 2", subjects: ["Thermodynamics", "Mathematics II", "Chemistry", "Graphics"] },
      { semester: "Semester 3", subjects: ["Strength of Materials", "Fluid Mechanics", "Material Science", "Machine Drawing"] },
      { semester: "Semester 4", subjects: ["Theory of Machines", "Manufacturing Processes", "Applied Thermodynamics", "Electrical Machines"] },
    ]
  },
  civil: {
    name: "Civil Engineering",
    about: "The Civil department excels in Structural, Environmental, Transportation, and Geotechnical Engineering.",
    vision: "To develop civil engineers who build sustainable and resilient infrastructure.",
    programs: ["B.Tech Civil", "M.Tech Structural", "M.Tech Environmental", "Ph.D. Civil"],
    faculty: [
      { name: "Dr. Ramesh Patel", title: "Professor & HOD", specialization: "Structural Engineering" },
      { name: "Dr. Sunita Gupta", title: "Associate Professor", specialization: "Environmental Eng." },
    ],
    labs: ["Structural Testing Lab", "Environmental Lab", "Geotechnical Lab", "Survey Lab"],
    achievements: ["Best Research Paper 2025", "₹1.5 Cr funding", "3 patents filed"],
    hod: { name: "Dr. Ramesh Patel", email: "hod.civil@university.edu" },
    syllabus: [
      { semester: "Semester 1", subjects: ["Civil Engineering Materials", "Mathematics I", "Physics", "Surveying I"] },
      { semester: "Semester 2", subjects: ["Solid Mechanics", "Mathematics II", "Chemistry", "C Programming"] },
      { semester: "Semester 3", subjects: ["Structural Analysis I", "Environmental Engineering", "Fluid Mechanics", "Concrete Technology"] },
      { semester: "Semester 4", subjects: ["Geotechnical Engineering I", "Transportation Engineering", "Water Resources Eng.", "Structural Design I"] },
    ]
  },
  physics: {
    name: "Applied Physics",
    about: "The Department of Applied Physics provides a strong foundation in physical principles and their applications in modern technology.",
    vision: "To be a leader in physical sciences education and research, fostering innovation through fundamental understanding.",
    programs: ["B.Sc Applied Physics", "M.Sc Optics", "M.Sc Quantum Mechanics", "Ph.D. Physics"],
    faculty: [
      { name: "Dr. Arvind Gupta", title: "Professor & HOD", specialization: "Quantum Mechanics" },
      { name: "Dr. Sarah Johnson", title: "Associate Professor", specialization: "Optoelectronics" },
    ],
    labs: ["Advanced Optics Lab", "Quantum Computing Lab", "Material Science Lab", "Nuclear Physics Lab"],
    achievements: ["Best Research Award 2024", "National Science Grant", "5 Discovery Patents"],
    hod: { name: "Dr. Arvind Gupta", email: "hod.physics@university.edu" },
    syllabus: [
      { semester: "Semester 1", subjects: ["Classical Mechanics", "Mathematics for Physicists", "Waves & Oscillations", "Lab I"] },
      { semester: "Semester 2", subjects: ["Electromagnetism", "Thermal Physics", "Modern Physics", "Lab II"] },
      { semester: "Semester 3", subjects: ["Quantum Mechanics I", "Statistical Mechanics", "Solid State Physics", "Computational Physics"] },
      { semester: "Semester 4", subjects: ["Nuclear Physics", "Atomic & Molecular Physics", "Electronics", "Project Work"] },
    ]
  },
  mba: {
    name: "Business Administration",
    about: "The School of Business Administration prepares students for leadership roles in the global business environment.",
    vision: "To develop ethical and innovative business leaders who drive sustainable global growth.",
    programs: ["MBA General", "MBA Finance", "MBA Marketing", "M.S. Business Analytics"],
    faculty: [
      { name: "Dr. Meera Kapoor", title: "Professor & Dean", specialization: "International Business" },
      { name: "Prof. David Clark", title: "Assistant Professor", specialization: "Operational Finance" },
    ],
    labs: ["Business Simulation Lab", "Finance Hub", "Innovation Center", "Case Study Hall"],
    achievements: ["Top 10 B-School Ranking", "100% CEO placement record", "Industry Partnership Award"],
    hod: { name: "Dr. Meera Kapoor", email: "dean.mba@university.edu" },
    syllabus: [
      { semester: "Semester 1", subjects: ["Management Principles", "Marketing Management", "Financial Accounting", "Business Communication"] },
      { semester: "Semester 2", subjects: ["Human Resource Management", "Operations Research", "Organizational Behavior", "Macroeconomics"] },
      { semester: "Semester 3", subjects: ["Strategic Management", "Elective I", "Elective II", "Entrepreneurship"] },
      { semester: "Semester 4", subjects: ["Elective III", "Elective IV", "International Business", "Final Dissertation"] },
    ]
  },
};

const DepartmentDetail = () => {
  const { code } = useParams<{ code: string }>();
  const dept = deptData[code || ""];

  if (!dept) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Department not found</h1>
        <Button asChild><Link to="/departments">Back to Departments</Link></Button>
      </div>
    );
  }

  return (
    <div>
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <img 
          src={deptImages[code || ""] || "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&auto=format&fit=crop"} 
          alt={dept.name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
        <div className="container relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/departments" className="inline-flex items-center gap-1 text-sm opacity-70 hover:opacity-100 mb-6 group">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> All Departments
            </Link>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{dept.name}</h1>
            <p className="text-xl opacity-80 max-w-2xl leading-relaxed">{dept.about}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="about" className="space-y-8">
            <TabsList className="flex-wrap h-auto gap-1">
              <TabsTrigger value="about">About & Vision</TabsTrigger>
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="labs">Labs & Research</TabsTrigger>
              <TabsTrigger value="contact">Contact HOD</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-6">
              <Card><CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">About</h3>
                <p className="text-muted-foreground">{dept.about}</p>
              </CardContent></Card>
              <Card><CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">Vision</h3>
                <p className="text-muted-foreground">{dept.vision}</p>
              </CardContent></Card>
              <Card><CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary flex items-center gap-2"><Trophy className="h-5 w-5 text-accent" /> Achievements</h3>
                <ul className="space-y-2">
                  {dept.achievements.map((a, i) => <li key={i} className="text-muted-foreground flex items-center gap-2">• {a}</li>)}
                </ul>
              </CardContent></Card>
            </TabsContent>

            <TabsContent value="programs">
              <div className="grid sm:grid-cols-2 gap-4">
                {dept.programs.map((p) => (
                  <Card key={p}><CardContent className="p-6 flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-accent shrink-0" />
                    <span className="font-medium">{p}</span>
                  </CardContent></Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="syllabus">
              <div className="grid md:grid-cols-2 gap-6">
                 {dept.syllabus.map((sem) => (
                   <Card key={sem.semester} className="border-accent/20">
                     <CardContent className="p-6">
                        <h4 className="font-bold text-lg mb-4 text-accent">{sem.semester}</h4>
                        <ul className="space-y-3">
                          {sem.subjects.map((sub, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {sub}
                            </li>
                          ))}
                        </ul>
                     </CardContent>
                   </Card>
                 ))}
              </div>
            </TabsContent>

            <TabsContent value="faculty">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {dept.faculty.map((f, i) => (
                  <motion.div
                    key={f.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl h-full flex flex-col hover:-translate-y-2">
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={`https://images.unsplash.com/photo-1${573496359142 + i}-b8d87734a5a2?w=400&q=80`} 
                          alt={f.name} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                      </div>
                      <CardContent className="p-6 text-center">
                        <h4 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors">{f.name}</h4>
                        <Badge variant="secondary" className="mb-3">{f.title}</Badge>
                        <p className="text-sm text-muted-foreground font-medium">{f.specialization}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="labs">
              <div className="grid sm:grid-cols-2 gap-4">
                {dept.labs.map((l) => (
                  <Card key={l}><CardContent className="p-6 flex items-center gap-3">
                    <FlaskConical className="h-5 w-5 text-accent shrink-0" />
                    <span className="font-medium">{l}</span>
                  </CardContent></Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="contact">
              <Card><CardContent className="p-8 text-center">
                <div className="h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold">{dept.hod.name}</h3>
                <p className="text-accent font-medium">Head of Department</p>
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 mt-3">
                  <Mail className="h-4 w-4" /> {dept.hod.email}
                </p>
              </CardContent></Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default DepartmentDetail;
