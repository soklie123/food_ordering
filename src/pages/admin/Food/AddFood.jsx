import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Upload } from "lucide-react";


const AddFood = () => {
  const url = "http://localhost:4000";

  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "salad",
  });

  const onChangeHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please upload an image");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", Number(data.price));
      formData.append("category", data.category);
      formData.append("image", image);

      const res = await axios.post(`${url}/api/food/add`, formData);

      if (res.data.success) {
        toast.success("Product added successfully 🎉");
        setData({ name: "", description: "", price: "", category: "salad" });
        setImage(null);
      }
    } catch (err) {
      console.error(err);
      toast.error("Upload failed");
    }
  };

  return (
    <div className="w-full bg-white p-8 rounded-2xl shadow-lg animate-fadeIn">
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-7">

        {/* IMAGE UPLOAD */}
       <div className="flex flex-col gap-2 w-fit">
        <p className="font-medium">Upload Image</p>

        <label
          htmlFor="image"
          className="w-[260px] p-7 border-2 border-dashed border-gray-300
                    rounded-xl bg-gray-50 flex flex-col justify-center items-center
                    cursor-pointer transition hover:border-blue-500
                    hover:bg-blue-50 hover:scale-[1.02]"
        >
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="upload preview"
              className="w-20 h-20 object-cover rounded"
            />
          ) : (
            <Upload className="w-12 h-12 text-gray-400" />
          )}

          <span className="mt-2 text-gray-500 text-sm">Click to upload</span>
        </label>

        <input
          type="file"
          id="image"
          hidden
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>



        {/* PRODUCT NAME */}
        <div className="flex flex-col gap-2">
          <p className="font-medium">Product name</p>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            value={data.name}
            onChange={onChangeHandler}
            className="border border-gray-300 rounded-lg px-4 py-3
                       focus:border-blue-500 focus:ring-4
                       focus:ring-blue-200 outline-none"
            required
          />
        </div>

        {/* DESCRIPTION */}
        <div className="flex flex-col gap-2">
          <p className="font-medium">Product description</p>
          <textarea
            name="description"
            rows="5"
            placeholder="Write content here"
            value={data.description}
            onChange={onChangeHandler}
            className="border border-gray-300 rounded-lg px-4 py-3
                       resize-none focus:border-blue-500
                       focus:ring-4 focus:ring-blue-200 outline-none"
            required
          />
        </div>

        {/* CATEGORY + PRICE */}
        <div className="flex flex-wrap gap-7">

          {/* CATEGORY */}
          <div className="flex flex-col gap-2 w-[260px] max-md:w-full">
            <p className="font-medium">Product Category</p>
            <select
              name="category"
              value={data.category}
              onChange={onChangeHandler}
              className="border border-gray-300 rounded-lg px-4 py-3
                         cursor-pointer focus:border-blue-500
                         focus:ring-4 focus:ring-blue-200 outline-none"
            >
              <option value="burger">Burger</option>
              <option value="pizza">Pizza</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>

          {/* PRICE */}
          <div className="flex flex-col gap-2 w-[260px] max-md:w-full">
            <p className="font-medium">Product Price</p>
            <input
              type="number"
              name="price"
              placeholder="$20"
              value={data.price}
              onChange={onChangeHandler}
              className="border border-gray-300 rounded-lg px-4 py-3
                         focus:border-blue-500 focus:ring-4
                         focus:ring-blue-200 outline-none"
              required
            />
          </div>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-fit mt-3 px-8 py-3 bg-blue-500 text-white
                     font-semibold rounded-lg transition
                     hover:bg-blue-600 hover:-translate-y-1
                     hover:shadow-lg"
        >
          Add
        </button>

      </form>
    </div>
  );
};

export default AddFood;
