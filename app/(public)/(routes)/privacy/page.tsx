"use client";

const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-8 text-left max-w-3xl mx-auto">
      <div className="flex mb-6 flex-row items-center justify-center space-x-4">
        <h1 className="text-3xl font-bold">Privacy Policy for ConnectInk</h1>
      </div>

      <p className="text-sm text-gray-500">Last updated: April 22, 2025</p>

      <p>
        Welcome to <strong>ConnectInk</strong>, a journaling and note-taking
        platform powered by AI. Your privacy is important to us. This Privacy
        Policy explains how we collect, use, and protect your data when you use
        the ConnectInk website.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>Journal Entries and Notes:</strong> The content you create and
          save on ConnectInk.
        </li>
        <li>
          <strong>Usage Data:</strong> Basic information such as browser type,
          operating system, and timestamps to help us improve the site. This is
          collected anonymously.
        </li>
        <li>
          <strong>AI Interactions:</strong> Text you submit to our AI features
          for assistance, summarization, or suggestions.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        2. How We Use Your Information
      </h2>
      <p>Your data is used to:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Provide and improve the core features of ConnectInk.</li>
        <li>
          Enable AI-based features (e.g., summarization, writing suggestions).
        </li>
        <li>
          Understand general usage patterns to enhance performance and
          usability.
        </li>
      </ul>
      <p>
        We <strong>do not</strong> use your data for advertising or marketing
        purposes.
      </p>

      <h2 className="text-xl font-semibold mt-6">3. Data Sharing</h2>
      <p>
        We do <strong>not</strong> share, sell, or trade your personal or
        journal data with any third parties. Any data processed by third-party
        services (like AI APIs) is sent securely and only as needed to provide
        functionality.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        4. Data Storage and Security
      </h2>
      <p>
        While ConnectInk uses reasonable measures to protect your information,
        please use ConnectInk at your own discretion, especially for private or
        sensitive topics.
      </p>

      <h2 className="text-xl font-semibold mt-6">5. Cookies and Tracking</h2>
      <p>
        ConnectInk may use basic cookies for session management or remembering
        preferences. We do <strong>not</strong> use tracking cookies for
        advertising or analytics at this time.
      </p>

      <h2 className="text-xl font-semibold mt-6">6. Your Rights and Choices</h2>
      <p>You have control over your data:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>You can delete your notes or journal entries at any time.</li>
        <li>
          If you have any questions or would like your data deleted entirely,
          feel free to contact us.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">7. Contact Us</h2>
      <p>
        For any questions or concerns about this policy or your data, please
        contact:
      </p>
      <p className="font-medium">📧 joseph.r.martinez@gmail.com</p>
    </div>
  );
};

export default PrivacyPolicyPage;
