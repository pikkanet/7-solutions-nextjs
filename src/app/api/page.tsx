"use client";
import React, { useState } from "react";
import axios from "axios";

const ApiPage: React.FC = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);
  const apiLink = "https://seven-solutions-node.onrender.com/users";

  const fetchAPI = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(apiLink);
      setData(response.data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pl-[25%] items-center">
      <h1>
        API from{" "}
        <a href={apiLink} target="_blank">
          {apiLink}
        </a>
      </h1>
      <button
        className="h-12 w-20 mt-4 mb-4 border hover:bg-[var(--hover-color)]"
        onClick={fetchAPI}
      >
        Fetch
      </button>
      {isLoading != undefined &&
        (isLoading ? (
          <p>Loading...</p>
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ))}
    </div>
  );
};

export default ApiPage;
