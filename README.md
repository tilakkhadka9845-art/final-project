# Supplier Risk Analyzer

A high-premium, AI-powered full-stack application designed to analyze supply chain risks using RAG (Retrieval-Augmented Generation) and Claude 3.5 Sonnet.

## 🚀 Features
- **RAG-Powered Analysis**: Uses ChromaDB and `all-MiniLM-L6-v2` to retrieve relevant risk context for analysis.
- **AI Risk Scoring**: Detailed risk breakdown across 4 dimensions (Geopolitical, Financial, Lead Time, Quality).
- **Advanced Visualizations**:
  - **Radar Chart**: Multipoint risk dimension analysis.
  - **Risk Matrix**: 5x5 Likelihood vs Impact visualization.
  - **Risk Badges**: Color-coded risk levels.
- **Supplier Management**: Search, filter, bulk import via CSV, and deep-dive detail panels.
- **Premium Design**: Dark mode UI with glassmorphism, smooth animations, and tailored color palettes.

## 🛠️ Architecture
- **Backend**: Python FastAPI, SQLite, ChromaDB, Anthropic Claude API.
- **Frontend**: React, Vite, Tailwind CSS, Chart.js, Lucide Icons.
- **Deployment**: Docker Compose.

## 📦 Setup Instructions

### 1. Prerequisites
- Docker and Docker Compose installed.
- Anthropic API Key.

### 2. Environment Setup
Create a `.env` file in the root directory (copy from `.env.example`):
```bash
ANTHROPIC_API_KEY=your_actual_key_here
```

### 3. Build and Run
```bash
docker-compose up --build
```
The application will be available at:
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:8000](http://localhost:8000)

### 4. Seed Knowledge Base (Optional)
The backend container automatically initializes the knowledge base on startup if configured in `services/ingest.py`.

## 📂 Project Structure
- `backend/`: FastAPI application.
- `frontend/`: React + Vite application.
- `knowledge_base/`: Sample supply chain risk reports.

---
Developed with focus on speed, reliability, and visual excellence.
