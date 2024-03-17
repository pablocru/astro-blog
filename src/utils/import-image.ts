export function importImage(name: string) {
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/images/*.{jpeg,jpg,png,webp,avif,gif}"
  );
  const image = images["/src/images/" + name];
  if (!image) throw new Error(`Image ${name} doesn't exists`);
  return image();
}