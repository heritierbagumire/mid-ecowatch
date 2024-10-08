"use client"
import React,{useEffect, useState} from 'react'
import Header from '../../Header'
import NavBar from '../../NavBar'

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
import { useRouter } from 'next/navigation'
import Loading from '@/components/Loading.logo.component'


function SettingsPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setIsAuthenticated(true);
    } else {
      router.push('/login');
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return <Loading /> // You can show a loading spinner or any other UI component here
  }

  if (!isAuthenticated) {
    return null; // Return nothing if the user is not authenticated to avoid the dashboard flash
  }
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