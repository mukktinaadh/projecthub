// Single source of truth for every project shown in the UI.
// Pages import from here; components only receive one project via props.

export const projects = [
  {
    id: 1,
    title: "AI-Based Student Performance Prediction",
    category: "B.Tech",
    technology: ["Python", "Machine Learning"],
    shortDescription:
      "Predict student grades from study habits and attendance using a trained ML model.",
    description:
      "Colleges collect a lot of academic data but rarely act on it early. This project builds a machine learning model that studies attendance records, internal marks and assignment submissions to flag students who may need support before exams. You will clean a real-style dataset, train and compare classifiers, and present accuracy results with clear visualizations.",
    image: "/art/student-analytics.svg",
    imageAlt: "Illustration of a machine learning performance chart",
    features: [
      "Student dataset with attendance, marks and assignment metrics",
      "Model training with scikit-learn and two compared algorithms",
      "Accuracy, precision and recall report with charts",
      "Simple web form to predict performance for a new student",
    ],
    level: "Major Project",
  },
  {
    id: 2,
    title: "AI Campus Assistant Chatbot",
    category: "MCA",
    technology: ["Python", "NLP", "Flask"],
    shortDescription:
      "A chatbot that answers routine campus questions about admissions, fees and events.",
    description:
      "Front desks answer the same questions every day. This project builds a chatbot that understands common campus queries using intent classification and replies from a structured knowledge base. You will design intents and training phrases, implement the NLP pipeline, wrap it in a clean Flask API, and connect it to a web chat widget.",
    image: "/art/campus-chatbot.svg",
    imageAlt: "Illustration of chat bubbles with a friendly robot",
    features: [
      "Intent classification with confidence scoring",
      "Editable JSON knowledge base for 20+ campus topics",
      "REST API built with Flask",
      "Chat widget UI with typing indicator and fallback replies",
    ],
    level: "Major Project",
  },
  {
    id: 3,
    title: "IoT Smart Agriculture Monitor",
    category: "B.Tech",
    technology: ["Python", "IoT", "MongoDB"],
    shortDescription:
      "Sensor-based system that tracks soil moisture and automates irrigation scheduling.",
    description:
      "Farming decisions still rely largely on guesswork. This IoT project wires soil moisture, temperature and humidity sensors to a microcontroller, streams readings to a cloud database, and triggers irrigation when thresholds are crossed. A live dashboard shows field conditions, historical trends and alerts, making it a strong full-stack hardware-plus-software showcase.",
    image: "/art/smart-farming.svg",
    imageAlt: "Illustration of a plant with IoT sensor and signal waves",
    features: [
      "Sensor circuit with soil moisture and DHT11 modules",
      "MQTT data pipeline into MongoDB",
      "Live dashboard with trend charts and alert rules",
      "Irrigation control simulation with threshold logic",
    ],
    level: "Major Project",
  },
  {
    id: 4,
    title: "Full-Stack E-Commerce Mobile App",
    category: "BCA",
    technology: ["React", "Node.js", "MongoDB"],
    shortDescription:
      "A shopping app with product catalog, cart, checkout flow and order tracking.",
    description:
      "Build a complete shopping experience from browsing to checkout. The app includes a product catalog with categories and search, a persistent cart, a simulated payment step, and order history. This project teaches component structure, API integration and state handling across screens — the exact pattern behind most commercial mobile apps.",
    image: "/art/ecommerce-app.svg",
    imageAlt: "Illustration of a mobile e-commerce app with product cards",
    features: [
      "Product catalog with categories, search and sorting",
      "Persistent cart with quantity management",
      "Checkout flow with address and payment simulation",
      "Order history screen with status timeline",
    ],
    level: "Major Project",
  },
  {
    id: 5,
    title: "Collaborative Task Management Board",
    category: "BCA",
    technology: ["React", "Node.js", "MySQL"],
    shortDescription:
      "A Trello-style board where teams create, assign and track tasks across columns.",
    description:
      "Teamwork falls apart without shared visibility. This project builds a drag-and-drop task board with columns for To Do, In Progress and Done. Users create workspaces, invite members, assign tasks with due dates, and watch progress update in real time. It is an excellent exercise in relational data modeling and interactive UI state.",
    image: "/art/task-manager.svg",
    imageAlt: "Illustration of a task board with moving cards",
    features: [
      "Drag-and-drop task movement across columns",
      "Workspaces with member roles",
      "Task assignment, labels and due dates",
      "Activity feed for every board change",
    ],
    level: "Minor Project",
  },
  {
    id: 6,
    title: "Movie Recommendation Engine",
    category: "MCA",
    technology: ["Python", "Machine Learning", "Flask"],
    shortDescription:
      "A content-based recommender that suggests movies using genre and plot similarity.",
    description:
      "Recommendation engines power the biggest products on the internet. This project builds a content-based recommender that compares genre, cast and plot keywords using cosine similarity and returns the most similar titles. You will vectorize text features, serve recommendations through a Flask API, and build a search-first web UI around it.",
    image: "/art/movie-recommender.svg",
    imageAlt: "Illustration of a film reel and report charts",
    features: [
      "Dataset of 5,000+ movies with metadata",
      "TF-IDF vectorization of combined text features",
      "Cosine-similarity based top-N recommendations",
      "Web UI with search and similarity score display",
    ],
    level: "Minor Project",
  },
  {
    id: 7,
    title: "Healthcare Record Management System",
    category: "B.Tech",
    technology: ["Java", "MySQL"],
    shortDescription:
      "A secure desktop system for managing patient records, visits and prescriptions.",
    description:
      "Clinics still run on paper files that are easy to lose and hard to search. This project builds a patient management system with role-based logins for doctors and reception staff, structured patient records, visit history and printable prescriptions. It is a classic Java + MySQL project that demonstrates JDBC, CRUD operations and clean relational schema design.",
    image: "/art/healthcare-system.svg",
    imageAlt: "Illustration of a medical cross with health charts",
    features: [
      "Role-based login for doctors and reception staff",
      "Patient registration with searchable records",
      "Visit history and prescription management",
      "Printable prescription export",
    ],
    level: "Minor Project",
  },
  {
    id: 8,
    title: "Sales Analytics Dashboard",
    category: "MBA",
    technology: ["Python", "React"],
    shortDescription:
      "An interactive dashboard analyzing revenue, regions and product performance.",
    description:
      "Business decisions need evidence, not gut feeling. This project analyzes a multi-year sales dataset and presents revenue trends, regional comparisons and product-wise performance in an interactive dashboard. You will compute KPIs like growth rate and average order value, build filters that slice data by time and region, and write an executive summary of findings.",
    image: "/art/sales-dashboard.svg",
    imageAlt: "Illustration of a business analytics dashboard",
    features: [
      "KPI cards for revenue, growth and order value",
      "Time-series revenue chart with period comparison",
      "Region and product filters",
      "Executive summary section with insights",
    ],
    level: "Major Project",
  },
  {
    id: 9,
    title: "HR Analytics: Attrition Insights",
    category: "BBA",
    technology: ["Python", "Machine Learning"],
    shortDescription:
      "Analyze employee data to find why people leave and predict attrition risk.",
    description:
      "Replacing an employee costs far more than retaining one. This project analyzes an HR dataset covering tenure, salary, satisfaction scores and department to identify what drives attrition, then trains a classifier to predict flight risk. The output is a story-driven report that connects statistics to practical retention recommendations.",
    image: "/art/hr-analytics.svg",
    imageAlt: "Illustration of a people analytics report",
    features: [
      "Exploratory analysis of tenure, salary and satisfaction",
      "Attrition-risk classification model",
      "Department-wise attrition comparisons",
      "Written recommendations section",
    ],
    level: "Minor Project",
  },
  {
    id: 10,
    title: "Personal Expense Tracker",
    category: "BCA",
    technology: ["React", "PHP", "MySQL"],
    shortDescription:
      "A budgeting app that logs expenses, sets monthly limits and shows spending charts.",
    description:
      "Most students have no idea where their money goes. This project builds an expense tracker where users log spending by category, set monthly budgets, and see summaries with pie and bar charts. The project covers full CRUD flows, authentication basics and clear data visualization in one practical, relatable application.",
    image: "/art/expense-tracker.svg",
    imageAlt: "Illustration of a finance tracker with wallet and pie chart",
    features: [
      "Expense logging with categories and notes",
      "Monthly budget limits with overspend warnings",
      "Pie and bar chart spending summaries",
      "Month-over-month comparison view",
    ],
    level: "Minor Project",
  },
  {
    id: 11,
    title: "Warehouse Inventory Management System",
    category: "MCA",
    technology: ["PHP", "MySQL"],
    shortDescription:
      "A stock management system with purchase tracking, low-stock alerts and reports.",
    description:
      "Every stockout is lost revenue. This project builds an inventory system that tracks products, suppliers, purchases and sales in one place. Stock levels update automatically on each transaction, low-stock thresholds trigger alerts, and monthly reports summarize movement. It is a strong demonstration of transactional thinking in a relational database.",
    image: "/art/inventory-system.svg",
    imageAlt: "Illustration of warehouse boxes with inventory levels",
    features: [
      "Product and supplier master records",
      "Automatic stock updates on purchase and sale",
      "Low-stock alerts with reorder thresholds",
      "Monthly stock movement reports",
    ],
    level: "Minor Project",
  },
  {
    id: 12,
    title: "College Event Registration Portal",
    category: "MCA",
    technology: ["React", "Node.js", "MongoDB"],
    shortDescription:
      "A portal where students discover college events and register with QR-coded tickets.",
    description:
      "Campus events drown in WhatsApp groups and spreadsheet signups. This project builds an event portal where organizers publish events with seat limits, students browse and register, and tickets are issued as scannable QR codes. Organizers get live attendance dashboards, making it a complete two-sided application in one codebase.",
    image: "/art/event-portal.svg",
    imageAlt: "Illustration of an event calendar with tickets",
    features: [
      "Event listings with seat limits and waitlisting",
      "Student registration with QR-coded tickets",
      "Organizer dashboard with live attendance counts",
      "Event reminders via email simulation",
    ],
    level: "Major Project",
  },
  {
    id: 13,
    title: "Digital Marketing Campaign Analyzer",
    category: "BBA",
    technology: ["Python", "React"],
    shortDescription:
      "Measure campaign ROI across channels with funnel and engagement analytics.",
    description:
      "Marketing budgets deserve accountability. This project analyzes campaign data across social, email and search channels to compute reach, engagement and conversion metrics. A funnel view shows where prospects drop off, channel comparison reveals the best ROI, and a recommendation panel suggests where to shift spend next quarter.",
    image: "/art/digital-marketing.svg",
    imageAlt: "Illustration of a marketing funnel with social metrics",
    features: [
      "Multi-channel campaign performance comparison",
      "Conversion funnel visualization",
      "ROI and cost-per-acquisition metrics",
      "Budget reallocation recommendation panel",
    ],
    level: "Minor Project",
  },
];

export const categories = [
  {
    name: "B.Tech",
    blurb: "Engineering majors across software, IoT and data domains.",
  },
  {
    name: "BCA",
    blurb: "Application-focused builds with modern web stacks.",
  },
  {
    name: "MCA",
    blurb: "Advanced master's projects across AI and full-stack development.",
  },
  {
    name: "MBA",
    blurb: "Business analytics projects with decision-focused insights.",
  },
  {
    name: "BBA",
    blurb: "Management projects connecting data to business outcomes.",
  },
  {
    name: "Other",
    blurb: "Diploma and interdisciplinary projects across emerging domains.",
  },
];
