const PrivacyPage = () => {
  const effectiveDate = "March 13, 2026";
  const legalEntity = "Nakshi AI (Proprietorship)";
  const address = "Jaipur, Rajasthan, India";
  const contactEmail = "legal@nakshiai.in";

  return (
    <div className="min-h-screen" style={{ background: 'hsl(var(--nakshi-darkest))' }}>
      <div className="max-w-[800px] mx-auto px-5 py-16 md:py-24">
        <a href="/" className="font-heading text-[16px] font-semibold tracking-[0.12em] text-nakshi-text-on-dark/80 hover:text-primary transition-colors mb-12 inline-block">
          ← BACK TO HOME
        </a>
        
        <h1 className="font-heading text-[36px] md:text-[56px] font-light text-nakshi-text-on-dark mb-4">Privacy Policy</h1>
        <p className="font-body text-[13px] text-nakshi-text-on-dark/40 mb-12 uppercase tracking-widest">
          Effective Date: {effectiveDate} · Last Updated: {effectiveDate}
        </p>

        <div className="font-body text-[14px] md:text-[15px] text-nakshi-text-on-dark/60 leading-[1.8] space-y-10 legal-content">
          <section>
            <h2 className="font-heading text-[22px] text-nakshi-text-on-dark/90 mb-4 font-normal">1. Introduction</h2>
            <p>
              {legalEntity} operating under the trade name <strong className="text-nakshi-text-on-dark/80">Nakshi AI</strong>, is committed to protecting the privacy of our users in accordance with the <strong>Information Technology Act, 2000</strong> and the <strong>Digital Personal Data Protection Act, 2023</strong>.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[22px] text-nakshi-text-on-dark/90 mb-4 font-normal">2. Data We Collect</h2>
            <p>We collect information you provide directly, including your name, WhatsApp number, and UPI ID for referral payouts. We also collect the jewelry photographs you provide for AI transformation.</p>
          </section>

          <section>
            <h2 className="font-heading text-[22px] text-nakshi-text-on-dark/90 mb-4 font-normal">3. Jewelry Photos — Special Notice</h2>
            <div className="p-5 bg-white/5 border-l-2 border-primary my-6 italic">
              "Input Images are deleted immediately after the output is delivered to you. We do not retain copies of your original photos on our servers beyond the time required for processing."
            </div>
            <p>Your jewelry photographs are transmitted to a third-party AI processing service solely for generating your output image and are never used for AI model training.</p>
          </section>

          <section>
            <h2 className="font-heading text-[22px] text-nakshi-text-on-dark/90 mb-4 font-normal">4. Data Sharing</h2>
            <p>We do not sell or rent your personal data. We share only necessary information with trusted processors like Razorpay (payments), our AI API provider (processing), and WhatsApp BSPs (delivery).</p>
          </section>

          <section>
            <h2 className="font-heading text-[22px] text-nakshi-text-on-dark/90 mb-4 font-normal">5. Your Rights</h2>
            <p>Under the DPDPA 2023, you have the right to access, correction, erasure, and grievance redressal. You may request deletion of your data at any time by contacting us.</p>
          </section>

          <section className="pt-8 border-t border-white/10">
            <h2 className="font-heading text-[22px] text-nakshi-text-on-dark/90 mb-4 font-normal">Grievance Officer</h2>
            <div className="space-y-1 text-nakshi-text-on-dark/50">
              <p className="font-medium text-nakshi-text-on-dark/70">Legal Officer</p>
              <p>{legalEntity}</p>
              <p>Email: {contactEmail}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;