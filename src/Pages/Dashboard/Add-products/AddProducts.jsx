import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });

  const addProduct = handleSubmit(async (data) => {
    await axios
      .post("http://localhost:3001/chairsProducts", data)
      .then(() => navigate("/shop"));
  });

  return (
    <section className="add-product mt-3 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center mb-4">
            <h2>
              Add New <span style={{ color: "#f9bf29" }}>Product</span>
            </h2>
          </div>
          <form className="col-12" onSubmit={addProduct}>
            <div className="row">
              {/* Title Form */}
              <div className="mb-3 col-6">
                <input
                  className={
                    errors.title ? "form-control border-danger" : "form-control"
                  }
                  type="text"
                  placeholder="Enter product title"
                  {...register("title", {
                    required: "Title is required!",
                    minLength: {
                      value: 5,
                      message: "Title must be at least 5 characters long",
                    },
                    maxLength: {
                      value: 50,
                      message: "Title must be less than 50 characters long",
                    },
                  })}
                />
                {errors.title && (
                  <div className="form-text text-danger">
                    {errors.title.message}
                  </div>
                )}
              </div>

              {/* Salary Form */}
              <div className="mb-3 col-6">
                <input
                  className={
                    errors.salary
                      ? "form-control border-danger"
                      : "form-control"
                  }
                  type="number"
                  placeholder="Enter product salary"
                  {...register("salary", {
                    required: "Salary is required!",
                    min: {
                      value: 5,
                      message: "Salary must be at least 5",
                    },
                    max: {
                      value: 100,
                      message: "Salary must be less than 100",
                    },
                  })}
                />
                {errors.salary && (
                  <div className="form-text text-danger">
                    {errors.salary.message}
                  </div>
                )}
              </div>

              {/* Description Form */}
              <div className="mb-3 col-12">
                <textarea
                  className={
                    errors.description
                      ? "form-control border-danger"
                      : "form-control"
                  }
                  placeholder="Enter product description"
                  rows={6}
                  {...register("description", {
                    required: "Description is required!",
                    minLength: {
                      value: 5,
                      message: "Description must be at least 5 characters long",
                    },
                    maxLength: {
                      value: 120,
                      message:
                        "Description must be less than 120 characters long",
                    },
                  })}
                />
                {errors.description && (
                  <div className="form-text text-danger">
                    {errors.description.message}
                  </div>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-success"
              disabled={!isValid}
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
