// import React from 'react'

// import Style from "../../../styles/Lable.module.css"
// import Image from 'next/image'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // import { Card, CardContent } from "@/components/ui/card"
// // import {
// //     Carousel,
// //     CarouselContent,
// //     CarouselItem,
// //     CarouselNext,
// //     CarouselPrevious,
// // } from "@/components/ui/carousel"
// import NewReleaseItem from '../../albums/components/NewReleaseItem'
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableFooter,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"
// import Link from 'next/link'
// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
// } from "@/components/ui/sheet"
// import { Button } from '@/components/ui/button'



// const page = (params) => {
//     return (
//         <div>
//             <div>{params.labelid}</div>
//             <div className={Style.labelBannerContainer}>
//                 <Image src={'/images/banner4.png'}
//                     layout='fill' alt='label banner' className={Style.labelBannerImg} />

//                 <div className={`${Style.labelInfoContainer} h-full`}>
//                     <div className={Style.labelDataContainer}>
//                     {/* <span className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">Genre</span> */}
//                     <h1 className={Style.superLabelHeadning}>Classic Indian Music Ltd</h1>
//                     {/* <p className={`mb-2 ${Style.labelOwnerHeadning}`}>Owner Name</p> */}
//                     <div className="flex items-center justify-center mt-4">
//                         <Button className='me-5 px-7 py-5'>Edit</Button>
//                         <Button className='px-7 py-5' style={{backgroundColor: "#3270ff"}}>Add Album</Button>
//                     </div>
//                     </div>
//                 </div>

//             </div>

//             <div className="container-fluid mt-5 mb-5">
//                 <h2 className={`mb-3 ${Style.subheading}`}>Recent Albums</h2>
//                 <div className={Style.sliderContainer}>
//                     <NewReleaseItem imageSrc={'/images/album4.jpg'} albumName={"Paradise"} albumArtist="Max jack" />
//                     <NewReleaseItem imageSrc={'/images/album5.jpg'} albumName={"Ocen"} albumArtist="Brandon Johns" />
//                     <NewReleaseItem imageSrc={'/images/album6.webp'} albumName={"Headin to the sky"} albumArtist="lone wolf" />
//                     <NewReleaseItem imageSrc={'/images/album7.jpg'} albumName={"Trap Remix"} albumArtist="Dj Bablu" />
//                     <NewReleaseItem imageSrc={'/images/album8.jpg'} albumName={"Moutain"} albumArtist="Snow Leapord" />
//                     <NewReleaseItem imageSrc={'/images/album9.jpeg'} albumName={"Hiraeth"} albumArtist="uchiha madara" />
//                 </div>
//             </div>


//             <div className="container-fluid mt-5 mb-5">

//                 <h2 className={`mb-3 ${Style.subheading}`}>All Albums</h2>
//                 <div className="grid grid-cols-12 gap-4 ">
//                     <div className={`col-span-7 ${Style.albumContainer}`} >

//                         <ul className={`mt-3 ${Style.trackList}`}>

//                             <li className={`mb-4 ${Style.trackItem}`}>
//                                 <span className={`me-2 ${Style.trackItemNumber}`}>01.</span>
//                                 <div className={`me-3 ${Style.trackItemIconBox}`}><i className="bi bi-music-note"></i></div>
//                                 <div className={Style.trackItemInfo}>
//                                     <div>
//                                         <p className={` ${Style.trackItemTrackName}`}>song name here</p>
//                                         <p className={`${Style.trackItemTrackSingerName}`}>singer name</p>
//                                     </div>
//                                     <div className={Style.controllers}>
//                                         <span className="me-2 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Genre</span>
//                                         <span><i className={`bi bi-stopwatch ${Style.stopwatchIcon}`}></i> 2.30</span>
//                                         <i className="bi bi-play-fill"></i>
//                                     </div>

