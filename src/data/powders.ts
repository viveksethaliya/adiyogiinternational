export type GalleryItem = { type: 'image' | 'video'; src: string };

export type PowderProduct = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  media: GalleryItem[];
};

const dir = '/products/powders';

const image = (file: string): GalleryItem => ({ type: 'image', src: `${dir}/${file}` });
const video = (file: string): GalleryItem => ({ type: 'video', src: `${dir}/${file}` });

const powder = (slug: string, name: string, media: GalleryItem[]): PowderProduct => ({
  slug,
  name,
  tagline: 'Bulk & Export Supply',
  description: `${name} is available for bulk and export orders. Share your required specification, pack size and destination port, and we will send a sample and quotation.`,
  tags: ['Bulk & Export Packs', 'Samples on Request'],
  media,
});

export const powderProducts: PowderProduct[] = [
  powder('garlic-powder', 'Garlic Powder', [video('garlic-powder.mp4'), image('garlic-powder-1.jpg')]),
  powder('white-onion-powder', 'White Onion Powder', [image('white-onion-powder-1.jpg')]),
  powder('pink-onion-powder', 'Pink Onion Powder', [image('pink-onion-powder-1.jpg')]),
  powder('beetroot-powder', 'Beetroot Powder', [image('beetroot-powder-1.jpg')]),
  powder('ginger-powder', 'Ginger Powder', [image('ginger-powder-1.jpg')]),
];

export const coverImage = (product: PowderProduct) =>
  product.media.find((item) => item.type === 'image')?.src;
