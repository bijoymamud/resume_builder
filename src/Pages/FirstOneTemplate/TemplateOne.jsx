import React from 'react'

const TemplateOne = () => {
  return (
    <div>
       <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl bg-white shadow-xl">
        {/* Header Section */}
        <div className="relative bg-slate-700 p-6 text-white">
          <div className="flex items-center gap-8">
            <div className="absolute -bottom-12 left-8">
              <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="ml-44">
              <h1 className="text-3xl font-bold">RICHARD SANCHEZ</h1>
              <h2 className="text-xl">MARKETING MANAGER</h2>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 p-8">
          {/* Left Sidebar */}
          <div className="space-y-6">
            {/* Contact Section */}
            <section>
              <h3 className="mb-4 text-lg font-bold uppercase text-slate-700">Contact</h3>
              <div className="space-y-2 text-sm">
                <p>📞 +123-456-7890</p>
                <p>✉️ hello@greatsite.com</p>
                <p>📍 123 Anywhere St., Any City</p>
                <p>🌐 www.reallygreatsite.com</p>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h3 className="mb-4 text-lg font-bold uppercase text-slate-700">Skills</h3>
              <ul className="space-y-1 text-sm">
                <li>• Project Management</li>
                <li>• Public Relations</li>
                <li>• Teamwork</li>
                <li>• Time Management</li>
                <li>• Leadership</li>
                <li>• Effective Communication</li>
                <li>• Critical Thinking</li>
                <li>• Digital Marketing</li>
              </ul>
            </section>

            {/* Languages Section */}
            <section>
              <h3 className="mb-4 text-lg font-bold uppercase text-slate-700">Languages</h3>
              <ul className="space-y-1 text-sm">
                <li>• English (Fluent)</li>
                <li>• French (Fluent)</li>
                <li>• German (Basic)</li>
                <li>• Spanish (Intermediate)</li>
              </ul>
            </section>

            {/* Reference Section */}
            <section>
              <h3 className="mb-4 text-lg font-bold uppercase text-slate-700">Reference</h3>
              <div className="text-sm">
                <p className="font-semibold">Estelle Darcy</p>
                <p>Wardiere Inc. / CTO</p>
                <p>Phone: 123-456-7890</p>
                <p>Email: hello@greatsite.com</p>
              </div>
            </section>
          </div>

          {/* Main Content */}
          <div className="col-span-2 space-y-6">
            {/* Profile Section */}
            <section>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold uppercase text-slate-700">
                <span className="text-xl">👤</span> Profile
              </h3>
              <p className="text-sm text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </section>

            {/* Work Experience Section */}
            <section>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold uppercase text-slate-700">
                <span className="text-xl">💼</span> Work Experience
              </h3>
              <div className="space-y-4">
                {/* Borcelle Studio */}
                <div className="relative border-l-2 border-slate-300 pl-4">
                  <div className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-slate-700"></div>
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-bold">Borcelle Studio</h4>
                      <p className="text-sm italic">Marketing Manager & Specialist</p>
                    </div>
                    <span className="text-sm text-slate-500">2020 - PRESENT</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600">
                    <li>• Develop and execute comprehensive marketing strategies</li>
                    <li>• Lead, mentor, and manage a high-performing marketing team</li>
                    <li>• Monitor brand consistency across marketing channels</li>
                  </ul>
                </div>

                {/* Previous Experiences */}
                <div className="relative border-l-2 border-slate-300 pl-4">
                  <div className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-slate-700"></div>
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-bold">Peuget Studio</h4>
                      <p className="text-sm italic">Marketing Manager & Specialist</p>
                    </div>
                    <span className="text-sm text-slate-500">2025 - 2029</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600">
                    <li>• Create and manage the marketing budget</li>
                    <li>• Oversee market research to identify emerging trends</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold uppercase text-slate-700">
                <span className="text-xl">🎓</span> Education
              </h3>
              <div className="space-y-4">
                <div className="relative border-l-2 border-slate-300 pl-4">
                  <div className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-slate-700"></div>
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-bold">Master of Business Management</h4>
                      <p className="text-sm">School of Business | Wardiere University</p>
                      <p className="text-sm text-slate-500">GPA: 3.8/4.0</p>
                    </div>
                    <span className="text-sm text-slate-500">2029 - 2031</span>
                  </div>
                </div>

                <div className="relative border-l-2 border-slate-300 pl-4">
                  <div className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-slate-700"></div>
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-bold">Bachelor of Business Management</h4>
                      <p className="text-sm">School of Business | Wardiere University</p>
                      <p className="text-sm text-slate-500">GPA: 3.8/4.0</p>
                    </div>
                    <span className="text-sm text-slate-500">2025 - 2029</span>
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

export default TemplateOne
