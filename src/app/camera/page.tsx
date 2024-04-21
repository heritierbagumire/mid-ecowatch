import React from 'react'
import SideNavbar from '@/components/SideNavbar'
import { Button } from "@/components/ui/button"
import styles from "./came.module.css"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import Navbar from '@/components/navbar'
const CameraPage = () => {
  return (
    <section className="flex p-8">
    <SideNavbar />

    <div className='container'>
      <Navbar title='Camera' />
          <div>
             <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-10 w-10 text-muted-foreground"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="11" r="1" />
          <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0" />
          <path d="M17 18.5a9 9 0 1 0-10 0" />
        </svg>

        <h3 className="mt-4 text-lg font-semibold">You want to Watch Live </h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          You have no vidoes now
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <button className="relative p-4 rounded-sm bg-primary dark:bg-muted  text-white">
              Add Live Video
            </button>
          </DialogTrigger>
          <DialogContent className="w-[53.88%] h-[84%] flex items-center justify-center">
              <iframe
                    title="Live Camera"
                    width="100%"
                    height="100%"
                className="flex justify-center items-center w-full h-[100%]"
                src="http://192.168.8.108:5000/video_feed"
              ></iframe>
              </DialogContent>
            </Dialog>
          </div>
          </div>
         
    
          </div>
      </div>
      </section>
  )
}

export default CameraPage;