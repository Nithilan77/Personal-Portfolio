// Case-study content. Every number here comes from the project's own
// evaluation output or README — nothing is estimated.

export const projects = [
  {
    id: "job-service",
    domain: "Distributed systems",
    title: "High-Throughput Job-Processing Service",
    problem:
      "Long-running work can't happen inside a request. It needs a queue — and a queue is only useful if it doesn't lose, duplicate, or silently drop jobs under load.",
    body: [
      "An async, horizontally-scalable job-processing system: FastAPI accepts work, arq workers consume it off a Redis queue, and the whole thing runs under Docker Compose.",
      "The reliability machinery is the actual project. Idempotency via atomic SET NX, token-bucket rate limiting in atomic Lua, a two-stage cache, and a dead-letter queue with exponential-backoff retries — each guarantee covered by its own test rather than asserted in a README.",
    ],
    stack: ["FastAPI", "arq", "Redis", "Docker Compose", "Locust", "Prometheus"],
    image: "/img/job-service-locust.png",
    imageCaption:
      "Locust load test — 50 concurrent users, sustained throughput, 0% failures.",
    metricsType: "spec",
    metricsCaption: "Load test: 50 concurrent users, steady state.",
    metrics: [
      ["Sustained throughput", "446 req/s"],
      ["p99 latency", "120 ms"],
      ["Failure rate", "0%"],
      ["Worker throughput (3 workers)", "1033 jobs/s"],
      ["Reliability test suite", "13 passing"],
    ],
    note: "Scaling from one worker to three was near-linear, which is the result you want and not the one you always get — it means the Redis queue, not the workers, is doing the coordinating.",
    repo: "https://github.com/Nithilan77/High-Throughput-Job-Processing-Service",
    demo: null,
  },
  {
    id: "filing-intelligence",
    domain: "RAG",
    title: "Filing Intelligence — Grounded Document QA",
    problem:
      "A 10-K filing runs past a hundred pages. Asking a language model about one from memory gets you a confident answer with no way to check it.",
    body: [
      "A question-answering service over the FY2025 10-K filings of American Express, Mastercard and Visa. It retrieves the relevant passages first, answers only from those passages, and prints inline citations that link back to the source chunk. Ask it something outside the corpus and it says so instead of inventing an answer.",
      "Retrieval is hybrid: dense MiniLM embeddings in FAISS alongside BM25, combined by Reciprocal Rank Fusion. Ingestion runs async through arq, and a two-stage Redis cache serves repeat questions without touching retrieval or the LLM at all.",
    ],
    stack: ["FastAPI", "FAISS", "BM25", "Redis", "arq", "Gemini", "React", "Docker"],
    image: "/img/filing-intelligence.png",
    imageCaption:
      "Grounded answer with inline citations, and the retrieval mode switchable at query time.",
    image2: "/img/filing-intelligence-sources.png",
    imageCaption2:
      "Every citation resolves to a retrieved chunk, with its fusion score.",
    metricsType: "compare",
    metricsCaption:
      "22 questions, hand-labelled with chunk-level gold, over 1,911 chunks.",
    metricsHead: ["Mode", "R@1", "R@5", "R@10", "MRR"],
    metricsRows: [
      { cells: ["dense", "0.273", "0.682", "0.727", "0.410"] },
      { cells: ["sparse", "0.273", "0.864", "0.955", "0.495"] },
      { cells: ["hybrid", "0.409", "0.727", "0.909", "0.560"], shipped: true },
    ],
    note: "Sparse retrieval actually beat hybrid on deep recall — 10-K language is terminology-dense, so exact-term matching goes a long way. But it ranked answers poorly, and for RAG the top chunk is the one that reaches the generator. Fusion fixed the ranking, so hybrid shipped. Reporting the result that didn't go my way seemed more useful than hiding it.",
    repo: "https://github.com/Nithilan77/Document_Intelligence_Service",
    demo: null,
  },
  {
    id: "text-to-sql",
    domain: "LLM systems",
    title: "Natural Language to SQL, with an Evaluation Harness",
    problem:
      "Hand a model a question with no schema context and it will invent tables that don't exist. The hard part isn't the translation — it's making the translation reliable enough to trust.",
    body: [
      "A retrieval-plus-LLM pipeline that turns a plain English question into runnable SQL, executes it, and returns the rows. A read-only AST guard parses every generated statement before execution, so nothing that isn't a SELECT ever reaches the database. A bounded self-correction loop retries on failure without looping forever.",
      "The harness matters as much as the pipeline: resumable, checkpointed, with a controlled ablation so any change to retrieval or provider can be regression-tested against a fixed question set instead of judged by eye.",
    ],
    stack: ["Python", "FastAPI", "sentence-transformers", "Llama-3.3-70B (Groq)", "SQLite", "React"],
    image: "/img/text-to-sql.png",
    imageCaption:
      "A question, the SQL the model produced, and the rows it returned.",
    metricsType: "spec",
    metricsCaption: "Fixed 40-question evaluation set.",
    metrics: [
      ["Execution accuracy", "85%"],
      ["Eval questions", "40"],
      ["Safety guard", "read-only AST"],
      ["Correction loop", "bounded"],
    ],
    note: "A demo that looks like it works proves nothing. A number you can re-run after every change proves something, and it's the difference between guessing that a design choice helped and knowing it did.",
    repo: "https://github.com/Nithilan77/LLM_Powered_SQL_Query_Generator",
    demo: null,
  },
];

