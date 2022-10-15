// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
    {
    numb: 6,
    question: "What is the scientific name of Computer?",
    answer: "Silico Sapiens",
    options: [
      "Silico Sapiens",
      "Charles Baggage",
      "Love Babbar",
      "Neil Armstrong"
    ]
  },
  {
    numb: 7,
    question: "Who is the father of Computer Science?",
    answer: "Charles Babbage",
    options: [
      "Silico Sapiens",
      "Charles Babbage",
      "Love Babbar",
      "Srinivas Ramanujan"
    ]
  },
  {
    numb: 8,
    question: "What is FORTRAN?",
    answer: "Formula Translation",
    options: [
      "Formula Translation",
      "Forensic Translation",
      "Formula Transclution",
      "Forensic Transclution"
    ]
  },
    {
    numb: 9,
    question: "Who is the father of Personal Computer?",
    answer: "Edward Robert",
    options: [
      "Silico Sapiens",
      "J.V. Antasoff",
      "Edward Robert",
      "Charles Babbage"
    ]
  },
  {
    numb: 10,
    question: "The term _____ designates equipment that might be added to a computer system to enhance its functionality",
    answer: "peripheral device",
    options: [
      "digital device",
      "system add-on",
      "disk pack",
      "peripheral device"
    ]
  },
  {
    numb: 11,
    question: "The First Mechanical Computer Designed by Charles Babbage was called?",
    answer: "Analytical Engine",
    options: [
      "Calculator",
      "Abacus",
      "Analytical Engine",
      "Super Computer"
    ]
  },
  {
    numb: 12,
    question: "In HTML, _______________ attribute is used for merging of two or more adjacent columns.",
    answer: "COLSPAN",
    options: [
      "ROWSPAN",
      "COLSPAN",
      "CELLPADDING",
      "CELLSPACING  "
    ]
  },
  {
    numb: 13,
    question: "Which motherboard form factor uses one 20 pin connector?",
    answer: "ATX",
    options: [
      "Baby AT",
      "ATX",
      "AT",
      "All of the above"
    ]
  },
  {
    numb: 14,
    question: "In the field of computing, what does ENIAC stand for?",
    answer: "Electronic Numerical Integrator and Computer",
    options: [
      "Electronic Numerical Integrated Advanced Computer",
      "Electronic Numerical Integrator and Computer",
      "Electronic Numbers Integration and Computer",
      "Electronic Numerals Integration and Computing"
    ]
  },
  {
    numb: 15,
    question: "Round robin scheduling falls under the category of",
    answer: "Preemptive scheduling",
    options: [
      "Preemptive scheduling",
      "Non preemptive scheduling",
      "Both A & B",
      "None of the above"
    ]
  },
  {
    numb: 16,
    question: "Which of the following is not a type of computer code?",
    answer: "EDIC",
    options: [
      "EDIC",
      "ASCII",
      "BCD",
      "EBCDIC  "
    ]
  },
  {
    numb: 17,
    question: "WWhich of the following is used in EBCDIC?",
    answer: "Mainframes",
    options: [
      "Super Computers",
      "Mainframes",
      "Machine Codes",
      "Programming  "
    ]
  },
  {
    numb: 18,
    question: "Which of the following is created when a user opens an account in the computer system?",
    answer: "Subdirectory",
    options: [
      "SFD",
      "MFD",
      "RFD",
      "Subdirectory  "
    ]
  },
  {
    numb: 19,
    question: "Which of the following is a type of technique in which dumb terminals are connected to a central computer system?",
    answer: "Time Sharing",
    options: [
      "Time Sharing",
      "Message passing",
      "Batch environment",
      "User environment  "
    ]
  },
  {
    numb: 20,
    question: "What was the first ARPANET message?",
    answer: "lo",
    options: [
      "lo",
      "hello world",
      "mary had a little lamb",
      "cyberspace, the final frontier  "
    ]
  },
  {
    numb: 21,
    question: "Which of the following is the first neural network computer?",
    answer: "SNARC",
    options: [
      "AN",
      "AM",
      "RFD",
      "SNARC"
    ]
  },
  {
    numb: 22,
    question: "You can group noncontiguous worksheets with",
    answer: "The ctrl key and mouse ",
    options: [
      "The alt+enter key",
      " The group button on the standard toolbar",
      "The ctrl key and mouse ",
      " The shift key and the mouse"
    ]
  },
  {
    numb: 23,
    question: "Bill Gates co-founded 'Microsoft Corporation' in 1975 with?",
    answer: "Paul G.Allen",
    options: [
      "Chris Hughes",
      "Tim Berners-Lee",
      "Steve Paul Jobs",
      "Paul G.Allen "
    ]
  },
  {
    numb: 24,
    question: "ASP in computer science stands for?",
    answer: "Application Service Provider",
    options: [
      "Abstract Service Provider ",
      "Application Service Provider",
      "Application Signal Provider ",
      "Abstract Syntax Provider "
    ]
  },
  {
    numb: 25,
    question: "Who invented JavaScript the programming language?",
    answer: "Brendan Eich",
    options: [
      "Brendan Eich",
      "Willem Einthoven",
      "George Eastman ",
      "Emil Erlenmeyer  "
    ]
  },
  

  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];