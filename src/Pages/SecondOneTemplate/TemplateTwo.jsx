// import { BriefcaseBusiness, CircleUserRound, Dot, Globe, GraduationCap, LocateIcon, Mail, MapPin, Phone, User } from "lucide-react"
// import DetailsOneTemplate from "./DetailsOneTemplate"

// const TemplateTwo = () => {
//     return (
//       <div className="group relative">
//         {/* Overlay when hover the component*/}
//         <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/80 group-hover:opacity-100">
//          <button className="bg-green-600 text-white hover:bg-green-700 px-10 py-2" onClick={()=>document.getElementById('my_modal_3').showModal()}>Customize Template</button>
//             <dialog id="my_modal_3" className="modal">
//                 <div className="modal-box max-w-3xl p-10">
//                     <form method="dialog">
//                         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//                     </form>
//                 <DetailsOneTemplate/>
//              </div>
//             </dialog>

//           <button className="bg-blue-600 text-white hover:bg-blue-700 px-10 py-2">
//             Download Template
//           </button>
//         </div>
  
//         <div className="h-screen">
//           <div className="mx-auto max-w-5xl bg-white shadow-xl">
//             {/* Header of resume */}
//             <div className="relative bg-slate-700 p-6 text-white">
//               <div className="flex items-center gap-8">
//                 <div className="absolute -bottom-16 left-6">
//                   <div className="h-40 w-40 overflow-hidden rounded-full border-2 border-gray-600">
//                     <img
//                       src="https://i.ibb.co.com/JdWL944/1719346011856.jpg"
//                       alt="Profile"
//                       className="h-full w-full object-cover"
//                     />
//                   </div>
//                 </div>
//                 <div className="ml-44">
//                   <h1 className="text-3xl font-bold uppercase">Al Mamud Bijoy</h1>
//                   <h2 className="text-xl">Frontend Developer</h2>
//                 </div>
//               </div>
//             </div>
  
//             <div className="mt-16 grid grid-cols-3 gap-8 p-5">
//               {/* Left part */}
//               <div className="space-y-4">
//                 {/* Contact Section */}
//                 <section>
//                   <h3 className="mb-2 text-lg font-bold uppercase text-slate-700">Contact</h3>
//                   <div className="space-y-2 text-sm">
//                     <p className="flex items-center gap-2"> <Phone size={16}/> +8801624393921</p>
//                     <p className="flex items-center gap-2"><Mail size={16}/> bijoymamud.09.com</p>
//                     <p className="flex items-center gap-2"><MapPin size={16} /> Badda, Dhaka</p>
//                     <p className="flex items-center gap-2"><Globe size={16} /> almamudbijoy4u.com</p>
//                   </div>
//                 </section>
  
//                 {/* Skills Section */}
//                 <section>
//                   <h3 className="mb-2 text-lg font-bold uppercase text-slate-700">Skills</h3>
//                   <ul className="space-y-1 text-sm">
//                     <li className="flex items-center"><Dot/>Project Management</li>
//                     <li className="flex items-center"><Dot/>Public Relations</li>
//                     <li className="flex items-center"><Dot/>Teamwork</li>
//                     <li className="flex items-center"><Dot/>Time Management</li>
//                     <li className="flex items-center"><Dot/>Leadership</li>
//                     <li className="flex items-center"><Dot/>Communication</li>
//                     <li className="flex items-center"><Dot/>Critical Thinking</li>
//                     <li className="flex items-center"><Dot/>Digital Marketing</li>
//                   </ul>
//                 </section>
  
//                 {/* Languages Section */}
//                 <section>
//                   <h3 className="mb-2 text-lg font-bold uppercase text-slate-700">Languages</h3>
//                   <ul className="space-y-1 text-sm">
//                     <li className="flex items-center"><Dot/> English (Fluent)</li>
//                     <li className="flex items-center"><Dot/> French (Fluent)</li>
//                     <li className="flex items-center"><Dot/> German (Basic)</li>
//                     <li className="flex items-center"><Dot/> Spanish (Intermediate)</li>
//                   </ul>
//                 </section>
  
//                 {/* Reference Section */}
//                 <section>
//                   <h3 className="mb-2 text-lg font-bold uppercase text-slate-700">Reference</h3>
//                   <div className="text-sm pb-3">
//                     <p className="font-semibold">Estelle Darcy</p>
//                     <p>Wardiere Inc. / CTO</p>
//                     <p>Phone: 123-456-7890</p>
//                   </div>
//                 </section>
//               </div>
  
//               {/* Main Part */}
//               <div className="col-span-2 space-y-6">
//                 {/* Profile Section */}
//                 <section>
//                   <h3 className="mb-2 ga flex gap-3 text-lg font-bold uppercase text-slate-700">
//                      <CircleUserRound size={24}/>
//                      Profile
//                   </h3>
//                   <p className="text-sm text-slate-600">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//                     magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//                     commodo consequat.
//                   </p>
//                 </section>
  
