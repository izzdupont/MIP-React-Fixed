// src/content/posts.js
export const posts = [
  {
    slug: 'aligning-it-and-business',
    title: 'Aligning IT and Business Strategies: Common Mistakes and Fixes',
    date: '2025-08-01',
    author: 'Midwest IT Provider',
    tags: ['Strategy', 'SMB', 'IT Leadership'],
    excerpt:
      'Four pitfalls we see in SMBs—and practical steps to get your tech and goals in sync.',
    // Use simple HTML for content (no extra deps). You can also split into sections if you prefer.
    content: `
      <p>When IT strategy drifts from business goals, costs rise and risk follows. Here are four common pitfalls and how to fix them:</p>
      <h3>1) No clear ownership</h3>
      <p>Assign a single accountable owner for your roadmap and budget. Tie KPIs to business outcomes.</p>
      <h3>2) Tool sprawl</h3>
      <p>Consolidate vendors, standardize stacks, and document runbooks to cut noise and cost.</p>
      <h3>3) Security as an afterthought</h3>
      <p>Bake in patching, MFA, backup, and phishing training as non-negotiables—not add-ons.</p>
      <h3>4) No review cadence</h3>
      <p>Run quarterly IT strategy reviews with leadership to keep course corrections small and cheap.</p>
      <p>Want a right-sized plan for your team? <a href="#contact">Get in touch</a>.</p>
    `,
    coverImage: '/images/blog/align-it-business.png' // put this in public/images/blog/
  },
  {
    slug: 'smb-cyber-basics',
    title: 'SMB Cybersecurity Basics That Actually Move the Needle',
    date: '2025-07-15',
    author: 'Midwest IT Provider',
    tags: ['Security', 'SMB'],
    excerpt:
      'A short, actionable list of controls that reduce the most common risks for small teams.',
    content: `
      <ul>
        <li>Intercept X or equivalent endpoint protection on every device.</li>
        <li>MFA everywhere—email, VPN, admin panels.</li>
        <li>Patch OS/apps monthly (servers weekly if feasible).</li>
        <li>Backups: 3-2-1 rule, with immutable or offsite copies.</li>
        <li>Quarterly phishing simulations + micro-trainings.</li>
      </ul>
      <p>We can implement these within typical SMB budgets—ask us how.</p>
    `,
    coverImage: '/images/blog/cyber-basics.png'
  }
];
