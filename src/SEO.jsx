import { useEffect } from "react";

export default function SEO({ title, description }) {
  useEffect(() => {
    // <title>
    if (title) {
      document.title = title;
    }

    // <meta name="description">
    if (description) {
      let metaDesc = document.querySelector("meta[name='description']");
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}