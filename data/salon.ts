export interface SalonImage {
  id: string
  title: string
  category: 'people' | 'interior'
  image: string
}

export const salonImages: SalonImage[] = [
  {
    id: '1',
    title: 'Alexandros with client',
    category: 'people',
    image: 'https://via.placeholder.com/800/7000?text=People+1',
  },
  {
    id: '2',
    title: 'Salon event',
    category: 'people',
    image: 'https://via.placeholder.com/800/7100?text=People+2',
  },
  {
    id: '3',
    title: 'Client consultation',
    category: 'people',
    image: 'https://via.placeholder.com/800/7200?text=People+3',
  },
  {
    id: '4',
    title: 'Salon interior 1',
    category: 'interior',
    image: 'https://via.placeholder.com/800/7300?text=Interior+1',
  },
  {
    id: '5',
    title: 'Salon interior 2',
    category: 'interior',
    image: 'https://via.placeholder.com/800/7400?text=Interior+2',
  },
  {
    id: '6',
    title: 'Salon interior 3',
    category: 'interior',
    image: 'https://via.placeholder.com/800/7500?text=Interior+3',
  },
  {
    id: '7',
    title: 'Team at work',
    category: 'people',
    image: 'https://via.placeholder.com/800/7600?text=People+4',
  },
  {
    id: '8',
    title: 'Salon interior 4',
    category: 'interior',
    image: 'https://via.placeholder.com/800/7700?text=Interior+4',
  },
]

