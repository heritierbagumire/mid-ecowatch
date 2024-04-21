"use client"
import React,{useState} from 'react'
import Header from '../Header'
import NavBar from '../NavBar'

import ManualUse from './ManualUse'
import Licence from './Licence'
import Structure from './Structure'
import TermsPrivacy from './TermsPrivacy'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Mode from './Mode'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleDown'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'


function SettingsPage() {
  return (
  <section className='container mx-auto overflow-hidden'>
      
    <Tabs defaultValue="licence" className="w-[400px]  p-2">
      <TabsList className="flex w-full items-center lg:ml-6 bg-transparent">
        <TabsTrigger value="licence">Licence</TabsTrigger>
        <TabsTrigger value="manuals">Manual Guide</TabsTrigger>
        <TabsTrigger value="privacy">Privacy and Policies</TabsTrigger>
        <TabsTrigger value="mode">Change Mode</TabsTrigger>        
      </TabsList>
      <TabsContent value="licence" className='w-screen' >
        <Licence />

      </TabsContent>
      <TabsContent value="manuals" className='w-screen'>
        <ManualUse />
      </TabsContent>
      <TabsContent value="privacy" className='w-screen'>
       <TermsPrivacy />
        </TabsContent>
        <TabsContent value="mode" className='w-screen'>

       <Mode />
      </TabsContent>
    </Tabs>
  </section>
  )
}

export default SettingsPage