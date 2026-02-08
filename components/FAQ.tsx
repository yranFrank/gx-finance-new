import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import FadeIn from './FadeIn';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What documents do I need to apply for a loan?",
      answer: "Typically, you'll need identification (passport/driver's license), proof of income (payslips or tax returns), and details of your assets and liabilities. We will provide a specific checklist tailored to your situation."
    },
    {
      question: "How long does the loan approval process take?",
      answer: "The timeline varies depending on the lender and the complexity of your application. Pre-approval can often be arranged within a few days, while full approval and settlement may take 4-6 weeks."
    },
    {
      question: "Do you charge a fee for your services?",
      answer: "In most residential lending cases, our service is free to you as we are paid a commission by the lender. For complex commercial loans, a service fee may apply, which we will disclose upfront."
    },
    {
      question: "Can you help me if I have bad credit?",
      answer: "Yes, we work with a diverse panel of lenders, including those who specialize in assisting clients with impaired credit histories. We can assess your situation and find a suitable solution."
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-glc-offwhite py-24">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-16 text-center text-glc-slate">
            Frequently Asked <span className="text-glc-red">Questions</span>
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div 
                className={`bg-white rounded-sm overflow-hidden border transition-all duration-300 ${openIndex === index ? 'border-glc-gold shadow-lg' : 'border-gray-100'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-glc-slate text-lg">{faq.question}</span>
                  <div className={`p-2 rounded-full ${openIndex === index ? 'bg-glc-red text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-glc-gray leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;