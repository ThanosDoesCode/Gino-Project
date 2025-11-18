export interface HairArtItem {
  id: string
  title: string
  category: 'Editorial' | 'Runway' | 'Salon' | 'Everyday'
  image: string
}

export const hairArtItems: HairArtItem[] = [
  {
    id: '1',
    title: 'Editorial Look 1',
    category: 'Editorial',
    image: 'https://via.placeholder.com/800/1000?text=Editorial+1',
  },
  {
    id: '2',
    title: 'Editorial Look 2',
    category: 'Editorial',
    image: 'https://via.placeholder.com/800/1100?text=Editorial+2',
  },
  {
    id: '3',
    title: 'Runway Show 1',
    category: 'Runway',
    image: 'https://via.placeholder.com/800/1200?text=Runway+1',
  },
  {
    id: '4',
    title: 'Runway Show 2',
    category: 'Runway',
    image: 'https://via.placeholder.com/800/1300?text=Runway+2',
  },
  {
    id: '5',
    title: 'Salon Style 1',
    category: 'Salon',
    image: 'https://via.placeholder.com/800/1400?text=Salon+1',
  },
  {
    id: '6',
    title: 'Salon Style 2',
    category: 'Salon',
    image: 'https://via.placeholder.com/800/1500?text=Salon+2',
  },
  {
    id: '7',
    title: 'Everyday Elegance 1',
    category: 'Everyday',
    image: 'https://via.placeholder.com/800/1600?text=Everyday+1',
  },
  {
    id: '8',
    title: 'Everyday Elegance 2',
    category: 'Everyday',
    image: 'https://via.placeholder.com/800/1700?text=Everyday+2',
  },
  {
    id: '9',
    title: 'Editorial Look 3',
    category: 'Editorial',
    image: 'https://via.placeholder.com/800/1800?text=Editorial+3',
  },
  {
    id: '10',
    title: 'Runway Show 3',
    category: 'Runway',
    image: 'https://via.placeholder.com/800/1900?text=Runway+3',
  },
]

export const categories: HairArtItem['category'][] = ['Editorial', 'Runway', 'Salon', 'Everyday']

