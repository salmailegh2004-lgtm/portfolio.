const languageToggle = document.getElementById('languageToggle');
let currentLanguage = 'en';
function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en][data-fr]').forEach(el => {
    const value = el.dataset[lang];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll('[data-ph-en][data-ph-fr]').forEach(el => {
    el.placeholder = el.dataset[lang === 'en' ? 'phEn' : 'phFr'];
  });
  languageToggle.textContent = lang === 'en' ? 'FR' : 'EN';
}
languageToggle.addEventListener('click', () => setLanguage(currentLanguage === 'en' ? 'fr' : 'en'));

const projects = {
  cnss: {
    title: 'CNSS Knowledge Chatbot',
    category: {en:'GENERATIVE AI · RAG · INTERNSHIP',fr:'IA GÉNÉRATIVE · RAG · STAGE'},
    intro: {
      en: 'How can people find a clear answer in a large collection of official social-security information? This internship project explored a multilingual assistant that retrieves relevant CNSS content before generating an answer, rather than relying only on a language model’s memory.',
      fr: 'Comment aider les usagers à trouver une réponse claire dans un ensemble important d’informations officielles sur la sécurité sociale ? Ce projet de stage explore un assistant multilingue qui récupère des contenus CNSS pertinents avant de générer une réponse, au lieu de s’appuyer uniquement sur la mémoire d’un modèle de langage.'
    },
    meta: {en:['Internship · 5 weeks','French / Arabic','Python · FastAPI'],fr:['Stage · 5 semaines','Français / arabe','Python · FastAPI']},
    sections: [
      {title:{en:'01 / The problem',fr:'01 / Le problème'},body:{en:'CNSS information is spread across web pages and PDF documents. A user may know what they need but not which page contains the relevant rule, eligibility condition or procedure. A useful assistant must retrieve relevant passages and make its answer traceable to source material.',fr:'Les informations de la CNSS sont réparties entre des pages web et des documents PDF. Un usager peut connaître son besoin sans savoir quelle page contient la règle, la condition d’éligibilité ou la procédure pertinente. Un assistant utile doit retrouver les passages pertinents et relier sa réponse aux sources.'}},
      {title:{en:'02 / The solution and workflow',fr:'02 / La solution et le workflow'},body:{en:'The pipeline begins with a controlled collection of official web pages and PDFs. Content is extracted, cleaned and split into smaller chunks. An embedding model represents each chunk for semantic search in ChromaDB. Retrieved passages are then reranked with a CrossEncoder before being passed as context to a local Ollama language model. FastAPI exposes the backend, while SQLite stores conversation history.',fr:'Le pipeline commence par une collecte contrôlée de pages officielles et de PDF. Le contenu est extrait, nettoyé puis découpé en segments. Un modèle d’embeddings représente chaque segment pour la recherche sémantique dans ChromaDB. Les passages récupérés sont ensuite réordonnés par un CrossEncoder avant d’être transmis comme contexte à un modèle de langage local via Ollama. FastAPI expose le backend et SQLite conserve l’historique des conversations.'}},
      {title:{en:'03 / Why these choices?',fr:'03 / Pourquoi ces choix ?'},body:{en:'Retrieval-Augmented Generation separates finding evidence from composing an answer. ChromaDB supports vector retrieval; reranking helps prioritize passages that match the question more closely; and a local LLM keeps generation within the local runtime. The source-first approach is intended to make answers more relevant and easier to check.',fr:'La génération augmentée par récupération sépare la recherche de preuves de la formulation de la réponse. ChromaDB permet la recherche vectorielle ; le reranking aide à privilégier les passages les plus proches de la question ; un LLM local exécute la génération dans l’environnement local. Cette approche fondée sur les sources vise à rendre les réponses plus pertinentes et plus faciles à vérifier.'}},
      {title:{en:'04 / My technical focus',fr:'04 / Mon travail technique'},body:{en:'The CV records work on document collection and processing, a multilingual RAG pipeline, vector storage and reranking, the FastAPI backend, and conversation logging. In the final portfolio, this section should be supplemented with the exact components personally implemented, a screenshot of the real interface, and a sample answer with its source references.',fr:'Le CV mentionne le travail sur la collecte et le traitement documentaire, le pipeline RAG multilingue, le stockage vectoriel et le reranking, le backend FastAPI et la journalisation des conversations. Dans le portfolio final, cette partie doit être complétée par les composants précisément réalisés personnellement, une capture réelle de l’interface et un exemple de réponse avec ses références sources.'}},
      {title:{en:'05 / Evaluation, limits and next steps',fr:'05 / Évaluation, limites et suite'},body:{en:'The materials provided do not establish a verified numerical evaluation score, so none is claimed here. Important checks for a RAG assistant include whether retrieved passages support the answer, whether source references are correct, how it behaves when the knowledge base lacks an answer, and whether French and Arabic queries work consistently. Next steps would include a curated test set, retrieval metrics, answer-grounding review and an explicit “I cannot find this in the available sources” fallback.',fr:'Les documents fournis ne permettent pas d’établir un score d’évaluation numérique vérifié ; aucun n’est donc annoncé ici. Les contrôles importants pour un assistant RAG concernent l’appui des réponses sur les passages récupérés, l’exactitude des références, le comportement lorsque la base ne contient pas la réponse et la cohérence des requêtes en français et en arabe. Les prochaines étapes seraient de créer un jeu de test, mesurer la récupération, vérifier l’ancrage des réponses et prévoir une réponse explicite lorsque l’information est absente.'}}
    ],
    tags:['Python','FastAPI','ChromaDB','CrossEncoder','Ollama','SQLite']
  },
  retail: {
    title: 'Retail Forecasting & Anomaly Detection',
    category: {en:'DEEP LEARNING · TIME SERIES · MULTI-AGENT',fr:'DEEP LEARNING · SÉRIES TEMPORELLES · MULTI-AGENTS'},
    intro: {
      en: 'Retail teams need to anticipate demand and notice unusual sales patterns early. This project combines forecasting and anomaly detection in a multi-agent workflow, with recommendations and a human review step rather than treating a model output as an automatic business decision.',
      fr: 'Les équipes retail doivent anticiper la demande et repérer rapidement les ventes inhabituelles. Ce projet combine prévision et détection d’anomalies dans un workflow multi-agents, avec des recommandations et une étape de validation humaine plutôt que de transformer automatiquement une prédiction en décision métier.'
    },
    meta: {en:['Academic project · 2025–2026','Forecasting + anomaly detection','PyTorch · LSTM'],fr:['Projet académique · 2025–2026','Prévision + anomalies','PyTorch · LSTM']},
    sections: [
      {title:{en:'01 / The problem',fr:'01 / Le problème'},body:{en:'Retail data changes with weekdays, seasons, promotions and recent sales history. A forecasting model estimates expected demand, while an anomaly detector flags observations that differ from learned patterns. These are related but distinct tasks and need separate evaluation.',fr:'Les données retail évoluent selon les jours de la semaine, les saisons, les promotions et l’historique récent des ventes. Un modèle de prévision estime la demande attendue, tandis qu’un détecteur d’anomalies signale les observations qui s’écartent des tendances apprises. Ce sont deux tâches liées, mais distinctes, qui nécessitent des évaluations séparées.'}},
      {title:{en:'02 / Data preparation',fr:'02 / Préparation des données'},body:{en:'The feature-engineering plan includes calendar features such as day of week, month and weekend flags, cyclical encodings, sales lags, changes and rolling statistics. These features give the models access to recent history and recurring calendar patterns. The portfolio should show a small real example of the input table before and after preprocessing.',fr:'Le plan de feature engineering comprend des variables calendaires comme le jour de la semaine, le mois et les indicateurs de week-end, des encodages cycliques, des retards de ventes, des variations et des statistiques glissantes. Ces variables donnent aux modèles accès à l’historique récent et aux motifs calendaires récurrents. Le portfolio devrait montrer un petit exemple réel de la table avant et après prétraitement.'}},
      {title:{en:'03 / Model and agent workflow',fr:'03 / Modèles et workflow multi-agents'},body:{en:'The described architecture separates responsibilities: a preprocessing agent prepares the data; an LSTM forecasting component estimates demand; an LSTM Autoencoder component identifies unusual sequences; a recommendation component proposes actions; and a human-in-the-loop step allows review before reporting. CrewAI is used for orchestration, with a Streamlit interface and Ollama in the wider application.',fr:'L’architecture décrite sépare les responsabilités : un agent de prétraitement prépare les données ; un composant LSTM estime la demande ; un LSTM Autoencoder identifie les séquences inhabituelles ; un composant de recommandation propose des actions ; puis une étape human-in-the-loop permet la validation avant le reporting. CrewAI orchestre le workflow, avec une interface Streamlit et Ollama dans l’application globale.'}},
      {title:{en:'04 / Results and interpretation',fr:'04 / Résultats et interprétation'},body:{en:'The CV records a forecasting R² of 0.56. This indicates that the model explains some variation in the target, but it is not a complete performance story on its own. The final case study should state the time-based train/validation/test split, forecast horizon, baseline model, and MAE/RMSE alongside R². Anomaly precision, recall and F1 should be shown only if the final experiment and labels support them.',fr:'Le CV indique un R² de 0,56 pour la prévision. Cela signifie que le modèle explique une partie de la variation de la cible, mais ce chiffre ne suffit pas à résumer les performances. L’étude de cas finale devrait préciser le découpage temporel train/validation/test, l’horizon de prévision, le modèle de référence ainsi que MAE/RMSE en complément du R². La précision, le rappel et le F1 des anomalies ne doivent être affichés que si l’expérience finale et les labels les justifient.'}},
      {title:{en:'05 / What I would improve',fr:'05 / Ce que j’améliorerais'},body:{en:'I would compare against a simple seasonal baseline, guard against time leakage, evaluate by product/store segment, and inspect false alarms with a domain user. I would also report forecasting and anomaly detection in separate panels so a strong result in one task cannot hide a weak result in the other.',fr:'Je comparerais le modèle à une baseline saisonnière simple, vérifierais l’absence de fuite temporelle, évaluerais les résultats par produit/magasin et analyserais les fausses alertes avec un utilisateur métier. Je présenterais également la prévision et la détection d’anomalies dans des panneaux distincts afin qu’un bon résultat sur une tâche ne masque pas une faiblesse sur l’autre.'}}
    ],
    tags:['PyTorch','LSTM','LSTM Autoencoder','CrewAI','Streamlit','Ollama']
  },
  fraud: {
    title: 'Bank Transaction Fraud Detection',
    category: {en:'MACHINE LEARNING · INTERNSHIP',fr:'MACHINE LEARNING · STAGE'},
    intro: {
      en: 'Payment systems must distinguish legitimate activity from suspicious patterns while avoiding unnecessary disruption to genuine customers. During an observation internship at HPS, this project explored a machine-learning approach to transaction fraud detection using anonymized data.',
      fr: 'Les systèmes de paiement doivent distinguer les opérations légitimes des comportements suspects sans perturber inutilement les clients. Lors d’un stage d’observation chez HPS, ce projet a exploré une approche de Machine Learning pour la détection de fraude à partir de données anonymisées.'
    },
    meta: {en:['HPS · Observation internship','Anonymized transaction data','Python · scikit-learn'],fr:['HPS · Stage d’observation','Transactions anonymisées','Python · scikit-learn']},
    sections: [
      {title:{en:'01 / The problem',fr:'01 / Le problème'},body:{en:'Fraud detection is a classification problem with an important practical constraint: fraudulent examples are often much less common than legitimate transactions. A model can appear accurate by predicting the majority class, so evaluation must consider errors on the minority class and the cost of false alerts.',fr:'La détection de fraude est un problème de classification avec une contrainte pratique importante : les transactions frauduleuses sont souvent beaucoup moins nombreuses que les transactions légitimes. Un modèle peut sembler précis en prédisant toujours la classe majoritaire ; l’évaluation doit donc examiner les erreurs sur la classe minoritaire et le coût des fausses alertes.'}},
      {title:{en:'02 / Data and method',fr:'02 / Données et méthode'},body:{en:'The CV describes analysis of payment flows and a classifier built with Python, scikit-learn and TF-IDF. TF-IDF converts text-like fields into numerical features weighted by how informative terms are across records. The exact input fields and preprocessing steps should be documented from the original notebook, because the CV alone does not specify the full dataset schema.',fr:'Le CV décrit l’analyse des flux de paiement et un classifieur construit avec Python, scikit-learn et TF-IDF. TF-IDF transforme les champs textuels en variables numériques pondérées selon le caractère informatif des termes dans les enregistrements. Les champs d’entrée et les étapes de prétraitement exactes doivent être documentés à partir du notebook original, car le CV ne précise pas le schéma complet des données.'}},
      {title:{en:'03 / Model evaluation',fr:'03 / Évaluation du modèle'},body:{en:'A credible evaluation should include a train/test strategy that prevents leakage, a confusion matrix, precision, recall and F1, and a discussion of the trade-off between catching fraud and generating false positives. No numerical performance metric is included here because the available CV excerpt does not establish a final verified score.',fr:'Une évaluation crédible doit inclure un découpage train/test qui évite les fuites, une matrice de confusion, la précision, le rappel et le F1, ainsi qu’une discussion du compromis entre détection de fraude et faux positifs. Aucun résultat chiffré n’est affiché ici, car l’extrait du CV disponible ne confirme pas de score final vérifié.'}},
      {title:{en:'04 / Practical constraints',fr:'04 / Contraintes pratiques'},body:{en:'Payment data is sensitive. The portfolio should use synthetic or carefully anonymized examples, never customer details, transaction identifiers or internal HPS material. The case study should also distinguish the educational model from any production fraud-monitoring system.',fr:'Les données de paiement sont sensibles. Le portfolio doit utiliser des exemples synthétiques ou soigneusement anonymisés, jamais des détails clients, identifiants de transaction ou documents internes HPS. L’étude de cas doit aussi distinguer le modèle académique d’un système de surveillance de fraude en production.'}},
      {title:{en:'05 / Learning',fr:'05 / Apprentissages'},body:{en:'This project connects model development to a real operational context: the most useful model is not simply the one with the highest overall score, but one whose errors are understood and whose output can be reviewed within a controlled process.',fr:'Ce projet relie le développement d’un modèle à un contexte opérationnel réel : le modèle le plus utile n’est pas simplement celui qui obtient le meilleur score global, mais celui dont les erreurs sont comprises et dont les résultats peuvent être examinés dans un processus contrôlé.'}}
    ],
    tags:['Python','scikit-learn','TF-IDF','Classification','Fraud detection']
  },
  vision: {
    title: 'QR & Barcode Detection',
    category: {en:'COMPUTER VISION · IMAGE PROCESSING',fr:'VISION PAR ORDINATEUR · TRAITEMENT D’IMAGE'},
    intro: {
      en: 'A QR code or barcode can become difficult to read when an image is blurred, poorly lit, rotated or visually noisy. This project builds an image-processing pipeline to locate likely code regions and pass them to a decoder.',
      fr: 'Un QR code ou un code-barres peut devenir difficile à lire lorsque l’image est floue, mal éclairée, inclinée ou bruitée. Ce projet construit un pipeline de traitement d’image pour localiser les régions probables contenant un code puis les transmettre à un décodeur.'
    },
    meta: {en:['Academic project · 2025–2026','QR + 1D barcode formats','OpenCV · NumPy · Pyzbar'],fr:['Projet académique · 2025–2026','QR + codes-barres 1D','OpenCV · NumPy · Pyzbar']},
    sections: [
      {title:{en:'01 / Objective',fr:'01 / Objectif'},body:{en:'The goal is not just to call a decoding library; it is to understand how image preprocessing can make code regions easier to detect and decode. The project report includes QR codes and linear formats such as EAN-13 and CODE128.',fr:'L’objectif n’est pas seulement d’appeler une bibliothèque de décodage, mais de comprendre comment le prétraitement peut faciliter la détection et le décodage des régions contenant un code. Le rapport inclut des QR codes et des formats linéaires comme EAN-13 et CODE128.'}},
      {title:{en:'02 / Processing pipeline',fr:'02 / Pipeline de traitement'},body:{en:'The documented workflow includes converting the image to grayscale, applying blur to reduce noise, testing Otsu thresholding, detecting edges with Canny/Sobel, applying morphological operations, finding contours or regions of interest, and attempting decoding with Pyzbar. Different intermediate representations can be compared to see which helps localization.',fr:'Le workflow documenté comprend la conversion en niveaux de gris, un flou pour réduire le bruit, le seuillage d’Otsu, la détection de contours avec Canny/Sobel, des opérations morphologiques, la recherche de contours ou de régions d’intérêt, puis une tentative de décodage avec Pyzbar. Les représentations intermédiaires peuvent être comparées pour voir lesquelles facilitent la localisation.'}},
      {title:{en:'03 / Key design consideration',fr:'03 / Point de conception important'},body:{en:'QR codes and 1D barcodes have different visual structures. A single preprocessing setting may work for one image but fail on another, so a robust demonstration should show several image conditions and explain the limits of each operation rather than implying one filter solves every case.',fr:'Les QR codes et les codes-barres 1D ont des structures visuelles différentes. Un même réglage de prétraitement peut fonctionner sur une image et échouer sur une autre. Une démonstration robuste devrait donc montrer plusieurs conditions d’image et expliquer les limites de chaque opération plutôt que de prétendre qu’un filtre résout tous les cas.'}},
      {title:{en:'04 / Evidence to include',fr:'04 / Preuves à inclure'},body:{en:'The strongest evidence is a before/after image sequence: original input, grayscale or thresholded image, detected region, and decoded output. The supplied report does not provide a verified global accuracy percentage, so the portfolio should avoid inventing one.',fr:'La preuve la plus parlante est une séquence avant/après : image originale, image en niveaux de gris ou seuillée, région détectée et résultat décodé. Le rapport fourni ne donne pas de taux de précision global vérifié ; le portfolio doit donc éviter d’en inventer un.'}},
      {title:{en:'05 / What this demonstrates',fr:'05 / Ce que ce projet démontre'},body:{en:'This project provides evidence of practical image-processing knowledge, debugging through intermediate outputs, and combining classical computer-vision operations with an existing decoding library.',fr:'Ce projet témoigne de connaissances pratiques en traitement d’image, de débogage par inspection des résultats intermédiaires et de la combinaison d’opérations classiques de vision par ordinateur avec une bibliothèque de décodage.'}}
    ],
    tags:['Python','OpenCV','NumPy','Sobel','Morphology','Pyzbar']
  },
  energy: {
    title: 'Energy Consumption Prediction',
    category: {en:'BIG DATA · DISTRIBUTED PROCESSING · ML',fr:'BIG DATA · TRAITEMENT DISTRIBUÉ · ML'},
    intro: {
      en: 'Energy-consumption analysis involves more than fitting a model: data must be ingested, stored, transformed and made available for analysis. This project combines a Hadoop ecosystem pipeline with predictive modeling using Spark MLlib.',
      fr: 'L’analyse de la consommation énergétique ne se limite pas à entraîner un modèle : les données doivent être ingérées, stockées, transformées et rendues disponibles pour l’analyse. Ce projet combine un pipeline de l’écosystème Hadoop et une modélisation prédictive avec Spark MLlib.'
    },
    meta: {en:['Academic project · 2025–2026','Distributed data pipeline','HDFS · Hive · Spark MLlib'],fr:['Projet académique · 2025–2026','Pipeline distribué','HDFS · Hive · Spark MLlib']},
    sections: [
      {title:{en:'01 / The data engineering problem',fr:'01 / Le problème Data Engineering'},body:{en:'A predictive workflow needs repeatable data ingestion and a structured place to store records before modeling. The project uses HDFS for distributed storage, Hive for table organization and Parquet for columnar data storage, then Spark for transformations and model training.',fr:'Un workflow prédictif nécessite une ingestion reproductible et un stockage structuré avant la modélisation. Le projet utilise HDFS pour le stockage distribué, Hive pour organiser les tables et Parquet pour le stockage en colonnes, puis Spark pour les transformations et l’entraînement.'}},
      {title:{en:'02 / Pipeline architecture',fr:'02 / Architecture du pipeline'},body:{en:'The documented path is CSV ingestion → HDFS → Hive/Parquet tables → Spark feature preparation → Spark MLlib model training → comparison and visualization. The report lists features such as outdoor temperature, wind speed, building type, meter type, season and month, plus derived indicators such as is_hot and high_wind.',fr:'Le parcours documenté est : ingestion CSV → HDFS → tables Hive/Parquet → préparation des variables dans Spark → entraînement avec Spark MLlib → comparaison et visualisation. Le rapport cite des variables comme la température extérieure, la vitesse du vent, le type de bâtiment, le type de compteur, la saison et le mois, ainsi que des indicateurs dérivés comme is_hot et high_wind.'}},
      {title:{en:'03 / Model comparison',fr:'03 / Comparaison des modèles'},body:{en:'The report compares Linear Regression (MAE 1.63, RMSE 1.99, R² 0.05), Decision Tree (1.49, 1.91, 0.19), Random Forest (1.35, 1.75, 0.33), and Gradient Boosted Trees (1.52, 1.95, 0.11). Random Forest is the best of these tested models on the reported metrics.',fr:'Le rapport compare la régression linéaire (MAE 1,63, RMSE 1,99, R² 0,05), l’arbre de décision (1,49, 1,91, 0,19), Random Forest (1,35, 1,75, 0,33) et Gradient Boosted Trees (1,52, 1,95, 0,11). Parmi ces modèles testés, Random Forest obtient les meilleurs résultats selon les métriques rapportées.'}},
      {title:{en:'04 / Interpreting the result honestly',fr:'04 / Interpréter honnêtement le résultat'},body:{en:'R² = 0.33 means the selected model explains only part of the variation in the target. It is the best of the tested candidates, but not evidence of highly accurate prediction. Further work could inspect data quality, add time-aware features, evaluate on a suitable held-out period, and compare against simple baselines.',fr:'R² = 0,33 signifie que le modèle retenu n’explique qu’une partie de la variation de la cible. Il est le meilleur parmi les candidats testés, mais cela ne prouve pas une prévision très précise. Les améliorations possibles comprennent l’inspection de la qualité des données, l’ajout de variables temporelles, une évaluation sur une période indépendante adaptée et la comparaison à des baselines simples.'}},
      {title:{en:'05 / What this project proves',fr:'05 / Ce que ce projet démontre'},body:{en:'The project demonstrates a complete data path from distributed storage to predictive modeling, and shows why model selection should be based on a comparison of multiple metrics rather than a single headline number.',fr:'Le projet démontre un parcours de données complet, du stockage distribué à la modélisation prédictive, et montre pourquoi le choix d’un modèle doit s’appuyer sur plusieurs métriques plutôt que sur un seul chiffre.'}}
    ],
    tags:['Hadoop','HDFS','Hive','Parquet','Spark','Spark MLlib','Random Forest']
  },
  medical: {
    title: 'Safety-Oriented Medical Triage',
    category: {en:'GENERATIVE AI · KNOWLEDGE GRAPH · SAFETY',fr:'IA GÉNÉRATIVE · GRAPHE DE CONNAISSANCES · SÉCURITÉ'},
    intro: {
      en: 'This academic prototype explores how semantic retrieval and graph relationships can support a structured medical-triage conversation. It is an educational system, not a diagnostic device and not a substitute for a healthcare professional.',
      fr: 'Ce prototype académique explore comment la recherche sémantique et les relations d’un graphe peuvent soutenir un échange structuré de triage médical. Il s’agit d’un système éducatif, pas d’un outil de diagnostic ni d’un substitut à un professionnel de santé.'
    },
    meta: {en:['Academic prototype','Non-diagnostic use only','Ollama · FAISS · Neo4j'],fr:['Prototype académique','Usage non diagnostique','Ollama · FAISS · Neo4j']},
    sections: [
      {title:{en:'01 / Design goal',fr:'01 / Objectif de conception'},body:{en:'The project investigates a hybrid architecture: semantic search can retrieve relevant text, while a graph can represent explicit relationships between concepts. A local language model can help formulate a response, but the system needs clear safety boundaries and must not present itself as making a clinical diagnosis.',fr:'Le projet étudie une architecture hybride : la recherche sémantique récupère des textes pertinents tandis qu’un graphe représente des relations explicites entre concepts. Un modèle de langage local peut aider à formuler une réponse, mais le système doit avoir des limites de sécurité claires et ne jamais se présenter comme un diagnostic clinique.'}},
      {title:{en:'02 / Architecture',fr:'02 / Architecture'},body:{en:'The described components are a local Ollama model, FAISS for vector retrieval, Neo4j for graph relationships and a FastAPI service layer. The portfolio should illustrate the flow from user input to retrieved context and graph context, then to a constrained response with appropriate escalation language.',fr:'Les composants décrits sont un modèle local Ollama, FAISS pour la recherche vectorielle, Neo4j pour les relations du graphe et un service FastAPI. Le portfolio devrait illustrer le chemin entre la saisie, le contexte récupéré et le contexte du graphe, puis une réponse encadrée avec un langage d’orientation approprié.'}},
      {title:{en:'03 / Safety boundaries',fr:'03 / Limites de sécurité'},body:{en:'A triage prototype must not diagnose, guarantee that a condition is harmless, or discourage professional care. It should acknowledge uncertainty, avoid collecting unnecessary sensitive details, and direct urgent symptoms to appropriate local emergency or clinical services. Only synthetic examples should be shown in the portfolio.',fr:'Un prototype de triage ne doit pas poser de diagnostic, garantir qu’un problème est sans danger ni décourager le recours aux soins. Il doit reconnaître l’incertitude, éviter de collecter des informations sensibles inutiles et orienter les symptômes urgents vers les services médicaux ou d’urgence adaptés. Seuls des exemples synthétiques doivent être présentés dans le portfolio.'}},
      {title:{en:'04 / Evidence and evaluation',fr:'04 / Preuves et évaluation'},body:{en:'The available project summary does not establish a validated clinical metric. Evidence should focus on architecture, retrieval examples, traceability of the information used, and safety tests. Any performance claim should be backed by a defined test set and review process.',fr:'Le résumé disponible ne fournit pas de métrique clinique validée. Les preuves devraient porter sur l’architecture, des exemples de récupération, la traçabilité des informations utilisées et les tests de sécurité. Toute affirmation de performance doit s’appuyer sur un jeu de test défini et un processus de revue.'}}
    ],
    tags:['Ollama','FAISS','Neo4j','FastAPI','Retrieval','Safety design']
  }
};
const dialog = document.getElementById('projectDialog');
document.querySelectorAll('[data-project]').forEach(card => card.addEventListener('click', () => {
  const project = projects[card.dataset.project];
  if (!project) return;
  document.getElementById('dialogTitle').textContent = project.title;
  document.getElementById('dialogDescription').textContent = project.intro[currentLanguage];
  document.getElementById('dialogEyebrow').textContent = project.category[currentLanguage];
  const meta = document.getElementById('dialogMeta');
  meta.replaceChildren(...project.meta[currentLanguage].map(item => {
    const span = document.createElement('span'); span.textContent = item; return span;
  }));
  const body = document.getElementById('dialogBody');
  body.replaceChildren();
  project.sections.forEach(section => {
    const article = document.createElement('section');
    article.className = 'case-section';
    const heading = document.createElement('h3'); heading.textContent = section.title[currentLanguage];
    const paragraph = document.createElement('p'); paragraph.textContent = section.body[currentLanguage];
    article.append(heading, paragraph);
    body.append(article);
  });
  const tags = document.createElement('div');
  tags.className = 'case-tags';
  project.tags.forEach(tag => { const span = document.createElement('span'); span.textContent = tag; tags.append(span); });
  body.append(tags);
  document.getElementById('dialogDone').textContent = currentLanguage === 'en' ? 'Back to projects' : 'Retour aux projets';
  dialog.showModal();
}));
function closeDialog(){dialog.close()}
document.getElementById('dialogClose').addEventListener('click', closeDialog);
document.getElementById('dialogDone').addEventListener('click', closeDialog);
dialog.addEventListener('click', e => { if(e.target === dialog) closeDialog(); });

