import React, { useEffect } from "react";
import FooterHome from "../components/Footer";
import { useNavbar } from "../context/useNavbar";

export default function PrivacyPolicy() {
  const { setNavbar, resetNavbar } = useNavbar();

  useEffect(() => {
    setNavbar({ variant: "transparent" });
    window.scrollTo(0, 0);
    return () => resetNavbar();
  }, [setNavbar, resetNavbar]);

  return (
    <main className={`max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8 py-16 text-zinc-900`}>
      <header className="mb-10">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Effective date: {new Date().getFullYear()}
        </p>
        <p className="mt-4 text-base text-zinc-700">
          This Privacy Policy explains how Sagido (“we”, “us”) collects, uses, and
          protects your personal data when you use our website and services.
          Sagido is operated by <strong>Marios Belesis</strong>.
        </p>
      </header>

      <section className="space-y-8">
        <Section title="1. What data we collect">
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>
              <strong>Account data:</strong> name, email, password (stored securely),
              and account settings.
            </li>
            <li>
              <strong>Order data:</strong> items purchased, delivery address, billing
              address, and order history.
            </li>
            <li>
              <strong>Payment data:</strong> handled by payment providers; we do not
              store full card details.
            </li>
            <li>
              <strong>Support messages:</strong> what you send us (e.g. contact forms).
            </li>
            <li>
              <strong>Usage data:</strong> device, browser, IP address, pages viewed,
              and interactions (for performance and security).
            </li>
            <li>
              <strong>Cookies:</strong> small files used for essential site features,
              analytics, and preferences (see Cookies below).
            </li>
          </ul>
        </Section>

        <Section title="2. How we use your data">
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>To provide the website and create/manage your account.</li>
            <li>To process orders, deliveries, returns, and customer support.</li>
            <li>To prevent fraud, secure the site, and enforce our terms.</li>
            <li>To improve our products and user experience (analytics).</li>
            <li>
              To send service emails (order confirmations, password resets). Marketing
              emails are optional where applicable.
            </li>
          </ul>
        </Section>

        <Section title="3. Legal basis (EU/EEA & UK users)">
          <p className="text-zinc-700">
            Where applicable, we process personal data based on:
            <strong> contract</strong> (to deliver your order), <strong>legitimate interests</strong>{" "}
            (security and improving our services), <strong>consent</strong> (some cookies/marketing),
            and <strong>legal obligations</strong> (tax/accounting).
          </p>
        </Section>

        <Section title="4. Cookies">
          <p className="text-zinc-700">
            We use cookies for essential website functionality (e.g. login, cart),
            performance/analytics, and preferences. You can control cookies through
            your browser settings and, where available, our cookie banner/preferences.
          </p>
        </Section>

        <Section title="5. Sharing your data">
          <p className="text-zinc-700 mb-3">
            We only share your data when necessary to run the service, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>
              <strong>Payment providers</strong> (to process payments)
            </li>
            <li>
              <strong>Delivery/courier services</strong> (to ship orders)
            </li>
            <li>
              <strong>Hosting and infrastructure</strong> (website operation)
            </li>
            <li>
              <strong>Analytics</strong> (to understand site usage)
            </li>
          </ul>
          <p className="text-zinc-700 mt-3">
            We do not sell your personal data.
          </p>
        </Section>

        <Section title="6. Data retention">
          <p className="text-zinc-700">
            We keep your data only as long as needed for the purposes above, including
            legal/accounting requirements. You can request deletion of your account
            where legally possible.
          </p>
        </Section>

        <Section title="7. Your rights">
          <p className="text-zinc-700 mb-3">
            Depending on your location, you may have rights to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion</li>
            <li>Object to or restrict processing</li>
            <li>Request portability (where applicable)</li>
            <li>Withdraw consent (where processing is based on consent)</li>
          </ul>
        </Section>

        <Section title="8. Security">
          <p className="text-zinc-700">
            We use reasonable technical and organizational measures to protect your
            data. No method of transmission or storage is 100% secure, but we work to
            protect your information against unauthorized access.
          </p>
        </Section>

        <Section title="9. International transfers">
          <p className="text-zinc-700">
            If we use service providers outside your country, we take steps to ensure
            appropriate safeguards are in place as required by applicable law.
          </p>
        </Section>

        <Section title="10. Contact">
          <p className="text-zinc-700">
            For privacy requests or questions, contact us at:{" "}
            <strong>sagido@contact.com</strong>
          </p>
        </Section>

        <Section title="11. Changes to this policy">
          <p className="text-zinc-700">
            We may update this policy from time to time. If changes are significant,
            we’ll post an updated version on this page.
          </p>
        </Section>
      </section>
      <FooterHome />
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-6">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      {children}
    </section>
  );
}
