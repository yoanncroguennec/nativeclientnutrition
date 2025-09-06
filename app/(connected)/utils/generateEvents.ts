import { startOfMonth, endOfMonth } from 'date-fns'

type Crop = {
  name: string
  varieties: string[]
  sowing: number[]
  harvest: number[]
  type: 'vegetable' | 'fruit'
}

type Event = {
  title: string
  start: Date
  end: Date
  color: string
}

export function generateEventsFromVegetables(
  crops: Crop[],
  periodFilter: 'all' | 'sowing' | 'harvest' = 'all',
  monthFilter: 'all' | number = 'all',
): Event[] {
  const currentYear = new Date().getFullYear()
  const events: Event[] = []

  crops.forEach(crop => {
    const color = crop.type === 'vegetable' ? '#4caf50' : '#ff9800'

    if (periodFilter === 'all' || periodFilter === 'sowing') {
      crop.sowing.forEach(month => {
        if (monthFilter === 'all' || month === monthFilter) {
          const start = startOfMonth(new Date(currentYear, month - 1))
          const end = endOfMonth(start)
          events.push({
            title: `Semis ${crop.name}`,
            start,
            end,
            color,
          })
        }
      })
    }

    if (periodFilter === 'all' || periodFilter === 'harvest') {
      crop.harvest.forEach(month => {
        if (monthFilter === 'all' || month === monthFilter) {
          const start = startOfMonth(new Date(currentYear, month - 1))
          const end = endOfMonth(start)
          events.push({
            title: `Récolte ${crop.name}`,
            start,
            end,
            color,
          })
        }
      })
    }
  })

  return events
}