//                                 </div>
//                             </li>
//                             <li className={`mb-4 ${Style.trackItem}`}>
//                                 <span className={`me-2 ${Style.trackItemNumber}`}>02.</span>
//                                 <div className={`me-3 ${Style.trackItemIconBox}`}><i className="bi bi-music-note"></i></div>
//                                 <div className={Style.trackItemInfo}>
//                                     <div>
//                                         <p className={` ${Style.trackItemTrackName}`}>Another song </p>
//                                         <p className={`${Style.trackItemTrackSingerName}`}>singer name</p>
//                                     </div>
//                                     <div className={Style.controllers}>
//                                         <span className="me-2 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Genre</span>
//                                         <span><i className={`bi bi-stopwatch ${Style.stopwatchIcon}`}></i> 2.30</span>
//                                         <i className="bi bi-play-fill"></i>
//                                     </div>

//                                 </div>
//                             </li>
//                             <li className={`mb-4 ${Style.trackItem}`}>
//                                 <span className={`me-2 ${Style.trackItemNumber}`}>03.</span>
//                                 <div className={`me-3 ${Style.trackItemIconBox}`}><i className="bi bi-music-note"></i></div>
//                                 <div className={Style.trackItemInfo}>
//                                     <div>
//                                         <p className={` ${Style.trackItemTrackName}`}>song name here</p>
//                                         <p className={`${Style.trackItemTrackSingerName}`}>singer name</p>
//                                     </div>
//                                     <div className={Style.controllers}>
//                                         <span className="me-2 inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">Genre</span>
//                                         <span><i className={`bi bi-stopwatch ${Style.stopwatchIcon}`}></i> 2.30</span>
//                                         <i className="bi bi-play-fill"></i>
//                                     </div>

//                                 </div>
//                             </li>
//                             <li className={`mb-4 ${Style.trackItem}`}>
//                                 <span className={`me-2 ${Style.trackItemNumber}`}>01.</span>
//                                 <div className={`me-3 ${Style.trackItemIconBox}`}><i className="bi bi-music-note"></i></div>
//                                 <div className={Style.trackItemInfo}>
//                                     <div>
//                                         <p className={` ${Style.trackItemTrackName}`}>song name here</p>
//                                         <p className={`${Style.trackItemTrackSingerName}`}>singer name</p>
//                                     </div>
//                                     <div className={Style.controllers}>
//                                         <span className="me-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Genre</span>
//                                         <span><i className={`bi bi-stopwatch ${Style.stopwatchIcon}`}></i> 2.30</span>
//                                         <i className="bi bi-play-fill"></i>
//                                     </div>

//                                 </div>
//                             </li>
//                             <li className={`mb-4 ${Style.trackItem}`}>
//                                 <span className={`me-2 ${Style.trackItemNumber}`}>02.</span>
//                                 <div className={`me-3 ${Style.trackItemIconBox}`}><i className="bi bi-music-note"></i></div>
//                                 <div className={Style.trackItemInfo}>
//                                     <div>
//                                         <p className={` ${Style.trackItemTrackName}`}>Another song </p>
//                                         <p className={`${Style.trackItemTrackSingerName}`}>singer name</p>
//                                     </div>
//                                     <div className={Style.controllers}>
//                                         <span className="me-2 inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Genre</span>
//                                         <span><i className={`bi bi-stopwatch ${Style.stopwatchIcon}`}></i> 2.30</span>
//                                         <i className="bi bi-play-fill"></i>
//                                     </div>

//                                 </div>
//                             </li>
//                             <li className={`mb-4 ${Style.trackItem}`}>
//                                 <span className={`me-2 ${Style.trackItemNumber}`}>03.</span>
//                                 <div className={`me-3 ${Style.trackItemIconBox}`}><i className="bi bi-music-note"></i></div>
//                                 <div className={Style.trackItemInfo}>
//                                     <div>
//                                         <p className={` ${Style.trackItemTrackName}`}>song name here</p>
//                                         <p className={`${Style.trackItemTrackSingerName}`}>singer name</p>
//                                     </div>
//                                     <div className={Style.controllers}>
//                                         <span className="me-2 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Genre</span>
//                                         <span><i className={`bi bi-stopwatch ${Style.stopwatchIcon}`}></i> 2.30</span>
//                                         <i className="bi bi-play-fill"></i>
//                                     </div>

