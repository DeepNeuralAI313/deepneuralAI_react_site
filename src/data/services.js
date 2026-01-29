import { Brain, Database, MessageSquare, Cpu } from 'lucide-react';

export const services = [
    {
        id: 1,
        title: "AI Strategic Consulting",
        description: "We help businesses identify opportunities where AI can drive significant value. Our experts guide you through the digital transformation journey, ensuring seamless integration of AI technologies.",
        icon: Brain,
        features: [
            "AI Readiness Assessment",
            "Digital Transformation Roadmap",
            "Technology Stack Selection",
            "ROI Analysis"
        ]
    },
    {
        id: 2,
        title: "Data Science & Analytics",
        description: "Unlock the power of your data with our advanced analytics solutions. We build predictive models that help you make informed, data-driven decisions.",
        icon: Database,
        features: [
            "Predictive Analytics",
            "Data Mining & Visualization",
            "Business Intelligence",
            "Big Data Processing"
        ]
    },
    {
        id: 3,
        title: "NLP Solutions",
        description: "Enhance customer interaction with our Natural Language Processing solutions. We build intelligent chatbots and sentiment analysis tools that understand human language.",
        icon: MessageSquare,
        features: [
            "Custom Chatbots",
            "Sentiment Analysis",
            "Text Classification",
            "Language Translation"
        ]
    },
    {
        id: 4,
        title: "Generative AI",
        description: "Leverage the latest in Generative AI to create custom content, images, and code. We build fine-tuned Large Language Models (LLMs) tailored to your specific domain.",
        icon: Cpu,
        features: [
            "Custom LLMs",
            "Image Generation",
            "Content Automation",
            "RAG Implementation"
        ]
    }
];
