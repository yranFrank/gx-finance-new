import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white text-glc-gray">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-glc-slate">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-glc-slate pt-4">1. Introduction</h2>
          <p>
            GX Finance ("we", "our", "us") respects your privacy and is committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website 
            and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-2xl font-bold text-glc-slate pt-4">2. The Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-glc-gray">
            <li><strong className="text-glc-slate">Identity Data</strong> includes first name, maiden name, last name, username or similar identifier.</li>
            <li><strong className="text-glc-slate">Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong className="text-glc-slate">Financial Data</strong> includes bank account and payment card details.</li>
          </ul>

          <h2 className="text-2xl font-bold text-glc-slate pt-4">3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-glc-gray">
             <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
             <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
             <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h2 className="text-2xl font-bold text-glc-slate pt-4">4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
          </p>

          <h2 className="text-2xl font-bold text-glc-slate pt-4">5. Contact Details</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at: <br/>
            <strong className="text-glc-slate">Email:</strong> admin@gxfinance.com.au <br/>
            <strong className="text-glc-slate">Address:</strong> Level 1, Suite 2/339 Whitehorse Rd, Balwyn VIC 3103
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;