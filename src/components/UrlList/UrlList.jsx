import React, { useState, useEffect, useContext } from "react";
import "./UrlList.css";

import useGetShortenedList from "../../hooks/useGetShortenedList";
import useRedirectWebsite from "../../hooks/useRedirectWebsite";
import AuthContext from "../../context/AuthContext";
import Button from "../Button/button";
import useDeleteUrl from "../../hooks/useDeleteUrl";

import Swal from "sweetalert2";

const UrlList = () => {
  const [urlList, setUrlList] = useState([]);

  const { authToken } = useContext(AuthContext);

  const getShortenedList = useGetShortenedList();
  const getRedirectToWebsite = useRedirectWebsite();
  const getDeleteUrl = useDeleteUrl();

  useEffect(() => {
    const fetchList = async () => {
      try {
        const data = await getShortenedList();
        setUrlList(data);
      } catch (error) {
        console.error("Failed to fetch list: ", error.message);
      }
    };

    fetchList();
  }, []);

  const handleRedirect = async (short_code) => {
    try {
      const redirectUrl = await getRedirectToWebsite(short_code);
      console.log("Obtained data");
      window.location.href = redirectUrl;
    } catch (error) {
      console.error("Failed to redirect to website: ", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const deletedUrl = await getDeleteUrl(id);
      console.log(deletedUrl);
      // Filter out the deleted item from the list
      setUrlList((prevList) => prevList.filter((item) => item.id !== id));

      Swal.fire({
        title: "Item Deleted Successfully",
        icon: "success",
        toast: true,
        timer: 5000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error("Error is deleting the url: ", error.message);
      Swal.fire({
        title: "Error in deleting the item",
        icon: "success",
        toast: true,
        timer: 5000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="url-table-container">
      <table className="url-table">
        <thead>
          <tr>
            <th>SN</th>
            <th>Original URL</th>
            <th>Short Code</th>
            <th>Delete URL</th>
          </tr>
        </thead>
        <tbody>
          {urlList.map((item, index) => (
            <tr key={item.id || index}>
              <td> {index + 1} </td>
              <td> {item.original_url} </td>
              <td>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRedirect(item.short_code);
                  }}
                >
                  {item.short_code}
                </a>
              </td>
              <td>
                <Button
                  type="submit"
                  content="Delete"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(item.id);
                  }}
                  style={{
                    backgroundColor: "rgba(240, 44, 44, 0.9)",
                    color: "whitesmoke",
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrlList;