/* Contact: copy buttons and mailto form */
const CONTACT_EMAIL = 'salmailegh@gmail.com';
const uiText = {
  copied: {en:'Copied ✓', fr:'Copié ✓'},
  errName: {en:'Please enter your name.', fr:'Veuillez saisir votre nom.'},
  errEmail: {en:'Please enter a valid email address.', fr:'Veuillez saisir une adresse e-mail valide.'},
  errMessage: {en:'Please write a short message.', fr:'Veuillez écrire un court message.'},
  greeting: {en:'Hello Salma,', fr:'Bonjour Salma,'},
  regards: {en:'Best regards,', fr:'Cordialement,'}
};

document.querySelectorAll('.copy-btn').forEach(btn => btn.addEventListener('click', async () => {
  const text = btn.dataset.copy;
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    const helper = document.createElement('textarea');
    helper.value = text; helper.setAttribute('readonly', '');
    helper.style.position = 'fixed'; helper.style.opacity = '0';
    document.body.append(helper); helper.select();
    try { document.execCommand('copy'); } catch (e) {}
    helper.remove();
  }
  btn.textContent = uiText.copied[currentLanguage];
  setTimeout(() => { btn.textContent = btn.dataset[currentLanguage]; }, 1800);
}));

const contactForm = document.getElementById('contactForm');
const formError = document.getElementById('formError');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const f = contactForm.elements;
  const name = f.name.value.trim(), email = f.email.value.trim(), message = f.message.value.trim();
  [f.name, f.email, f.message].forEach(el => el.removeAttribute('aria-invalid'));
  let error = '';
  if (!name) { error = uiText.errName[currentLanguage]; f.name.setAttribute('aria-invalid', 'true'); f.name.focus(); }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { error = uiText.errEmail[currentLanguage]; f.email.setAttribute('aria-invalid', 'true'); f.email.focus(); }
  else if (!message) { error = uiText.errMessage[currentLanguage]; f.message.setAttribute('aria-invalid', 'true'); f.message.focus(); }
  formError.hidden = !error;
  formError.textContent = error;
  if (error) return;
  const subjectLabel = f.subject.selectedOptions[0].dataset[currentLanguage];
  const body = uiText.greeting[currentLanguage] + '\n\n' + message + '\n\n' + uiText.regards[currentLanguage] + '\n' + name + '\n' + email;
  window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subjectLabel) + '&body=' + encodeURIComponent(body);
});