//                 {/* Experience Section */}
//                 <section>
//                   <h3 className="mb-4 flex items-center gap-2 text-lg font-bold uppercase text-slate-700">
//                        <BriefcaseBusiness size={24} />
//                        Work Experience
//                   </h3>
//                   <div className="space-y-4">
//                     <div className="relative border-l-2 border-slate-300 pl-4">
//                       <div className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-slate-700"></div>
//                       <div className="flex justify-between">
//                         <div>
//                           <h4 className="font-bold">Spark Tech Agency</h4>
//                           <p className="text-sm italic">Frontend Developer</p>
//                         </div>
//                         <span className="text-sm text-slate-500">Dec 2024 - PRESENT</span>
//                       </div>
//                       <ul className="mt-2 text-sm text-slate-600">
//                         <li className="flex items-center"><Dot /> Develop comprehensive marketing strategies</li>
//                         <li className="flex items-center"><Dot /> Lead, mentor, manage a marketing team</li>
//                         <li className="flex items-center"><Dot /> Monitor brand consistency across channels</li>
//                       </ul>
//                     </div>
  
//                     {/* Previous Experiences */}
//                     <div className="relative border-l-2 border-slate-300 pl-4">
//                       <div className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-slate-700"></div>
//                       <div className="flex justify-between">
//                         <div>
//                           <h4 className="font-bold">ByteNinja Technologies</h4>
//                           <p className="text-sm italic">Frontend Developer</p>
//                         </div>
//                         <span className="text-sm text-slate-500">Jul 2024 - Sep 2024</span>
//                       </div>
                     
//                       <ul className="mt-2 text-sm text-slate-600">
//                         <li className="flex items-center"><Dot /> Develop comprehensive marketing strategies</li>
//                         <li className="flex items-center"><Dot /> Lead, mentor, manage a marketing team</li>
//                         <li className="flex items-center"><Dot /> Monitor brand consistency across channels</li>
//                       </ul>
                    
//                     </div>
//                   </div>
//                 </section>
  
//                 {/* Education Section */}
//                 <section>
//                   <h3 className="mb-4 flex items-center gap-2 text-lg font-bold uppercase text-slate-700">
//                   <GraduationCap size={24} />
//                     Education
//                   </h3>
//                   <div className="space-y-4">
//                     <div className="relative border-l-2 border-slate-300 pl-4">
//                       <div className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-slate-700"></div>
//                       <div className="flex justify-between">
//                         <div>
//                           <h4 className="font-bold">Master of Business Management</h4>
//                           <p className="text-sm">School of Business | Wardiere University</p>
//                           <p className="text-sm text-slate-500">GPA: 3.8/4.0</p>
//                         </div>
//                         <span className="text-sm text-slate-500">2029 - 2031</span>
//                       </div>
//                     </div>
  
//                     <div className="relative border-l-2 border-slate-300 pl-4">
//                       <div className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-slate-700"></div>
//                       <div className="flex justify-between">
//                         <div>
//                           <h4 className="font-bold">Bachelor of Business Management</h4>
//                           <p className="text-sm">School of Business | Wardiere University</p>
//                           <p className="text-sm text-slate-500">GPA: 3.8/4.0</p>
//                         </div>
//                         <span className="text-sm text-slate-500">2025 - 2029</span>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
  
//   export default TemplateTwo
  
  

"use client"

import { BriefcaseBusiness, CircleUserRound, Dot, Globe, GraduationCap, LocateIcon, Mail, MapPin, Phone, User } from 'lucide-react'
import { useEffect, useState } from "react"
import DetailsOneTemplate from "./DetailsOneTemplate"

