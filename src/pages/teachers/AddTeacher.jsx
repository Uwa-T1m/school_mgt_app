import { useStateContext } from "../../contexts/store"
import {FormRow, Button} from '../../components'

const AddTeacher = () => {
  const {file, setFile, handleUpload} = useStateContext()

  return (
      <div className="w-full flex items-center justify-center flex-col">
          <form action="">
              <div className="flex-col  shadow-md mt-4 p-4 bg-white rounded-md dark:bg-slate-800">
                  <h3 className="text-xl font-medium">Personal Details</h3>
                  <hr className="my-4" />
                  <div className="flex gap-4">
                    
                      <div>
                          <div className="flex gap-2">
                              <FormRow
                                  type='text'
                                  name='first name'
                                  width="300px"
                              />
                              <FormRow
                                  type='text'
                                  name='last name'
                                  width="300px"
                              />
                          </div>

                          <div className="flex gap-2">
                              <FormRow
                                  type='text'
                                  name='email address'
                                  width="300px"
                              />
                              <FormRow
                                  type='text'
                                  name='phone number'
                                  width="300px"
                              />
                          </div>
                  <div className="flex gap-2 items-center">
                          <div className="flex flex-col gap-4">
                              <label htmlFor='address' className="capitalize">Address</label>
                              <textarea id="address" cols="30" rows="10" className="bg-transparent w-[300px] outline-none border-2 resize-none"></textarea>
                          </div>
                          <div>
                          <img className={`h-36 w-36 rounded-md object-cover m-auto`} src={file} alt="" />
                          <input type="file" id="image" accept='image/*' className="hidden" onChange={handleUpload} />
                          <div className="flex items-center justify-center">
                              <label htmlFor="image" className="text-md text-white p-2 m-2 font-medium hover:shadow-md capitalize bg-purple-700 hover:bg-purple-900 rounded-md">Upload</label>
                              <label className="text-md text-white p-2 m-2 font-medium hover:shadow-md capitalize bg-red-500 hover:bg-red-700 rounded-md" onClick={()=>setFile('')}>Remove</label>
                          </div>
                      </div>
                      </div>
                      
                      <div className="flex gap-4 mt-3">
                                  <FormRow
                                      type='text'
                                      name='date of birth'
                                      width='300px'
                                  />
                                  <FormRow
                                      type='text'
                                      name='place of birth'
                                      width="300px"
                                  />
                          </div>
                  </div>
                  </div>
              </div>
              <div className="flex-col shadow-md mt-4 p-4 bg-white rounded-md dark:bg-slate-800">
                  <h3 className="text-xl font-medium">Education</h3>
                  <hr className="my-4" />
                  <div className="flex gap-2">
                      <FormRow
                          type="text"
                          name="university"
                          width="300px"
                      />
                      <FormRow
                          type="text"
                          name="degree"
                          width="300px"
                      />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex gap-2">
                      <FormRow
                          type="text"
                          name="start date"
                          width="150px"
                      />
                      <FormRow
                          type="text"
                          width="150px"
                          name='end date'
                      />

                    </div>
                      <FormRow
                          type="text"
                          name="city"
                          width="300px"
                      />
                  </div>
                  <Button
                      text="Add Teacher"
                      className="bg-purple-700"
                      borderRadius="5px"
                      size="lg"
                      type="submit"
                  />
              </div>
          </form>
      </div>
  )
}

export default AddTeacher