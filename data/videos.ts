export interface Video {
  id: string
  title: string
  description?: string
  youtubeId?: string
  isFeatured?: boolean
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'The Art of Hair Styling',
    description: 'Alexandros shares his philosophy and approach to creating beautiful hair',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Masterclass: Advanced Techniques',
    description: 'Learn advanced hair styling techniques',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder
  },
  {
    id: '3',
    title: 'Behind the Scenes: Editorial Shoot',
    description: 'A day in the life during an editorial photoshoot',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder
  },
  {
    id: '4',
    title: 'Client Transformation',
    description: 'Watch a complete hair transformation',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder
  },
]

