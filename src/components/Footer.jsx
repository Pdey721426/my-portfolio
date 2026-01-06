export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center py-8 px-6 md:px-16">
      <p className="text-gray-400">&copy; 2026 Prakash</p>
      <ul className="flex space-x-4 mt-4 md:mt-0">
        <li><a href="https://linkedin.com/in/prakash" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/prakash" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="mailto:prakash@example.com">Email</a></li>
      </ul>
    </footer>
  );
}
