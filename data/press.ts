export interface PressItem {
  id: string
  magazine: string
  issue?: string
  year?: string
  image: string
  url?: string
}

export const pressItems: PressItem[] = [
  {
    id: '1',
    magazine: 'Vogue Greece',
    issue: 'March 2023',
    year: '2023',
    image: 'https://via.placeholder.com/600/6000?text=Vogue+Greece',
  },
  {
    id: '2',
    magazine: 'Elle Greece',
    issue: 'Summer 2023',
    year: '2023',
    image: 'https://via.placeholder.com/600/6100?text=Elle+Greece',
  },
  {
    id: '3',
    magazine: 'Harper\'s Bazaar',
    issue: 'Fall 2022',
    year: '2022',
    image: 'https://via.placeholder.com/600/6200?text=Harpers+Bazaar',
  },
  {
    id: '4',
    magazine: 'Marie Claire',
    issue: 'December 2022',
    year: '2022',
    image: 'https://via.placeholder.com/600/6300?text=Marie+Claire',
  },
  {
    id: '5',
    magazine: 'Grazia',
    issue: 'October 2023',
    year: '2023',
    image: 'https://via.placeholder.com/600/6400?text=Grazia',
  },
  {
    id: '6',
    magazine: 'Vogue Greece',
    issue: 'January 2023',
    year: '2023',
    image: 'https://via.placeholder.com/600/6500?text=Vogue+Greece+2',
  },
]

