import { useState } from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import { Scanner } from './components/Scanner'
import { recognizeFoodFromImage } from './services/imageRecognition'
import { getNutritionFacts } from './services/nutritionApi'

export default function SCreen() {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleImage = async (uri: string) => {
    setLoading(true)
    const food = await recognizeFoodFromImage(uri)
    const nutrition = await getNutritionFacts(food)
    setResult({ food, ...nutrition })
    setLoading(false)
  }

  return (
    <View style={{ flex: 1 }}>
      <Scanner onImageCaptured={handleImage} />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ad?
        Optio excepturi veniam corporis aliquid aut suscipit repellendus porro,
        vero nulla aliquam laboriosam dolore asperiores ut corrupti esse facilis
        quae molestias pariatur similique reiciendis illum blanditiis! Velit
        cumque animi corrupti est dolor aspernatur quae neque minima doloremque
        nihil? Rerum consectetur dolorum quod provident obcaecati accusantium,
        alias esse doloremque eius reprehenderit quam hic, fuga ut voluptatem
        vitae commodi voluptatum accusamus. Repudiandae consequuntur dolorem
        iusto possimus. Aliquid iste vitae itaque commodi, vel hic accusantium,
        cumque beatae, explicabo ipsa modi blanditiis! Libero impedit odit
        ducimus, ipsam nam ut labore harum voluptates sint illum minus
        dignissimos, cumque consectetur alias adipisci deleniti esse. Labore
        asperiores est, vitae ea corporis dolores maxime iste nesciunt,
        obcaecati reiciendis repudiandae magni illo iusto atque optio, autem
        corrupti beatae esse ab aliquam ipsa doloremque perspiciatis quis
        incidunt. Repudiandae, cupiditate asperiores! Nesciunt aliquid
        repellendus voluptatum? Alias, recusandae nihil? Quos, ipsum aspernatur.
      </Text>
    </View>
  )
}

// export const ScanScreen = () => {

//   return (
//     <View style={{ backgroundColor: "red", flex: 1 }}>
//       {/* <Scanner onImageCaptured={handleImage} />
//       {loading && <ActivityIndicator size="large" />}
//       {result && (
//         <View>
//           <Text>Aliment : {result.food}</Text>
//           <Text>Calories : {result.calories}</Text>
//           <Text>Glucides : {result.carbs}g</Text>
//           <Text>Protéines : {result.protein}g</Text>
//           <Text>Graisses : {result.fat}g</Text>
//         </View>
//       )} */}
//     </View>
//   );
// };
