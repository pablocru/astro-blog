import { promises as fs } from "fs";
import path from "path";

export async function getFontsPath() {
  try {
    const fontFolder = path.join(process.cwd(), "public", "fonts");
    const fontFiles = await getAllFontFiles(fontFolder);

    return fontFiles.map(filePath => path
      .relative(process.cwd(), filePath) // Get relative path
      .replace(/\\/g, "/") // Transform it to Unix-like
      .slice(7) // removes "/public" from the given path
    );
  } catch (error) {
    console.error("Unable to read fonts directory:", error);
    return [];
  }
}

async function getAllFontFiles(folderPath: string) {
  const fontFiles: string[] = [];

  async function exploreFolder(currentFolder: string) {
    const files = await fs.readdir(currentFolder);

    for (const file of files) {
      const filePath = path.join(currentFolder, file);
      const stats = await fs.stat(filePath);

      if (stats.isDirectory()) {
        // If is a directory, then iterate again
        await exploreFolder(filePath);
      } else {
        if (file.endsWith(".woff2")) fontFiles.push(filePath);
      }
    }
  }

  await exploreFolder(folderPath);
  return fontFiles;
}