//                                 </div>
//                             </li>


//                         </ul>

//                     </div>
//                     <div className={`col-span-5 ${Style.albumContainer}`}>

//                         <div className="mt-3">
//                             <Tabs defaultValue="artist" className="w-100">
//                                 <TabsList className='grid w-full grid-cols-4'>
//                                     <TabsTrigger value="artist"><i className="me-2 bi bi-music-note"></i> Artist</TabsTrigger>
//                                     <TabsTrigger value="lyricst"><i className="me-2 bi bi-pen-fill"></i> Lyricst</TabsTrigger>
//                                     <TabsTrigger value="composer"><i className="me-2 bi bi-music-note-list"></i> Composer</TabsTrigger>
//                                     <TabsTrigger value="producer"><i className="me-2 bi bi-currency-rupee"></i> Producer</TabsTrigger>
//                                 </TabsList>
//                                 <TabsContent value="artist">
//                                     <div className="border-solid border-2 p-1">
//                                         <Table>
//                                             <TableHeader>
//                                                 <TableRow >
//                                                     <TableHead className="w-[55px]">Sr No</TableHead>
//                                                     <TableHead>Singer</TableHead>
//                                                     <TableHead>Type</TableHead>
//                                                     <TableHead>Action</TableHead>
//                                                     <TableHead className="text-right">Edit</TableHead>
//                                                 </TableRow>
//                                             </TableHeader>
//                                             <TableBody>
//                                                 <TableRow >
//                                                     <TableCell className="font-medium">1</TableCell>
//                                                     <TableCell><Link href='/'>Dj Max</Link></TableCell>
//                                                     <TableCell>Vocalist</TableCell>
//                                                     <TableCell><button className={Style.viewBtn}>View</button></TableCell>
//                                                     <TableCell className="text-right">
//                                                         <Link href="/">
//                                                             <i className={`bi bi-pencil-square ${Style.editBtn}`}></i>
//                                                         </Link>
//                                                     </TableCell>

//                                                 </TableRow>
//                                                 <TableRow >
//                                                     <TableCell className="font-medium">1</TableCell>
//                                                     <TableCell><Link href='/'>s s</Link></TableCell>
//                                                     <TableCell>Playback</TableCell>
//                                                     <TableCell><button className={Style.viewBtn}>View</button></TableCell>
//                                                     <TableCell className="text-right">
//                                                         <Link href="/">
//                                                             <i className={`bi bi-pencil-square ${Style.editBtn}`}></i>
//                                                         </Link>
//                                                     </TableCell>

//                                                 </TableRow>
//                                                 <TableRow >
//                                                     <TableCell className="font-medium">1</TableCell>
//                                                     <TableCell><Link href='/'>Dj Max</Link></TableCell>
//                                                     <TableCell>Vocalist</TableCell>
//                                                     <TableCell><button className={Style.viewBtn}>View</button></TableCell>
//                                                     <TableCell className="text-right">
//                                                         <Link href="/">
//                                                             <i className={`bi bi-pencil-square ${Style.editBtn}`}></i>
//                                                         </Link>
//                                                     </TableCell>

//                                                 </TableRow>
//                                             </TableBody>
//                                         </Table>

//                                     </div>

//                                 </TabsContent>
//                                 <TabsContent value="lyricst">