export const experience = [
  {
    role: "Research Intern",
    org: "National Institute of Technology, Tiruchirappalli",
    place: "Tiruchirappalli, India",
    period: "May 2026 — Present",
    current: true,
    points: [
      "Researching LLM reasoning and retrieval-augmented question answering.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "QPay India Pvt Ltd",
    place: "Chennai, India",
    period: "May 2026 — Jun 2026",
    points: [
      "Built a payment-gateway risk-scoring engine producing an explainable 0–100 anomaly score from per-account behavioural baselines. Framed as a deviation score rather than a fraud classifier, since there were no fraud labels — accounts with sparse history are flagged low-confidence instead of scored confidently on thin evidence.",
      "Benchmarked TF-IDF, GloVe and fine-tuned BERT for review sentiment classification across 1.8M reviews, reaching F1 0.82. Raw text outperformed preprocessed input for BERT, which is the opposite of the classical-model result and worth knowing before you build the pipeline.",
    ],
  },
  {
    role: "Software Testing Intern",
    org: "CUMI (Carborundum Universal Limited)",
    place: "Chennai, India",
    period: "Jun 2025 — Jul 2025",
    points: [
      "Automated UI and frontend regression testing with SikuliX and Python, replacing manual click-through verification.",
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "Java", "C", "JavaScript", "SQL"] },
  {
    group: "AI & retrieval",
    items: ["RAG", "LLM evaluation", "Semantic retrieval", "FAISS", "BM25", "sentence-transformers"],
  },
  {
    group: "Systems & backend",
    items: ["Distributed systems", "Concurrency", "Multithreading", "Synchronization", "REST APIs", "FastAPI", "arq", "Redis"],
  },
  {
    group: "Infrastructure & reliability",
    items: ["Docker", "Docker Compose", "Caching", "Rate limiting", "Load testing (Locust)", "pytest", "Git"],
  },
  { group: "Databases", items: ["MySQL", "Oracle SQL", "SQLite"] },
];

export const education = [
  {
    school: "Sri Sivasubramaniya Nadar College of Engineering",
    place: "Chennai",
    detail: "B.Tech. Information Technology",
    period: "Aug 2024 — Present",
    stats: [
      ["Rank", "13 / 141"],
      ["CGPA", "8.511"],
    ],
  },
  {
    school: "Maharishi Vidya Mandir Senior Secondary School",
    place: "Chennai",
    detail: "CBSE Class X & XII",
    period: "Jun 2020 — May 2024",
    stats: [
      ["Class XII", "94.8%"],
      ["Class X", "95.6%"],
    ],
  },
];
