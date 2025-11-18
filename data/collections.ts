export interface Collection {
  id: string
  name: string
  year?: string
  images: string[]
}

export const collections: Collection[] = [
  {
    id: '1',
    name: '16/17 Restart',
    year: '2016-2017',
    images: [
      'https://via.placeholder.com/1000/2000?text=Collection+1+Image+1',
      'https://via.placeholder.com/1000/2100?text=Collection+1+Image+2',
      'https://via.placeholder.com/1000/2200?text=Collection+1+Image+3',
      'https://via.placeholder.com/1000/2300?text=Collection+1+Image+4',
      'https://via.placeholder.com/1000/2400?text=Collection+1+Image+5',
      'https://via.placeholder.com/1000/2500?text=Collection+1+Image+6',
    ],
  },
  {
    id: '2',
    name: 'SS16 Palette',
    year: '2016',
    images: [
      'https://via.placeholder.com/1000/3000?text=Collection+2+Image+1',
      'https://via.placeholder.com/1000/3100?text=Collection+2+Image+2',
      'https://via.placeholder.com/1000/3200?text=Collection+2+Image+3',
      'https://via.placeholder.com/1000/3300?text=Collection+2+Image+4',
      'https://via.placeholder.com/1000/3400?text=Collection+2+Image+5',
    ],
  },
  {
    id: '3',
    name: 'AW17 Collection',
    year: '2017',
    images: [
      'https://via.placeholder.com/1000/4000?text=Collection+3+Image+1',
      'https://via.placeholder.com/1000/4100?text=Collection+3+Image+2',
      'https://via.placeholder.com/1000/4200?text=Collection+3+Image+3',
      'https://via.placeholder.com/1000/4300?text=Collection+3+Image+4',
      'https://via.placeholder.com/1000/4400?text=Collection+3+Image+5',
      'https://via.placeholder.com/1000/4500?text=Collection+3+Image+6',
      'https://via.placeholder.com/1000/4600?text=Collection+3+Image+7',
    ],
  },
  {
    id: '4',
    name: 'SS18 Vision',
    year: '2018',
    images: [
      'https://via.placeholder.com/1000/5000?text=Collection+4+Image+1',
      'https://via.placeholder.com/1000/5100?text=Collection+4+Image+2',
      'https://via.placeholder.com/1000/5200?text=Collection+4+Image+3',
      'https://via.placeholder.com/1000/5300?text=Collection+4+Image+4',
    ],
  },
]

