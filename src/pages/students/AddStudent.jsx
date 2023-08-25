import {useStateContext} from '../../contexts/store'
import { FormRow, Button } from "../../components"

const AddStudent = () => {
const {file, setFile, handleUpload,} = useStateContext()
    return (
        <div className="w-full flex items-center justify-center flex-col">
            <form action="">
                <div className="flex-col  shadow-md mt-4 p-4 bg-white rounded-md dark:bg-slate-800">
                    <h3 className="text-xl font-medium">Student's Details</h3>
                    <hr className="my-4" />
                    <div className="flex gap-4">
                        <div>
                            <img className={`h-36 w-36 rounded-md object-cover m-auto`} src={file} alt="" />
                            <input type="file" id="image" accept='image/*' className="hidden" onChange={handleUpload} />
                            <div className="flex items-center justify-center">
                                <label htmlFor="image" className="text-md text-white p-2 m-2 font-medium hover:shadow-md capitalize bg-purple-700 hover:bg-purple-900 rounded-md">Upload</label>
                                <label className="text-md text-white p-2 m-2 font-medium hover:shadow-md capitalize bg-red-500 hover:bg-red-700 rounded-md" onClick={()=>setFile('')}>Remove</label>
                            </div>
                        </div>
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

                            <div className="flex gap-4">
                                <div className="flex gap-2 w-[300px]">
                                    <FormRow
                                        type='text'
                                        name='date of birth'
                                        width='150px'
                                    />
                                    <FormRow
                                        type='text'
                                        name='place of birth'
                                    width="150px"
                                    />
                                </div>
                                <FormRow
                                    type='text'
                                    name="parents' name"
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
                            <div className="flex flex-col gap-4">
                                <label htmlFor='address' className="capitalize">Address</label>
                                <textarea id="address" cols="30" rows="10"  className="bg-transparent outline-none border-2 resize-none"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col shadow-md mt-4 p-4 bg-white rounded-md dark:bg-slate-800">
                    <h3 className="text-xl font-medium">Parents Details</h3>
                    <hr className="my-4" />
                    <div className="flex gap-2">
                        <FormRow
                            type="text"
                            name="first name"
                            width="300px"
                        />
                        <FormRow
                            type="text"
                            name="last name"
                            width="300px"
                        />
                    </div>
                    <div className="flex gap-2">
                        <FormRow
                            type="text"
                            name="email address"
                            width="300px"
                        />
                        <FormRow
                            type="text"
                            name="phone number"
                            width="300px"
                        />
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <label htmlFor='address' className="capitalize">Address</label>
                            <textarea id="address" cols="30" rows="10" className="w-[300px] bg-transparent outline-none border-2 resize-none"></textarea>
                        </div>
                        <div className="flex flex-col">
                            <label>Payments</label>
                            <div className="flex gap-4">
                                <div className="flex gap-2">
                                    <input type="checkbox" id="cash" className="p-4 accent-purple-700" />
                                    <label htmlFor="cash">Cash</label>
                                </div>
                                <div className="flex gap-2">
                                    <input type="checkbox" id="online" className="p-4 accent-purple-700" />
                                    <label htmlFor="online">Online</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button
                        text="Add Student"
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

export default AddStudent