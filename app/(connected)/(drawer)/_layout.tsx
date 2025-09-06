// app/drawer.tsx
import { Drawer } from 'expo-router/drawer'

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{ drawerLabel: 'Accueil', title: 'Accueil' }}
      />
      <Drawer.Screen
        name="settings"
        options={{ drawerLabel: 'Paramètres', title: 'Paramètres' }}
      />
    </Drawer>
  )
}
