// src/services/imageRecognition.ts
export const recognizeFoodFromImage = async (
  imageUri: string,
): Promise<string> => {
  const apiKey = 'YOUR_CLARIFAI_API_KEY'
  const base64Image = await FileSystem.readAsStringAsync(imageUri, {
    encoding: 'base64',
  })

  const response = await fetch(
    'https://api.clarifai.com/v2/models/food-item-recognition/outputs',
    {
      method: 'POST',
      headers: {
        Authorization: `Key ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: [
          {
            data: { image: { base64: base64Image } },
          },
        ],
      }),
    },
  )

  const data = await response.json()
  const concept = data.outputs[0].data.concepts[0]
  return concept.name // Exemple : "pizza", "banana", etc.
}
