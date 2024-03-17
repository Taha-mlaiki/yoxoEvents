"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import "./event.css";

const page = () => {
  const navigate = useRouter();
  //
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  //
  function onChange(e: any) {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  }
  //
  async function onSubmit(e: any) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.success) {
            toast.success(res.success);
            setTimeout(() => {
              navigate.push("/about");
            }, 1300);
          } else {
            return toast.error(res.error);
          }
        });
    } catch (error: any) {
      return toast.error(error);
    } finally {
      setData({
        username: "",
        email: "",
        phone: "",
      });
      setLoading(false);
    }
  }
  return (
    <div className="card mb-3 text-center bg-transparent border-0 mx-auto text-light">
      <Toaster position="top-center" />
      <div className="row g-0">
        <div className="col-md-4">
          <img src="/Asset 2.png" className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <form className="mb-4" onSubmit={onSubmit}>
            <div>
              <div className="mb-3">
                <label htmlFor="InputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  onChange={onChange}
                  value={data.email}
                  name="email"
                  type="email"
                  className="form-control email"
                  id="InputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text text-light">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="InputPhone1" className="form-label">
                  Phone Number
                </label>
                <input
                  onChange={onChange}
                  name="phone"
                  value={data.phone}
                  type="tel"
                  className="form-control"
                  id="InputPhone1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="InputName1" className="form-label">
                  Full Name
                </label>
                <input
                  onChange={onChange}
                  name="username"
                  value={data.username}
                  type="text"
                  className="form-control"
                  id="InputName1"
                />
              </div>
              <button type="submit" className="btn btn-primary submit">
                Reservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
