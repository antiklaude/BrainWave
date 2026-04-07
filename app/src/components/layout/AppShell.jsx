import { createContext, useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import TopNav from './TopNav'
import BottomTabBar from './BottomTabBar'

export const SearchContext = createContext('')

export function useSearch() {
  return useContext(SearchContext)
}

export default function AppShell({ children }) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [search, setSearch] = useState('')

  return (
    <SearchContext.Provider value={search}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <TopNav
          showBack={!isHome}
          onSearch={isHome ? setSearch : undefined}
        />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <BottomTabBar />
      </div>
    </SearchContext.Provider>
  )
}
