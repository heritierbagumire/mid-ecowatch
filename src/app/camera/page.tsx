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
            <Button size="sm" className="relative">
              Add Live Video
            </Button>
          </DialogTrigger>
          <DialogContent>
                <div className="card">
  <div className="up">
    <svg className="svg-icon" viewBox="0 0 20 20">
							<path d="M16.198,10.896c-0.252,0-0.455,0.203-0.455,0.455v2.396c0,0.626-0.511,1.137-1.138,1.137H5.117c-0.627,0-1.138-0.511-1.138-1.137V7.852c0-0.626,0.511-1.137,1.138-1.137h5.315c0.252,0,0.456-0.203,0.456-0.455c0-0.251-0.204-0.455-0.456-0.455H5.117c-1.129,0-2.049,0.918-2.049,2.047v5.894c0,1.129,0.92,2.048,2.049,2.048h9.488c1.129,0,2.048-0.919,2.048-2.048v-2.396C16.653,11.099,16.45,10.896,16.198,10.896z"></path>
							<path d="M14.053,4.279c-0.207-0.135-0.492-0.079-0.63,0.133c-0.137,0.211-0.077,0.493,0.134,0.63l1.65,1.073c-4.115,0.62-5.705,4.891-5.774,5.082c-0.084,0.236,0.038,0.495,0.274,0.581c0.052,0.019,0.103,0.027,0.154,0.027c0.186,0,0.361-0.115,0.429-0.301c0.014-0.042,1.538-4.023,5.238-4.482l-1.172,1.799c-0.137,0.21-0.077,0.492,0.134,0.629c0.076,0.05,0.163,0.074,0.248,0.074c0.148,0,0.294-0.073,0.382-0.207l1.738-2.671c0.066-0.101,0.09-0.224,0.064-0.343c-0.025-0.118-0.096-0.221-0.197-0.287L14.053,4.279z"></path>
						</svg>
		<div className="right">
						 <svg className="svg-icon" viewBox="0 0 20 20">
							<path d="M10.032,8.367c-1.112,0-2.016,0.905-2.016,2.018c0,1.111,0.904,2.014,2.016,2.014c1.111,0,2.014-0.902,2.014-2.014C12.046,9.271,11.143,8.367,10.032,8.367z M10.032,11.336c-0.525,0-0.953-0.427-0.953-0.951c0-0.526,0.427-0.955,0.953-0.955c0.524,0,0.951,0.429,0.951,0.955C10.982,10.909,10.556,11.336,10.032,11.336z"></path>
							<path d="M17.279,8.257h-0.785c-0.107-0.322-0.237-0.635-0.391-0.938l0.555-0.556c0.208-0.208,0.208-0.544,0-0.751l-2.254-2.257c-0.199-0.2-0.552-0.2-0.752,0l-0.556,0.557c-0.304-0.153-0.617-0.284-0.939-0.392V3.135c0-0.294-0.236-0.532-0.531-0.532H8.435c-0.293,0-0.531,0.237-0.531,0.532v0.784C7.582,4.027,7.269,4.158,6.966,4.311L6.409,3.754c-0.1-0.1-0.234-0.155-0.376-0.155c-0.141,0-0.275,0.055-0.375,0.155L3.403,6.011c-0.208,0.207-0.208,0.543,0,0.751l0.556,0.556C3.804,7.622,3.673,7.935,3.567,8.257H2.782c-0.294,0-0.531,0.238-0.531,0.531v3.19c0,0.295,0.237,0.531,0.531,0.531h0.787c0.105,0.318,0.236,0.631,0.391,0.938l-0.556,0.559c-0.208,0.207-0.208,0.545,0,0.752l2.254,2.254c0.208,0.207,0.544,0.207,0.751,0l0.558-0.559c0.303,0.154,0.616,0.285,0.938,0.391v0.787c0,0.293,0.238,0.531,0.531,0.531h3.191c0.295,0,0.531-0.238,0.531-0.531v-0.787c0.322-0.105,0.636-0.236,0.938-0.391l0.56,0.559c0.208,0.205,0.546,0.207,0.752,0l2.252-2.254c0.208-0.207,0.208-0.545,0.002-0.752l-0.559-0.559c0.153-0.303,0.285-0.615,0.389-0.938h0.789c0.295,0,0.532-0.236,0.532-0.531v-3.19C17.812,8.495,17.574,8.257,17.279,8.257z M16.747,11.447h-0.653c-0.241,0-0.453,0.164-0.514,0.398c-0.129,0.496-0.329,0.977-0.594,1.426c-0.121,0.209-0.089,0.473,0.083,0.645l0.463,0.465l-1.502,1.504l-0.465-0.463c-0.174-0.174-0.438-0.207-0.646-0.082c-0.447,0.262-0.927,0.463-1.427,0.594c-0.234,0.061-0.397,0.271-0.397,0.514V17.1H8.967v-0.652c0-0.242-0.164-0.453-0.397-0.514c-0.5-0.131-0.98-0.332-1.428-0.594c-0.207-0.123-0.472-0.09-0.646,0.082l-0.463,0.463L4.53,14.381l0.461-0.463c0.169-0.172,0.204-0.434,0.083-0.643c-0.266-0.461-0.467-0.939-0.596-1.43c-0.06-0.234-0.272-0.398-0.514-0.398H3.313V9.319h0.652c0.241,0,0.454-0.162,0.514-0.397c0.131-0.498,0.33-0.979,0.595-1.43c0.122-0.208,0.088-0.473-0.083-0.645L4.53,6.386l1.503-1.504l0.46,0.462c0.173,0.172,0.437,0.204,0.646,0.083c0.45-0.265,0.931-0.464,1.433-0.597c0.233-0.062,0.396-0.274,0.396-0.514V3.667h2.128v0.649c0,0.24,0.161,0.452,0.396,0.514c0.502,0.133,0.982,0.333,1.433,0.597c0.211,0.12,0.475,0.089,0.646-0.083l0.459-0.462l1.504,1.504l-0.463,0.463c-0.17,0.171-0.202,0.438-0.081,0.646c0.263,0.448,0.463,0.928,0.594,1.427c0.061,0.235,0.272,0.397,0.514,0.397h0.651V11.447z"></path>
						</svg>
    	<svg className="svg-icon" viewBox="0 0 20 20">
							<path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
			</svg>
		</div>       
  </div>
	<div className="playbar">
		<div className="bar"></div>	
	</div>
	<div className="down">
		<div className="down__icons">
			<svg xmlns="http://www.w3.org/2000/svg" className="svg-icon pause" viewBox="0 0 16 16"> <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"></path> </svg>

			<svg className="svg-icon" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
			<path d="M24.7,29.4a4.6,4.6,0,0,0-4.4-.2A4.5,4.5,0,0,0,18.1,33V67a4.5,4.5,0,0,0,2.2,3.8,4.6,4.6,0,0,0,4.4-.2L47.9,55.1V67a4.3,4.3,0,0,0,2.2,3.8,4.6,4.6,0,0,0,4.4-.2L80,53.5a4.2,4.2,0,0,0,0-7L54.5,29.4a4.6,4.6,0,0,0-4.4-.2A4.3,4.3,0,0,0,47.9,33V44.9Z">
			</path>
			</svg>
			
			<svg className="svg-icon" viewBox="0 0 20 20">
								<path d="M9.344,2.593c-0.253-0.104-0.547-0.045-0.743,0.15L4.486,6.887H1.313c-0.377,0-0.681,0.305-0.681,0.681v4.916c0,0.377,0.304,0.681,0.681,0.681h3.154l4.137,4.142c0.13,0.132,0.304,0.201,0.482,0.201c0.088,0,0.176-0.017,0.261-0.052c0.254-0.105,0.42-0.354,0.42-0.629L9.765,3.224C9.765,2.947,9.599,2.699,9.344,2.593z M5.233,12.003c-0.128-0.127-0.302-0.2-0.483-0.2H1.994V8.249h2.774c0.182,0,0.355-0.072,0.483-0.201l3.151-3.173l0.001,10.305L5.233,12.003z"></path>
								<path d="M16.434,10.007c0-2.553-1.518-4.853-3.869-5.858C12.223,4,11.821,4.16,11.672,4.506c-0.148,0.346,0.013,0.746,0.359,0.894c1.846,0.793,3.041,2.6,3.041,4.608c0,1.997-1.188,3.799-3.025,4.592c-0.346,0.149-0.505,0.551-0.356,0.895c0.112,0.258,0.362,0.411,0.625,0.411c0.091,0,0.181-0.017,0.269-0.056C14.922,14.843,16.434,12.548,16.434,10.007z"></path>
								<path d="M13.418,10.005c0-1.349-0.802-2.559-2.042-3.086c-0.346-0.144-0.745,0.015-0.894,0.362c-0.146,0.346,0.016,0.745,0.362,0.893c0.737,0.312,1.212,1.031,1.212,1.832c0,0.792-0.471,1.509-1.2,1.825c-0.345,0.149-0.504,0.551-0.352,0.895c0.112,0.257,0.362,0.41,0.625,0.41c0.091,0,0.181-0.017,0.27-0.057C12.625,12.545,13.418,11.339,13.418,10.005z"></path>
								<path d="M13.724,1.453c-0.345-0.15-0.746,0.012-0.895,0.358c-0.148,0.346,0.013,0.745,0.358,0.894c2.928,1.256,4.819,4.122,4.819,7.303c0,3.171-1.886,6.031-4.802,7.289c-0.346,0.149-0.505,0.55-0.356,0.894c0.112,0.258,0.362,0.412,0.626,0.412c0.09,0,0.181-0.019,0.269-0.056c3.419-1.474,5.626-4.826,5.626-8.54C19.368,6.282,17.152,2.923,13.724,1.453z"></path>
			</svg>
		</div>
		<p className="time">12:23 / 15:43</p>
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