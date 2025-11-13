import { Link } from 'react-router-dom';

export default function Sidebar({ links }) {
  return (
    <aside className="w-60 bg-gray-100 h-screen p-4 space-y-2">
      {links.map((link, index) => (
        <Link 
          key={index} 
          to={link.path} 
          className="block p-2 rounded hover:bg-blue-200"
        >
          {link.name}
        </Link>
      ))}
    </aside>
  );
}
