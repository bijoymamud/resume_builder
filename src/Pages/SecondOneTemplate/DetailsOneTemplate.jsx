import { Armchair, ChartNoAxesCombined, CirclePlusIcon, Github, Linkedin, Mail, MapPin, Phone, User, X } from 'lucide-react';
import { AiOutlineSkype } from "react-icons/ai";
import { useForm } from 'react-hook-form';
import Container from '../../Layout/Container/Container';
import { useRef, useState } from 'react';


const DetailsOneTemplate = () => {
const [selectedImage, setSelectedImage] = useState(null)
const fileInputRef = useRef(null)
    
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

   const onSubmit = (data) => {
      console.log(data);
        reset()
    }
    
    return (
        <div>
          <h3 className="font-bold text-lg">Enter Your Information</h3>
          <p className="py-4">Processing section will go here</p>
      
          <section>
            <Container>
              <div className="">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full col-span-2">
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
                          type="text"
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
                          type="text"
                          {...register("aboutMe", { required: "Discount is required" })}
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
                          type="text"
                          {...register("productPrize", { required: "Product Price is required" })}
                          className="input input-bordered w-full pl-10"
                        />
                      </div>
                      {errors.productPrize && (
                        <span className="text-red-600">{errors.productPrize.message}</span>
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
                          type="text"
                          {...register("discount", { required: "Discount is required" })}
                          className="input input-bordered w-full pl-10"
                        />
                      </div>
                      {errors.discount && (
                        <span className="text-red-600">{errors.discount.message}</span>
                      )}
                    </div>
                  </div>
      
                  {/* loaction & linkedin*/}
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
                          type="text"
                          {...register("linkedIn", { required: "LinkedIn a rating" })}
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
                          type="text"
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
                          {...register("linkedIn", { required: "LinkedIn a rating" })}
                          className="input input-bordered w-full pl-10"
                        />
                      </div>
                      {errors.linkedIn && (
                        <span className="text-red-600">{errors.linkedIn.message}</span>
                      )}
                    </div>
                  </div>
      

   {/* <div className="relative mt-5">
      <div className="">
        <label htmlFor="picture">Upload Profile Picture</label>
        <input
          ref={fileInputRef}
          id="picture"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="cursor-pointer input input-bordered w-full mt-2"
        />
      </div>

      {selectedImage && (
        <div className="relative">
          <img
            src={selectedImage}
            alt="Profile preview"
            className="w-full h-48 object-cover rounded-lg"
          />
          <button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={handleDelete}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div> */}
                            
   <div className="relative mt-5">
  <div>
    <label htmlFor="picture" className="block text-sms font-semibold">
      Upload Profile Picture
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
        className="w-full h-48 object-cover rounded-lg"
      />
      <button
        variant="destructive"
        size="icon"
        className="absolute top-2 right-2"
        onClick={handleDelete}
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )}
</div>


                  {/* Submit Button */}
                  <input
                    type="submit"
                    value="Add Product"
                    className="btn bg-blue-500 hover:bg-green-600 mt-5 w-full text-base uppercase text-white"
                  />
                </form>
              </div>
            </Container>
          </section>
        </div>
      );
      
}

export default DetailsOneTemplate






