const TermsPage = () => {
  const effectiveDate = "March 13, 2026";
  const legalEntity = "Nakshi AI (Proprietorship)";
  const address = "Jaipur, Rajasthan, India";
  const contactEmail = "legal@nakshiai.in";
  const gst = "[PENDING]";

  return (
    <div className="min-h-screen" style={{ background: 'hsl(var(--nakshi-darkest))' }}>
      <div className="max-w-[800px] mx-auto px-5 py-16 md:py-24">
        <a href="/" className="font-heading text-[16px] font-semibold tracking-[0.12em] text-nakshi-text-on-dark/80 hover:text-primary transition-colors mb-12 inline-block">
          ← BACK TO HOME
        </a>
        
        <h1 className="font-heading text-[36px] md:text-[56px] font-light text-nakshi-text-on-dark mb-4">Terms of Service</h1>
        <p className="font-body text-[13px] text-nakshi-text-on-dark/40 mb-12 uppercase tracking-widest">
          Effective Date: {effectiveDate} · Last Updated: {effectiveDate}
        </p>

        <div className="font-body text-[14px] md:text-[15px] text-nakshi-text-on-dark/60 leading-[1.8] space-y-10 legal-content">
          <section>
            <h2 className="font-heading text-[22px] text-nakshi-text-on-dark/90 mb-4 font-normal">1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and {legalEntity}, operating under the trade name <strong className="text-nakshi-text-on-dark/80">Nakshi AI</strong> ("we," "us," or "our"), governing your access to and use of the Nakshi AI service accessible via WhatsApp and the website nakshiai.in (collectively, the "Service").
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[22px] text-nakshi-text-on-dark/90 mb-4 font-normal">2. Description of Service</h2>
            <p>
              Nakshi AI is an artificial intelligence–powered jewelry photography service delivered exclusively through WhatsApp. The Service enables jewelers and jewelry businesses to upload photographs of jewelry items and receive AI-generated professional model-style product photographs within approximately 60 seconds.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[22px] text-nakshi-text-on-dark/90 mb-4 font-normal">3. Eligibility and Account</h2>
            <p>Your WhatsApp number serves as your primary account identifier. You are responsible for all activity conducted through your WhatsApp number in connection with the Service. You agree to provide accurate, current, and complete information, including your full name and UPI details where required for referral payouts.</p>
          </section>

          <section>
            <h2 className="font-heading text-[22px] text-nakshi-text-on-dark/90 mb-4 font-normal">4. Subscriptions and Payments</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-white/10">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-3 border border-white/10 text-nakshi-text-on-dark/80 font-medium">Plan</th>
                    <th className="p-3 border border-white/10 text-nakshi-text-on-dark/80 font-medium">Monthly Price</th>
                    <th className="p-3 border border-white/10 text-nakshi-text-on-dark/80 font-medium">Image Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-white/10">Starter</td>
                    <td className="p-3 border border-white/10">₹699/month</td>
                    <td className="p-3 border border-white/10">40 images</td>
                  </tr>
                  <tr className="bg-white/[0.02]">
                    <td className="p-3 border border-white/10 font-medium text-primary">Growth</td>
                    <td className="p-3 border border-white/10 font-medium text-primary">₹1,799/month</td>
                    <td className="p-3 border border-white/10 font-medium text-primary">150 images</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-white/10">Pro</td>
                    <td className="p-3 border border-white/10">₹3,999/month</td>
                    <td className="p-3 border border-white/10">400 images</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Subscriptions are non-refundable once a billing cycle has commenced. Unused credits at the end of a billing cycle are forfeited and do not roll over.</p>
          </section>

          <section>
            <h2 className="font-heading text-[22px] text-nakshi-text-on-dark/90 mb-4 font-normal">5. Referral Program</h2>
            <p>
              Nakshi AI operates a referral program that allows existing subscribers to refer new customers in exchange for monetary rewards.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Referrer:</strong> ₹250 per qualified referral, capped at ₹2,500 per month.</li>
              <li><strong>Referee:</strong> ₹250 discount applied to their first paid month.</li>
            </ul>
            <p className="mt-4 italic">Rewards are issued via UPI transfer to the UPI ID you provide.</p>
          </section>

          <section>
            <h2 className="font-heading text-[22px] text-nakshi-text-on-dark/90 mb-4 font-normal">6. Intellectual Property</h2>
            <p>
              You retain full ownership of the jewelry photographs you upload ("Input Images"). Subject to payment of applicable fees, you own the AI-generated output images ("Output Images") delivered to you.
            </p>
          </section>

          <section className="pt-8 border-t border-white/10">
            <h2 className="font-heading text-[22px] text-nakshi-text-on-dark/90 mb-4 font-normal">Contact & Notices</h2>
            <div className="space-y-1 text-nakshi-text-on-dark/50">
              <p className="font-medium text-nakshi-text-on-dark/70">{legalEntity}</p>
              <p>{address}</p>
              <p>Email: {contactEmail}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;