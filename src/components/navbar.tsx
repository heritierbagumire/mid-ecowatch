import React from 'react'
import PageTitle from './PageTitle'
import { Search } from './ui/search'
import { ThemeToggle } from './theme-toggle'
import { UserNav } from './ui/user-nav'

const Navbar = () => {
  return (
      <div className=''>
          <div className="flex sticky top-100 items-center justify-between">
      <div className="flex items-center justify-center">
        <PageTitle className="text-xs md:text-sm lg:text-lg" title="Dashboard" />
      </div>
      <div className="flex items-center justify-center">
        <Search />
      </div>
      <div className="flex items-center space-x-3 justify-center">
        <ThemeToggle />
        <UserNav />
      </div>
          </div>
    </div>
  )
}

export default Navbar;