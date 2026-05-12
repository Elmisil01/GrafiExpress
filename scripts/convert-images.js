import sharp from 'sharp';
import { join } from 'path';

const inputDir = 'public/images';
const images = [
  'ploteo',
  'vidrieras',
  'carteleria',
  'vinilos',
  'banners',
  'microperforados',
];

for (const name of images) {
  const input = join(inputDir, `${name}.png`);

  await sharp(input)
    .resize(411, 411, { fit: 'cover' })
    .webp({ quality: 82 })
    .toFile(join(inputDir, `${name}.webp`));

  await sharp(input)
    .resize(332, 332, { fit: 'cover' })
    .webp({ quality: 80 })
    .toFile(join(inputDir, `${name}-mobile.webp`));

  console.log(`✅ ${name}.png → ${name}.webp + ${name}-mobile.webp`);
}