//                                     <div className="border-solid border-2 p-1">
//                                         <Table>
//                                             <TableHeader>
//                                                 <TableRow >
//                                                     <TableHead className="w-[55px]">Sr No</TableHead>
//                                                     <TableHead>Lyricst</TableHead>
//                                                     <TableHead>IPI Number</TableHead>
//                                                     <TableHead>Role</TableHead>
//                                                     <TableHead>Action</TableHead>
//                                                     <TableHead className="text-right">Edit</TableHead>
//                                                 </TableRow>
//                                             </TableHeader>
//                                             <TableBody>
//                                                 <TableRow >
//                                                     <TableCell className="font-medium">1</TableCell>
//                                                     <TableCell><Link href='/'>Dj Max</Link></TableCell>
//                                                     <TableCell>13213365465</TableCell>
//                                                     <TableCell>Author</TableCell>
//                                                     <TableCell><button className={Style.viewBtn}>View</button></TableCell>
//                                                     <TableCell className="text-right">
//                                                         <Link href="/">
//                                                             <i className={`bi bi-pencil-square ${Style.editBtn}`}></i>
//                                                         </Link>
//                                                     </TableCell>

//                                                 </TableRow>
//                                                 <TableRow >
//                                                     <TableCell className="font-medium">1</TableCell>
//                                                     <TableCell><Link href='/'>s s</Link></TableCell>
//                                                     <TableCell>35432435455</TableCell>
//                                                     <TableCell>composer</TableCell>
//                                                     <TableCell><button className={Style.viewBtn}>View</button></TableCell>
//                                                     <TableCell className="text-right">
//                                                         <Link href="/">
//                                                             <i className={`bi bi-pencil-square ${Style.editBtn}`}></i>
//                                                         </Link>
//                                                     </TableCell>

//                                                 </TableRow>
//                                                 <TableRow >
//                                                     <TableCell className="font-medium">1</TableCell>
//                                                     <TableCell><Link href='/'>Dj Max</Link></TableCell>
//                                                     <TableCell>987456321</TableCell>
//                                                     <TableCell>author</TableCell>
//                                                     <TableCell><button className={Style.viewBtn}>View</button></TableCell>
//                                                     <TableCell className="text-right">
//                                                         <Link href="/">
//                                                             <i className={`bi bi-pencil-square ${Style.editBtn}`}></i>
//                                                         </Link>
//                                                     </TableCell>

//                                                 </TableRow>
//                                             </TableBody>
//                                         </Table>

//                                     </div>

//                                 </TabsContent>
//                                 <TabsContent value="composer">

//                                     <div className="border-solid border-2 p-1">
//                                         <Table>
//                                             <TableHeader>
//                                                 <TableRow >
//                                                     <TableHead className="w-[55px]">Sr No</TableHead>
//                                                     <TableHead>Composer</TableHead>
//                                                     <TableHead>IPI Number</TableHead>
//                                                     <TableHead>Role</TableHead>
//                                                     <TableHead>Action</TableHead>
//                                                     <TableHead className="text-right">Edit</TableHead>
//                                                 </TableRow>
//                                             </TableHeader>
//                                             <TableBody>
//                                                 <TableRow >
//                                                     <TableCell className="font-medium">1</TableCell>
//                                                     <TableCell><Link href='/'>Dj Max</Link></TableCell>
//                                                     <TableCell>13213365465</TableCell>
//                                                     <TableCell>Author</TableCell>
//                                                     <TableCell><button className={Style.viewBtn}>View</button></TableCell>
//                                                     <TableCell className="text-right">
//                                                         <Link href="/">
//                                                             <i className={`bi bi-pencil-square ${Style.editBtn}`}></i>
//                                                         </Link>
//                                                     </TableCell>

//                                                 </TableRow>
//                                                 <TableRow >
//                                                     <TableCell className="font-medium">1</TableCell>
//                                                     <TableCell><Link href='/'>s s</Link></TableCell>
//                                                     <TableCell>35432435455</TableCell>
//                                                     <TableCell>composer</TableCell>
//                                                     <TableCell><button className={Style.viewBtn}>View</button></TableCell>
//                                                     <TableCell className="text-right">
//                                                         <Link href="/">
//                                                             <i className={`bi bi-pencil-square ${Style.editBtn}`}></i>
//                                                         </Link>
//                                                     </TableCell>

