
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI assistant work?",
    answer: "Our AI assistant uses natural language processing to understand your financial questions and provide personalized insights. It can analyze your spending patterns, suggest budgeting strategies, and answer specific questions about your finances in plain English."
  },
  {
    question: "Is my financial data secure?",
    answer: "Absolutely. We use bank-level encryption to protect your data. Your financial information is stored securely, and we never sell your data to third parties. You can also delete your data at any time."
  },
  {
    question: "Do I need to link my bank accounts?",
    answer: "While connecting your accounts provides the most personalized experience, it's not required. You can manually input information or start with just a few accounts and add more later as you get comfortable with the platform."
  },
  {
    question: "What does it cost?",
    answer: "MyFinance AI will offer both free and premium tiers. The free version includes basic budgeting and AI assistance, while premium plans will offer advanced features like investment tracking, unlimited accounts, and custom financial planning tools."
  },
  {
    question: "When is MyFinance AI launching?",
    answer: "We're currently in private beta and plan to launch publicly in Q3 2025. Join our waitlist to get early access and be the first to know when we launch!"
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28" id="faq">
      <div className="max-content-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">You Asked, We Answered</h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Common questions about MyFinance AI and how it will help transform your financial life.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
                <AccordionTrigger className="text-lg font-medium py-5 hover:text-financeBlue-dark hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 pt-2 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
