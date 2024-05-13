import React, { useEffect, useState } from "react";

function AwardsComponent({ heading, photos }) {
  const [photoUrls, setPhotoUrls] = useState([]);

  useEffect(() => {
    const fetchPhotoUrls = async () => {
      const urls = await Promise.all(
        photos.map(async (photo) => {
          // Convert the photo string to a Blob object
          const blob = new Blob([photo], { type: "image/jpeg" });
          // Adjust the MIME type as per your requirement
          const url = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
              resolve(reader.result);
            };
            reader.readAsDataURL(blob);
          });
          return url;
        })
      );
      setPhotoUrls(urls);
    };
    fetchPhotoUrls();
  }, [photos]);

  return (
    <div className="bg-white border rounded-lg shadow-md overflow-hidden mb-4">
      <div className=" flex flex-col  p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{heading}</h3>
        <div className="grid grid-cols-3 gap-4">
          {photoUrls.map((url, index) => (
            <div key={index} className="rounded-md  overflow-hidden">
              <img
                src={url}
                alt={`Certificate ${index + 1}`}
                className="w-[300px] h-[250px]  object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AwardsComponent;
