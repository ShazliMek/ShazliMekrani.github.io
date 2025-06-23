// Check if tech icons are showing now

First step is to make sure the path for your imports is correct. I've adjusted it to use relative paths which should work.

Now, let's add the devicon library to your project. You have a few options:

## Option 1: Add devicon via CDN in your layout.tsx file

Open your layout.tsx file and add the devicon CDN link in the head section:

```tsx
// In your layout.tsx file, add this to the head
<head>
  {/* Your existing head content */}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
</head>
```

## Option 2: Install and import devicon in your project

You can install devicon as a package:

```bash
npm install devicon
```

Then import it in your layout.tsx or globals.css:

```tsx
// In your globals.css or directly in the component
import 'devicon/devicon.min.css';
```

## Option 3: Use actual icon components or images

If you want to use actual icons instead of classes, you can:

1. Use SVGs directly for each icon
2. Use a library like react-icons which has many icon sets built-in

## Debugging Tips

If you still don't see the icons after implementing one of the above solutions:

1. Check the browser's console for any errors
2. Verify the class names match exactly what's expected by devicon
3. Try using a different approach like SVGs or icon components if devicon isn't working

## Example with react-icons

If you want to switch to react-icons (which you already have installed):

```tsx
import { FaJs, FaReact, FaNodeJs, FaGit, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiRedux, SiTailwindcss, SiFigma, SiFirebase, SiGraphql } from 'react-icons/si';

// Then update your technologies array
const iconMap = {
  "JavaScript": <FaJs className="w-8 h-8 text-yellow-400" />,
  "TypeScript": <SiTypescript className="w-8 h-8 text-blue-500" />,
  "React": <FaReact className="w-8 h-8 text-blue-400" />,
  "Next.js": <SiNextdotjs className="w-8 h-8" />,
  // ... etc for all your technologies
};

// And in your rendering:
<div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-3 bg-white dark:bg-gray-800 rounded-full shadow-md p-4 hover-glow">
  {iconMap[tech.name] || <span className="text-2xl text-primary-500 font-bold">{tech.name.charAt(0)}</span>}
</div>
