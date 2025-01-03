
import { Armchair, BarChartIcon as ChartNoAxesCombined, CirclePlusIcon, Github, Linkedin, Mail, MapPin, Phone, User, X } from 'lucide-react';
import { AiOutlineSkype } from "react-icons/ai";
import { useForm } from 'react-hook-form';
import Container from '../../Layout/Container/Container';
import { useRef, useState } from 'react';

const DetailsOneTemplate = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const fileInputRef = useRef(null);
    
  const handleImageChange = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setSelectedImage(imageUrl)
    }
  }
    
  const handleDelete = () => {
    setSelectedImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }
    
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  //   if (currentStep < 7) {
  //     setCurrentStep(currentStep + 1);
  //   } else {
  //     console.log('Final submission:', data);
  //   }
  // }

  // In your onSubmit function, update it to:
const onSubmit = (data) => {
  if (currentStep < 7) {
    setCurrentStep(currentStep + 1);
  } else {
    // Create and dispatch a custom event with the form data
    const event = new CustomEvent('formSubmitted', { 
      detail: {
        ...data,
        photo: selectedImage // Include the selected image URL
      }
    });
    window.dispatchEvent(event);
    // Close the modal
    document.getElementById('my_modal_3')?.close();
  }
};

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Personal Information";
      case 2:
        return "Education";
      case 3:
        return "Work Experience";
      case 4:
        return "Skills & Expertise";
      case 5:
        return "Projects";
      case 6:
        return "Certifications";
      case 7:
        return "Additional Information";
      default:
        return "";
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          // Personal Information Form
          <>
            <div className="flex items-center gap-5">
              {/* Name */}
              <div className="relative w-2/4">
                <label className="block mb-2 text-sm font-semibold">Name</label>
                <div className="flex items-center">
                  <div className="absolute left-3">
                    <CirclePlusIcon className="w-5 h-5 text-gray-300" />
                  </div>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="input input-bordered w-full pl-10 text-sm"
                  />
                </div>
                {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
                )}
              </div>

              {/* Designation*/}
              <div className="relative w-2/4">
                <label className="block mb-2 text-sm font-semibold">Designation</label>
                <div className="flex items-center">
                  <div className="absolute left-3">
                    <Armchair className="w-5 h-5 text-gray-300" />
                  </div>
                  <input
                    type="text"
                    {...register("designation", { required: "Designation is required" })}
                    className="input input-bordered w-full pl-10 text-sm"
                  />
                </div>
                {errors.designation && (
                  <span className="text-red-600">{errors.designation.message}</span>
                )}
              </div>
            </div>
                  {/* career objective */}
                  <div className="relative mt-5">
                    <label className="block mb-2 text-sm font-semibold">Career Objective</label>
                    <div className="flex items-start">
                      <div className="absolute left-3">
                        <ChartNoAxesCombined className="w-5 h-5 text-gray-300 mt-3" />
                      </div>
                      <textarea
                        {...register("careerObjective", { required: "Career Objective is required" })}
                        className="textarea textarea-bordered w-full pl-10"
                      />
                    </div>
                    {errors.careerObjective && (
                      <span className="text-red-600">{errors.careerObjective.message}</span>
                    )}
                  </div>
                            
                  {/* about me */}
                  <div className="relative mt-5">
                    <label className="block mb-2 text-sm font-semibold">About Me</label>
                    <div className="flex items-start">
                      <div className="absolute left-3">
                        <User className="w-5 h-5 text-gray-300 mt-3" />
                      </div>
                      <textarea
                        {...register("aboutMe", { required: "About Me is required" })}
                        className="textarea textarea-bordered w-full pl-10"
                      />
                    </div>
                    {errors.aboutMe && (
                      <span className="text-red-600">{errors.aboutMe.message}</span>
                    )}
                  </div>         

                  <div className="flex items-center gap-5 mt-5">
                    {/*email*/}
                    <div className="relative w-2/4">
                      <label className="block mb-2 font-semibold text-sm">Email</label>
                      <div className="flex items-center">
                        <div className="absolute left-3">
                          <Mail className="w-5 h-5 text-gray-300" />
                        </div>
                        <input
                          type="email"
                          {...register("email", { required: "Email is required" })}
                          className="input input-bordered w-full pl-10"
                        />
                      </div>
                      {errors.email && (
                        <span className="text-red-600">{errors.email.message}</span>
                      )}
                    </div>
      
                    {/* phone*/}
                    <div className="relative w-2/4">
                      <label className="block mb-2 font-semibold text-sm">Phone</label>
                      <div className="flex items-center">
                        <div className="absolute left-3">
                          <Phone className="w-5 h-5 text-gray-300" />
                        </div>
                        <input
                          type="tel"
                          {...register("phone", { required: "Phone is required" })}
                          className="input input-bordered w-full pl-10"
                        />
                      </div>
                      {errors.phone && (
                        <span className="text-red-600">{errors.phone.message}</span>
                      )}
                    </div>
                  </div>
      
                  {/* location & linkedin*/}
                  <div className="flex items-center gap-5 mt-5">
                    {/* location*/}
                    <div className="relative w-2/4">
                      <label className="block mb-2 text-sm font-semibold">Location</label>
                      <div className="flex items-center">
                        <div className="absolute left-3">
                          <MapPin className="w-5 h-5 text-gray-300" />
                        </div>
                        <input
                          type="text"
                          {...register("location", { required: "Location is required" })}
                          className="input input-bordered w-full pl-10 text-sm"
                        />
                      </div>
                      {errors.location && (
                        <span className="text-red-600">{errors.location.message}</span>
                      )}
                    </div>
      
                    {/*linkedin*/}
                    <div className="relative w-2/4">
                      <label className="block mb-2 font-semibold text-sm">LinkedIn</label>
                      <div className="flex items-center">
                        <div className="absolute left-3">
                          <Linkedin className="w-5 h-5 text-gray-300" />
                        </div>
                        <input
                          type="url"
                          {...register("linkedIn", { required: "LinkedIn is required" })}
                          className="input input-bordered w-full pl-10"
                        />
                      </div>
                      {errors.linkedIn && (
                        <span className="text-red-600">{errors.linkedIn.message}</span>
                      )}
                    </div>
                  </div>
                            
                  {/* Github & skype */}
                  <div className="flex items-center gap-5 mt-5">
                    {/* Github*/}
                    <div className="relative w-2/4">
                      <label className="block mb-2 text-sm font-semibold">Github</label>
                      <div className="flex items-center">
                        <div className="absolute left-3">
                          <Github className="w-5 h-5 text-gray-300" />
                        </div>
                        <input
                          type="url"
                          {...register("github", { required: "Github is required" })}
                          className="input input-bordered w-full pl-10 text-sm"
                        />
                      </div>
                      {errors.github && (
                        <span className="text-red-600">{errors.github.message}</span>
                      )}
                    </div>
      
                    {/*skype*/}
                    <div className="relative w-2/4">
                      <label className="block mb-2 font-semibold text-sm">Skype</label>
                      <div className="flex items-center">
                        <div className="absolute left-3">
                          <AiOutlineSkype className="w-5 h-5 text-gray-300" />
                        </div>
                        <input
                          type="text"
                          {...register("skype", { required: "Skype is required" })}
                          className="input input-bordered w-full pl-10"
                        />
                      </div>
                      {errors.skype && (
                        <span className="text-red-600">{errors.skype.message}</span>
                      )}
                    </div>
                  </div>
      
                  <div className="relative mt-5">
                    <div>
                      <label htmlFor="picture" className="block text-sm font-semibold">
                        Upload Photo
                      </label>
                      <input
                        ref={fileInputRef}
                        id="picture"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="cursor-pointer input input-bordered w-full mt-2 text-center py-2"
                      />
                    </div>

                    {selectedImage && (
                      <div className="relative mt-4">
                        <img
                          src={selectedImage}
                          alt="Profile preview"
                          className="w-20 h-20 rounded-full"
                        />
                        <button
                          type="button"
                          className="absolute top-2 right-2"
                          onClick={handleDelete}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
          </>
        );

      case 2:
        return (
          // Education Form
          <div className="space-y-6">
                {/* Degree Information */}
            <div className="relative">
                <label className="block mb-2 text-sm font-semibold">Institution Name</label>
                <input
                  type="text"
                  {...register("institution", { required: "Institution is required" })}
                  className="input input-bordered w-full text-sm"
                  placeholder="University name"
                />
                {errors.institution && (
                  <span className="text-red-600">{errors.institution.message}</span>
                )}
            </div>
                
            <div className="grid grid-cols-2 gap-5">
              <div className="relative">
                <label className="block mb-2 text-sm font-semibold">Degree Name</label>
                <input
                  type="text"
                  {...register("degreeName", { required: "Degree name is required" })}
                  className="input input-bordered w-full text-sm"
                  placeholder="e.g., Bachelor of Science"
                />
                {errors.degreeName && (
                  <span className="text-red-600">{errors.degreeName.message}</span>
                )}
              </div>

              <div className="relative">
                <label className="block mb-2 text-sm font-semibold">Department</label>
                <input
                  type="text"
                  {...register("department", { required: "Department is required" })}
                  className="input input-bordered w-full text-sm"
                  placeholder="e.g., Computer Science"
                />
                {errors.major && (
                  <span className="text-red-600">{errors.major.message}</span>
                )}
              </div>
            </div>

            {/* Institution & Year */}
            <div className="grid grid-cols-2 gap-5">
              <div className="relative">
                <label className="block mb-2 text-sm font-semibold">Starting Year</label>
                <input
                  type="date"
                  {...register("startingYear", { required: "Starting Year is required" })}
                  className="input input-bordered w-full text-sm"
                  placeholder="University name"
                />
                {errors.startingYear && (
                  <span className="text-red-600">{errors.startingYear.message}</span>
                )}
              </div>

              <div className="relative">
                <label className="block mb-2 text-sm font-semibold">Graduation Year</label>
                <input
                  type="date"
                  {...register("graduationYear", { required: "Graduation year is required" })}
                  className="input input-bordered w-full text-sm"
                  placeholder="YYYY"
                />
                {errors.graduationYear && (
                  <span className="text-red-600">{errors.graduationYear.message}</span>
                )}
              </div>
            </div>

            {/* CGPA & Location */}
            <div className="grid grid-cols-2 gap-5">
              <div className="relative">
                <label className="block mb-2 text-sm font-semibold">CGPA</label>
                <input
                  type="number"
                  step="0.01"
                  {...register("cgpa", { required: "CGPA is required" })}
                  className="input input-bordered w-full text-sm"
                  placeholder="e.g., 3.75"
                />
                {errors.cgpa && (
                  <span className="text-red-600">{errors.cgpa.message}</span>
                )}
              </div>

              <div className="relative">
                <label className="block mb-2 text-sm font-semibold">Institution Location</label>
                <input
                  type="text"
                  {...register("educationLocation", { required: "Location is required" })}
                  className="input input-bordered w-full text-sm"
                  placeholder="e.g., City, Country"
                />
                {errors.educationLocation && (
                  <span className="text-red-600">{errors.educationLocation.message}</span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="relative">
              <label className="block mb-2 text-sm font-semibold">Description</label>
              <textarea
                {...register("educationDescription")}
                className="textarea textarea-bordered w-full h-32"
                placeholder="Add any relevant details about your education..."
              />
            </div>
          </div>
        );

      case 3:
        return (
          // Work Experience Form
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-5">
              <div className="relative">
                <label className="block mb-2 text-sm font-semibold">Company Name</label>
                <input
                  type="text"
                  {...register("companyName", { required: "Company name is required" })}
                  className="input input-bordered w-full"
                  placeholder="e.g., Google"
                />
              </div>
              <div className="relative">
                <label className="block mb-2 text-sm font-semibold">Job Title</label>
                <input
                  type="text"
                  {...register("position", { required: "Position is required" })}
                  className="input input-bordered w-full"
                  placeholder="e.g., Senior Developer"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="relative">
                <label className="block mb-2 text-sm font-semibold">Start Date</label>
                <input
                  type="date"
                  {...register("startDate", { required: "Start date is required" })}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="relative">
                <label className="block mb-2 text-sm font-semibold">End Date</label>
                <input
                  type="date"
                  {...register("endDate")}
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="relative">
                <label className="block mb-2 text-sm font-semibold">Company Location</label>
                <input
                  type="text"
                  {...register("companyLocation", { required: "Company Location is required" })}
                  className="input input-bordered w-full"
                  placeholder="e.g., Dhaka, Bangladesh"
                />
              </div>

            <div className="relative">
              <label className="block mb-2 text-sm font-semibold">Details</label>
              <textarea
                {...register("responsibilities")}
                className="textarea textarea-bordered w-full h-32"
                placeholder="Describe your key responsibilities and achievements..."
              />
            </div>
          </div>
        );

      case 4:
        return (
          // Skills & Expertise Form
          <div className="space-y-6">
            <div className="relative">
              <label className="block mb-2 text-sm font-semibold">Technical Skills</label>
              <textarea
                {...register("technicalSkills", { required: "Technical skills are required" })}
                className="textarea textarea-bordered w-full"
                placeholder="e.g., JavaScript, React, Node.js (comma separated)"
              />
            </div>
            <div className="relative">
              <label className="block mb-2 text-sm font-semibold">Soft Skills</label>
              <textarea
                {...register("softSkills")}
                className="textarea textarea-bordered w-full"
                placeholder="e.g., Leadership, Communication, Team Management"
              />
            </div>
            <div className="relative">
              <label className="block mb-2 text-sm font-semibold">Tools & Technologies</label>
              <textarea
                {...register("tools")}
                className="textarea textarea-bordered w-full"
                placeholder="e.g., Git, Docker, AWS"
              />
            </div>
          </div>
        );

      case 5:
        return (
          // Projects Form
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-5">
              <div className="relative">
                <label className="block mb-2 text-sm font-semibold">Project Title</label>
                <input
                  type="text"
                  {...register("projectTitle", { required: "Project Title is required" })}
                  className="input input-bordered w-full text-sm"
                />
              </div>
             
              <div className="relative">
                <label className="block mb-2 text-sm font-semibold">Project Subtitle</label>
                <input
                  type="text"
                  {...register("projectSubTitle", { required: "Project Title is required" })}
                  className="input input-bordered w-full text-sm"
                />
              </div>
    
            <div className="relative">
                <label className="block mb-2 text-sm font-semibold">Live Link</label>
             <input
                  placeholder='https://...'
                  type="text"
                  {...register("liveLink")}
                  className="input input-bordered w-full text-sm"
                />
               </div>
                    
               <div className="relative">
                <label className="block mb-2 text-sm font-semibold">GitHub Link <span className='font-normal'>(Client)</span></label>
                <input
                 type="text"
                 placeholder='https://...'       
                  {...register("clientLink")}
                  className="input input-bordered w-full text-sm"
                />
              </div>
                    
              <div className="relative">
                <label className="block mb-2 text-sm font-semibold">GitHub Link <span className='font-normal'>(Server)</span></label>
                <input
                type="text"
                placeholder='https://...'
                  {...register("serverSiteLink")}
                  className="input input-bordered w-full text-sm"
                />
              </div>
                    
            <div className="relative">
                <label className="block mb-2 text-sm font-semibold">Technologies</label>
                <input
                type="text"
                 placeholder='Technologies....'
                  {...register("technologies")}
                  className="input input-bordered w-full text-sm"
                />
              </div>

            </div>
            <div className="relative">
              <label className="block mb-2 text-sm font-semibold">Project Description</label>
              <textarea
                {...register("projectDescription")}
                className="textarea textarea-bordered w-full h-32"
                placeholder="Describe the project, your role, and achievements..."
              />
            </div>
          </div>
        );

      case 6:
        return (
          // Certifications Form
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-5">
              <div className="relative">
                <label className="block mb-2 text-sm font-semibold">Certification Name</label>
                <input
                  type="text"
                  {...register("certificationName")}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="relative">
                <label className="block mb-2 text-sm font-semibold">Issuing Organization</label>
                <input
                  type="text"
                  {...register("certificationOrg")}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="relative">
                <label className="block mb-2 text-sm font-semibold">Issue Date</label>
                <input
                  type="date"
                  {...register("certificationDate")}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="relative">
                <label className="block mb-2 text-sm font-semibold">Expiry Date</label>
                <input
                  type="date"
                  {...register("certificationExpiry")}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="relative">
              <label className="block mb-2 text-sm font-semibold">Credential URL</label>
              <input
                type="url"
                {...register("certificationUrl")}
                className="input input-bordered w-full"
                placeholder="https://..."
              />
            </div>
          </div>
        );

      case 7:
        return (
          // Additional Information Form
          <div className="space-y-6">
            <div className="relative">
              <label className="block mb-2 text-sm font-semibold">Languages</label>
              <textarea
                {...register("languages")}
                className="textarea textarea-bordered w-full"
                placeholder="List languages you know and proficiency levels..."
              />
            </div>
            <div className="relative">
              <label className="block mb-2 text-sm font-semibold">Interests & Hobbies</label>
              <textarea
                {...register("interests")}
                className="textarea textarea-bordered w-full"
                placeholder="Share your interests and hobbies..."
              />
            </div>
            <div className="relative">
              <label className="block mb-2 text-sm font-semibold">Additional Achievements</label>
              <textarea
                {...register("achievements")}
                className="textarea textarea-bordered w-full h-32"
                placeholder="List any additional achievements or recognition..."
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h3 className="font-bold text-lg">{getStepTitle()}</h3>
        <div className="w-full bg-gray-200 h-2 mt-4 rounded-full">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 7) * 100}%` }}
          />
        </div>
      </div>
      
      <section>
        <Container>
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full col-span-2">
              {renderStepContent()}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="btn bg-gray-500 text-white hover:bg-gray-600"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className={`btn ${currentStep === 1 ? 'ml-auto' : ''} bg-blue-500 text-white hover:bg-green-600`}
                >
                  {currentStep === 7 ? 'Submit' : 'Next'}
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default DetailsOneTemplate;


