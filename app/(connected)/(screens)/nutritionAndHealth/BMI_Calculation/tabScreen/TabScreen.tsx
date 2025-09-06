import React, { useState } from 'react'
import { View, Text } from 'react-native'
import TabBtns, { TabBtnType } from './TabBtns'
import Tab_1_Screen from './contents/tab_1/Tab_1'
import { IMCRecord } from '..'
import Tab_2_Screen from './contents/tab_2/Tab_2'

export enum CustomTab {
  Tab1,
  Tab2,
}

interface Props {
  historique: IMCRecord[]
  formatDateForLabel: (date: string) => string
}

export default function TabScreen({ historique, formatDateForLabel }: Props) {
  const [selectedTab, setSelectedTab] = useState<CustomTab>(CustomTab.Tab2)

  const btns: TabBtnType[] = [
    { title: "Évolution de l'IMC" },
    { title: 'Évolution du poids' },
  ]

  return (
    <View>
      <TabBtns
        btns={btns}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <View style={{ alignItems: 'center', flex: 1, marginTop: 20 }}>
        {selectedTab === CustomTab.Tab1 ? (
          <Tab_1_Screen
            historique={historique}
            formatDateForLabel={formatDateForLabel}
          />
        ) : (
          <Tab_2_Screen
            historique={historique}
            formatDateForLabel={formatDateForLabel}
          />
        )}
      </View>
    </View>
  )
}