//                                                 </TableRow>
//                                                 <TableRow >
//                                                     <TableCell className="font-medium">1</TableCell>
//                                                     <TableCell><Link href='/'>Dj Max</Link></TableCell>
//                                                     <TableCell>987456321</TableCell>
//                                                     <TableCell>author</TableCell>
//                                                     <TableCell><button className={Style.viewBtn}>View</button></TableCell>
//                                                     <TableCell className="text-right">
//                                                         <Link href="/">
//                                                             <i className={`bi bi-pencil-square ${Style.editBtn}`}></i>
//                                                         </Link>
//                                                     </TableCell>

//                                                 </TableRow>
//                                             </TableBody>
//                                         </Table>

//                                     </div>
//                                 </TabsContent>
//                                 <TabsContent value="producer">

//                                     <div className="border-solid border-2 p-1">
//                                         <Table>
//                                             <TableHeader>
//                                                 <TableRow >
//                                                     <TableHead className="w-[55px]">Sr No</TableHead>
//                                                     <TableHead>Producer</TableHead>
//                                                     <TableHead>IPI Number</TableHead>
//                                                     <TableHead>Role</TableHead>
//                                                     <TableHead>Action</TableHead>
//                                                     <TableHead className="text-right">Edit</TableHead>
//                                                 </TableRow>
//                                             </TableHeader>
//                                             <TableBody>
//                                                 <TableRow >
//                                                     <TableCell className="font-medium">1</TableCell>
//                                                     <TableCell><Link href='/'>Dj Max</Link></TableCell>
//                                                     <TableCell>13213365465</TableCell>
//                                                     <TableCell>Author</TableCell>
//                                                     <TableCell><button className={Style.viewBtn}>View</button></TableCell>
//                                                     <TableCell className="text-right">
//                                                         <Link href="/">
//                                                             <i className={`bi bi-pencil-square ${Style.editBtn}`}></i>
//                                                         </Link>
//                                                     </TableCell>

//                                                 </TableRow>
//                                                 <TableRow >
//                                                     <TableCell className="font-medium">1</TableCell>
//                                                     <TableCell><Link href='/'>s s</Link></TableCell>
//                                                     <TableCell>35432435455</TableCell>
//                                                     <TableCell>composer</TableCell>
//                                                     <TableCell><button className={Style.viewBtn}>View</button></TableCell>
//                                                     <TableCell className="text-right">
//                                                         <Link href="/">
//                                                             <i className={`bi bi-pencil-square ${Style.editBtn}`}></i>
//                                                         </Link>
//                                                     </TableCell>

//                                                 </TableRow>
//                                                 <TableRow >
//                                                     <TableCell className="font-medium">1</TableCell>
//                                                     <TableCell><Link href='/'>Dj Max</Link></TableCell>
//                                                     <TableCell>987456321</TableCell>
//                                                     <TableCell>author</TableCell>
//                                                     <TableCell><button className={Style.viewBtn}>View</button></TableCell>
//                                                     <TableCell className="text-right">
//                                                         <Link href="/">
//                                                             <i className={`bi bi-pencil-square ${Style.editBtn}`}></i>
//                                                         </Link>
//                                                     </TableCell>

//                                                 </TableRow>
//                                             </TableBody>
//                                         </Table>

//                                     </div>
//                                 </TabsContent>
//                             </Tabs>
//                         </div>

//                     </div>
//                 </div>

//             </div>


//             <Sheet>
//                 <SheetTrigger>Open</SheetTrigger>
//                 <SheetContent className={Style.upp}>
//                     <SheetHeader>
//                         <SheetTitle>Are you absolutely sure?</SheetTitle>
//                         <SheetDescription>
//                             This action cannot be undone. This will permanently delete your account
//                             and remove your data from our servers.
//                         </SheetDescription>
//                     </SheetHeader>
//                 </SheetContent>
//             </Sheet>





//         </div>
//     )
// }

// export default page