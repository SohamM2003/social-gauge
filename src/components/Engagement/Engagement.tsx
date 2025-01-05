import { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { API_BASE_URL } from "..";

export const Engagement: FC = () => {
  const formik = useFormik({
    initialValues: {
      postType: "",
      niche: "",
    },
    validationSchema: Yup.object({
      postType: Yup.string().required("⚠️ Post Type is required!"),
      niche: Yup.string().required("⚠️ Niche is required!"),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError, setStatus }) => {
      try {
        const response = await axios.post(
          `${API_BASE_URL}api/engagement`,
          values
        );
        setStatus(response.data.data || "✅ Insights generated successfully!");
      } catch (error: any) {
        setFieldError(
          "general",
          error.response?.data?.message || "❌ Failed to generate insights!"
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  console.log(formik);

  return (
    <section className="relative py-16 px-6 lg:px-20">
      <h2 className="text-5xl lg:text-6xl font-bold text-center mb-12 font-manga relative z-10">
        <span className="relative z-10">Engagement Booster</span>
        <span className="absolute -top-1 right-1 text-5xl lg:text-6xl font-bold text-yellow-300 -z-10 font-manga w-full">
          Engagement Booster
        </span>
      </h2>

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center gap-8"
      >
        {/* Dropdown for Post Type */}
        <select
          id="postType"
          name="postType"
          className="w-60 px-4 py-3 border-4 border-purple-500 rounded-lg shadow-lg bg-white text-gray-700 hover:bg-purple-100 hover:text-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300"
          value={formik.values.postType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="">Select Post Type</option>
          <option value="Image Post">Image Post</option>
          <option value="Video Post">Video Post</option>
          <option value="Text Post">Text Post</option>
          <option value="Reel">Reel</option>
        </select>
        {formik.touched.postType && formik.errors.postType && (
          <div className="text-red-500 text-sm">{formik.errors.postType}</div>
        )}

        {/* Text Input for Niche */}
        <input
          id="niche"
          name="niche"
          type="text"
          placeholder="Enter Niche"
          className="w-60 px-4 py-3 border-4 border-blue-500 rounded-lg shadow-lg bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300"
          value={formik.values.niche}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.niche && formik.errors.niche && (
          <div className="text-red-500 text-sm">{formik.errors.niche}</div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-300 disabled:opacity-50"
        >
          {formik.isSubmitting ? "Generating..." : "Generate Insights"}
        </button>

        {/* General Error */}
        {/* {formik.errors.general && (
          <div className="text-red-500 text-sm">{formik.errors.general}</div>
        )} */}

        {/* Result Box */}
        {formik.status && (
          <div className="mt-6 p-6 border-4 border-dashed border-gray-400 bg-gray-50 rounded-lg shadow-md text-center text-xl font-medium text-gray-800 w-4/3 mx-auto">
            {/* If the response contains hashtags */}
            {formik.status.status.includes("#") ? (
              <section className="py-6 px-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-xl">
                <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6 text-purple-700">
                  ✨ Your Hashtags Are Ready! 💖
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  {formik.status.status
                    .match(/#\w+/g)
                    ?.map((hashtag: any, index: any) => (
                      <div
                        key={index}
                        className="group relative cursor-pointer px-4 py-2 bg-white rounded-lg shadow-md text-pink-700 font-semibold text-lg hover:bg-pink-200 hover:text-pink-900 transition duration-300"
                        onClick={() => navigator.clipboard.writeText(hashtag)}
                      >
                        {hashtag}
                      </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-lg font-medium text-gray-700">
                    Copy these hashtags to boost your post's reach! 💕
                  </p>
                </div>
              </section>
            ) : (
              formik.status
            )}
          </div>
        )}
      </form>

      {/* Decorative Background Shapes */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse z-10"></div>
    </section>
  );
};
