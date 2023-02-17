import { groupBy, maxBy } from 'lodash'
import { Influencer } from '../../../types'

const getMultiplier = (prefix?: string) => {
  if (!prefix) return 1

  const multiplier: Record<string, number> = {
    k: 1_000,
    m: 1_000_000,
  }

  return multiplier[prefix] || 1
}

const parseNum = (value: string) => parseFloat(value) * getMultiplier(value.match(/k|m/i)?.[0])

const getTopPer = (group: keyof Influencer, category: keyof Influencer) => (influencers: Influencer[]) => {
  const grouped = groupBy(influencers, group)

  return Object.keys(grouped).map(cat => ({
    category: cat,
    influencer: maxBy(grouped[cat], influencer => parseNum(influencer[category]))
  }))
}

export const getTopPerCategory = getTopPer('category_1', 'Followers')
export const getTopPerCountry = getTopPer('Audience country(mostly)', 'Engagement avg')