const TemplateTwo = () => {
  const [formData, setFormData] = useState(null)

  // Listen for form submission event
  useEffect(() => {
    const handleFormSubmit = (event) => {
      setFormData(event.detail)
    }

    window.addEventListener('formSubmitted', handleFormSubmit)
    return () => {
      window.removeEventListener('formSubmitted', handleFormSubmit)
    }
  }, [])

  return (
    <div className="group relative">
      {/* Overlay when hover the component*/}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/80 group-hover:opacity-100">
        <button 
          className="bg-green-600 text-white hover:bg-green-700 px-10 py-2" 
          onClick={() => document.getElementById('my_modal_3').showModal()}
        >
          Customize Template
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box max-w-3xl p-10">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <DetailsOneTemplate />
          </div>
        </dialog>

        <button className="bg-blue-600 text-white hover:bg-blue-700 px-10 py-2">
          Download Template
        </button>
      </div>

      <div className="h-screen">
        <div className="mx-auto max-w-5xl bg-white shadow-xl">
          {/* Header of resume */}
          <div className="relative bg-slate-700 p-6 text-white">
            <div className="flex items-center gap-8">
              <div className="absolute -bottom-16 left-6">
                <div className="h-40 w-40 overflow-hidden rounded-full border-2 border-gray-600">
                  <img
                    src={formData?.photo || "https://i.ibb.co/JdWL944/1719346011856.jpg"}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="ml-44">
                <h1 className="text-3xl font-bold uppercase">{formData?.name || "Al Mamud Bijoy"}</h1>
                <h2 className="text-xl">{formData?.designation || "Frontend Developer"}</h2>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 p-5">
            {/* Left part */}
            <div className="space-y-4">
              {/* Contact Section */}
              <section>
                <h3 className="mb-2 text-lg font-bold uppercase text-slate-700">Contact</h3>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <Phone size={16}/> {formData?.phone || "+8801624393921"}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={16}/> {formData?.email || "bijoymamud.09.com"}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={16} /> {formData?.location || "Badda, Dhaka"}
                  </p>
                  <p className="flex items-center gap-2">
                    <Globe size={16} /> {formData?.github || "almamudbijoy4u.com"}
                  </p>
                </div>
              </section>

              {/* Skills Section */}
              <section>
                <h3 className="mb-2 text-lg font-bold uppercase text-slate-700">Skills</h3>
                <ul className="space-y-1 text-sm">
                  {formData?.technicalSkills ? 
                    formData.technicalSkills.split(',').map((skill, index) => (
                      <li key={index} className="flex items-center"><Dot/>{skill.trim()}</li>
                    )) : (
                      <>
                        <li className="flex items-center"><Dot/>Project Management</li>
                        <li className="flex items-center"><Dot/>Public Relations</li>
                        <li className="flex items-center"><Dot/>Teamwork</li>
                        <li className="flex items-center"><Dot/>Time Management</li>
                        <li className="flex items-center"><Dot/>Leadership</li>
                        <li className="flex items-center"><Dot/>Communication</li>
                        <li className="flex items-center"><Dot/>Critical Thinking</li>
                        <li className="flex items-center"><Dot/>Digital Marketing</li>
                      </>
                    )
                  }
                </ul>
              </section>

              {/* Languages Section */}
              <section>
                <h3 className="mb-2 text-lg font-bold uppercase text-slate-700">Languages</h3>
                <ul className="space-y-1 text-sm">
                  {formData?.languages ? 
                    formData.languages.split(',').map((language, index) => (
                      <li key={index} className="flex items-center"><Dot/>{language.trim()}</li>
                    )) : (
                      <>
                        <li className="flex items-center"><Dot/>English (Fluent)</li>
                        <li className="flex items-center"><Dot/>French (Fluent)</li>
                        <li className="flex items-center"><Dot/>German (Basic)</li>
                        <li className="flex items-center"><Dot/>Spanish (Intermediate)</li>
                      </>
                    )
                  }
                </ul>
              </section>
            </div>

            {/* Main Part */}
            <div className="col-span-2 space-y-6">
              {/* Profile Section */}
              <section>
                <h3 className="mb-2 flex gap-3 text-lg font-bold uppercase text-slate-700">
                  <CircleUserRound size={24}/>
                  Profile
                </h3>
                <p className="text-sm text-slate-600">
                  {formData?.aboutMe || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                </p>
              </section>

              {/* Experience Section */}
              <section>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold uppercase text-slate-700">
                  <BriefcaseBusiness size={24} />
                  Work Experience
                </h3>
                <div className="space-y-4">
                  <div className="relative border-l-2 border-slate-300 pl-4">
                    <div className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-slate-700"></div>
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-bold">{formData?.companyName || "Spark Tech Agency"}</h4>
                        <p className="text-sm italic">{formData?.position || "Frontend Developer"}</p>
                      </div>
                      <span className="text-sm text-slate-500">
                        {formData?.startDate ? new Date(formData.startDate).toLocaleDateString() : "Dec 2024"} - 
                        {formData?.endDate ? new Date(formData.endDate).toLocaleDateString() : "PRESENT"}
                      </span>
                    </div>
                    <ul className="mt-2 text-sm text-slate-600">
                      {formData?.responsibilities ? 
                        formData.responsibilities.split('\n').map((responsibility, index) => (
                          <li key={index} className="flex items-center"><Dot/>{responsibility.trim()}</li>
                        )) : (
                          <>
                            <li className="flex items-center"><Dot/>Develop comprehensive marketing strategies</li>
                            <li className="flex items-center"><Dot/>Lead, mentor, manage a marketing team</li>
                            <li className="flex items-center"><Dot/>Monitor brand consistency across channels</li>
                          </>
                        )
                      }
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education Section */}
              <section>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold uppercase text-slate-700">
                  <GraduationCap size={24} />
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="relative border-l-2 border-slate-300 pl-4">
                    <div className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-slate-700"></div>
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-bold">{formData?.degreeName || "Master of Business Management"}</h4>
                        <p className="text-sm">
                          {formData?.institution || "School of Business"} | {formData?.department || "Wardiere University"}
                        </p>
                        <p className="text-sm text-slate-500">GPA: {formData?.cgpa || "3.8"}/4.0</p>
                      </div>
                      <span className="text-sm text-slate-500">
                        {formData?.startingYear || "2029"} - {formData?.graduationYear || "2031"}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplateTwo