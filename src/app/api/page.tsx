"use client";
import React, { useMemo, useState } from "react";
import axios from "axios";

const ApiPage: React.FC = () => {
  const [data, setData] = useState<object>({});
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);
  const [slowLoadMessage, setSlowLoadMessage] = useState<string>("");

  const apiLink = "https://seven-solutions-node.onrender.com/users";

  const fetchAPI = async () => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setSlowLoadMessage(
        "The API call is taking longer than expected, possibly due to a free API server."
      );
    }, 3000);

    try {
      const response = await axios.get(apiLink);
      setData(response.data);
      setSlowLoadMessage("");
      clearTimeout(timeout);
    } finally {
      setIsLoading(false);
    }
  };

  const noteText = useMemo(() => {
    if (slowLoadMessage) {
      return <span>{slowLoadMessage}</span>;
    }
    return <></>;
  }, [slowLoadMessage]);

  return (
    <div className="pl-[25%] items-center">
      <h1>
        API link:{" "}
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
          <p>Loading... {slowLoadMessage && noteText}</p>
        ) : (
          <pre className="bg-[var(--primary-text)] text-[var(--background)]">
            {JSON.stringify(data, null, 2)}
          </pre>
        ))}
    </div>
  );
};

export default ApiPage;
