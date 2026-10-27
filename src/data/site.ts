export const profile = {
  name: "Saikou Diallo",
  firstName: "Saikou",
  lastName: "Diallo",
  initials: "SD",
  age: 22,
  origin: "Guinea",
  location: "Germany",
  school: "Nordakademie",
  status: "Open to internships",
  email: "saikoud618@gmail.com",
  github: "https://github.com/dsaikou618",
  githubLabel: "github.com/dsaikou618",
  repo: "https://github.com/dsaikou618/CSC2042S-Machine-Learning",
  intro:
    "I'm a computer science student from Guinea, living in Germany. I study at Nordakademie and build machine learning projects in Python. I'm looking for an internship where I can work on real systems with people who care about how they are made.",
  contactStatement: "I'm looking for a software or data internship.",
  contactCopy:
    "If you have a team where I can contribute and see a project through, I'd like to hear from you. Email is the fastest way to reach me.",
  footerNote: "Built with Astro. Hosted on GitHub Pages.",
};

export type Project = {
  year: string;
  title: string;
  description: string;
  stack: string;
  href: string;
};

export const projectsIntro =
  "Three projects I finished end to end: data preparation, model code, evaluation, and a written result. All three are public on GitHub.";

export const projects: Project[] = [
  {
    year: "2026",
    title: "Perceptrons from scratch",
    description:
      "Binary and one-vs-rest multi-class perceptrons on Simpsons-MNIST, built without a machine learning library. I tested normalization, learning rates, and augmentation to see what actually moved accuracy.",
    stack: "Python, NumPy, scikit-learn",
    href: "https://github.com/dsaikou618/CSC2042S-Machine-Learning/tree/main/assignment-1-perceptron",
  },
  {
    year: "2026",
    title: "Multilingual text classification",
    description:
      "A multinomial logistic regression model in PyTorch with tokenization, TF-IDF features, batching, and a training loop. The report covers ablations and the choices behind the final configuration.",
    stack: "Python, PyTorch, NLP",
    href: "https://github.com/dsaikou618/CSC2042S-Machine-Learning/tree/main/assignment-2-nlp",
  },
  {
    year: "2026",
    title: "Tuning a neural network",
    description:
      "An MLP on Fashion-MNIST with a factorial sweep over learning rate, optimizer, and dropout. The best run reached 88.65% validation accuracy, 3.59 points above baseline. I also ran a confusion-matrix error analysis.",
    stack: "PyTorch, NumPy, Matplotlib",
    href: "https://github.com/dsaikou618/CSC2042S-Machine-Learning/tree/main/assignment-3-neural-networks",
  },
];

export const toolkitIntro =
  "Tools I have used in finished work. The list grows as I learn.";

export type ToolkitRow = {
  label: string;
  value: string;
};

export const toolkit: ToolkitRow[] = [
  {
    label: "Languages",
    value: "Python, Java",
  },
  {
    label: "Machine learning",
    value: "PyTorch, torchvision, NumPy, pandas, scikit-learn, Matplotlib",
  },
  {
    label: "Tools",
    value: "Git, Jupyter, Maven",
  },
  {
    label: "Practice",
    value:
      "Experiment design, hyperparameter tuning, error analysis, technical writing",
  },
];

export const education = {
  description:
    "Computer science, current. Coursework in machine learning and software development practice. Most of the code is public on GitHub.",
};
