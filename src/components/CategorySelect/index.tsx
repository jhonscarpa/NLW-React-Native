import React from 'react'
import { ScrollView } from 'react-native'
import { categories } from '../../utils/categories'
import { Category } from '../Category'
import { styles } from './styles'

type Props = {
  categorySelectd: string
  setCategory: (categoryId: string) => void
}

export function CategorySelect({ categorySelectd, setCategory }: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 40 }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelectd}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  )
}
