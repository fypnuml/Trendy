import fs from 'fs';
import path from 'path';

export function getImagesFromDir(category: string) {
  const dirPath = path.join(process.cwd(), 'public', 'assets', category);
  
  try {
    if (!fs.existsSync(dirPath)) {
      return [];
    }

    const files = fs.readdirSync(dirPath);
    // Filter for common image extensions
    return files
      .filter(file => /\.(jpe?g|png|gif|webp|avif)$/i.test(file))
      .map(file => `/assets/${category}/${file}`);
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
    return [];
  }
}

export function getProjectsFromDir() {
  const dirPath = path.join(process.cwd(), 'public', 'assets', 'projects');
  
  try {
    if (!fs.existsSync(dirPath)) {
      return [];
    }

    const files = fs.readdirSync(dirPath);
    return files
      .filter(file => /\.(jpe?g|png|gif|webp|avif)$/i.test(file))
      .map(file => {
        const nameWithoutExt = path.parse(file).name;
        // Convert "Aluminium SkyLight" to "Aluminium SkyLight" (simple)
        // Or "Aluminium-SkyLight" to "Aluminium SkyLight"
        const title = nameWithoutExt.replace(/[-_]/g, ' ');
        const slug = nameWithoutExt.toLowerCase().trim().replace(/[\s\W_]+/g, '-');
        
        // Categorize based on keywords
        let category: "Interior" | "Exterior" | "Aluminum" = "Aluminum";
        const lowerName = nameWithoutExt.toLowerCase();
        
        if (lowerName.includes("villa") || lowerName.includes("facade") || lowerName.includes("gate") || lowerName.includes("exterior")) {
          category = "Exterior";
        } else if (lowerName.includes("kitchen") || lowerName.includes("railing") || lowerName.includes("interior") || lowerName.includes("office") || lowerName.includes("stair")) {
          category = "Interior";
        }

        return {
          id: slug,
          title,
          slug,
          images: [`/assets/projects/${file}`],
          category,
          description: `A showcase of our premium aluminum solutions in ${title}.`,
          client: "Valued Partner",
          year: new Date().getFullYear().toString(),
          isFeatured: true,
          order: 0
        };
      });
  } catch (error) {
    console.error(`Error reading projects directory:`, error);
    return [];
  }
}
