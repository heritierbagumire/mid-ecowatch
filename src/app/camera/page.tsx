"use client"
import React, { useEffect } from 'react'
import SideNavbar from '@/components/SideNavbar'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import Navbar from '@/components/navbar'
import { useRouter } from 'next/navigation'

const CameraPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, []);

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

              <h3 className="mt-4 text-lg font-semibold">You want to Watch Live</h3>
              <p className="mb-4 mt-2 text-sm text-muted-foreground">
                You have no videos now
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="relative p-4 rounded-sm bg-primary dark:bg-muted text-white">
                    Add Live Video
                  </button>
                </DialogTrigger>
                <DialogContent className="w-[38%] h-[70%] flex flex-col items-center justify-center">
                  <iframe
                    title="Live Camera"
                    className="flex justify-center items-center w-full h-[80%]"
                    src="http://192.168.0.3:5000/video_feed"
                  ></iframe>
                  <div className="w-full flex justify-between items-center mt-4">
                    <button className="p-2 bg-foreground/60 text-white rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-5.456-3.636A1 1 0 008 8.618v6.764a1 1 0 001.296.948l5.456-3.636a1 1 0 000-1.732z" />
                      </svg>
                    </button>
                    <button className="p-2 bg-foreground/60 text-white rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6" />
                      </svg>
                    </button>
                    <div className="text-sm text-muted-foreground">
                      00:00 / 00:00
                    </div>
                  </div>
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
 