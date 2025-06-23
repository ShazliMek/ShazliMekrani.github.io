# Project Image Solutions

I notice you're having issues displaying project images in your portfolio. Here are a few solutions:

## Solution 1: Create Placeholder Images

You can create simple placeholder images for your projects using websites like:
- [Placeholder.com](https://placeholder.com/)
- [PlaceIMG](https://placeimg.com/)
- [DummyImage](https://dummyimage.com/)

For example, download images with these URLs:
- `https://via.placeholder.com/1200x675/0ea5e9/ffffff?text=Financial+Dashboard`
- `https://via.placeholder.com/1200x675/0ea5e9/ffffff?text=Health+%26+Fitness+App`
- `https://via.placeholder.com/1200x675/0ea5e9/ffffff?text=AI+Content+Generator`
- `https://via.placeholder.com/1200x675/0ea5e9/ffffff?text=Smart+Home+System`
- `https://via.placeholder.com/1200x675/0ea5e9/ffffff?text=Task+Management+System`

Save them in your public folder as `project2.jpg`, `project3.jpg`, etc.

## Solution 2: Use Real Project Screenshots

If you have actual screenshots of your projects, use those instead:
1. Take screenshots of your projects
2. Resize them to a consistent aspect ratio (16:9 is common for project showcases)
3. Save them in your public folder with the correct filenames

## Solution 3: Use Online Image URLs

If you have project images hosted online, you can use those URLs directly:

```jsx
// Example
{
  id: 2,
  title: "Financial Dashboard",
  // Use a fully qualified URL instead of a relative path
  image: "https://example.com/path/to/your/image.jpg",
  // ...
}
```

Just remember that Next.js needs to be configured to allow external image domains in your `next.config.ts` file:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example.com'],
  },
}

export default nextConfig;
```

## Current Fix in Your Code

I've added a fallback mechanism in your code that:
1. Attempts to display the image from your public folder
2. If the image fails to load, shows a placeholder with the project title

This should prevent your site from breaking, but for the best visual appearance, I recommend adding actual images to your public folder.
